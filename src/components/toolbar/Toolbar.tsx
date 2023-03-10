import { FC, useEffect, useState } from "react";
import { SizeState } from "../../app/utils/types";
import { useMatrixContext } from "../../context/MatrixContext";
import Button from "../elements/button/Button";
import Input from "../elements/input/Input";
import styles from "./Toolbar.module.css"

const MAX_SIZE = 100;

const Toolbar: FC = () => {
    const { addRow, createMatrix, highlightsValue, setHighlightsValue, matrix } = useMatrixContext()
    const [{ height, width }, setSize] = useState<SizeState>({ height: 0, width: 0 })
    const [limitHighlights, setLimitHighlights] = useState<number>(0)

    const handleSize = (name: string, value: number) => {
        const validNumber = Math.max(0, Math.min(MAX_SIZE, Number(value)));
        setSize(state => ({ ...state, [name]: validNumber }))
    }

    const handleHighlight = (name: string, value: number) => {
        const validNumber = Math.max(0, Math.min(limitHighlights, Number(value)));
        setHighlightsValue(() => (validNumber))
    }

    const handleAddRow = () => {
        addRow(width);
    }

    const handleCreateMatrix = () => {
        createMatrix(width, height)
    }

    useEffect(() => {
        setSize({ height: matrix.length, width: matrix.length && matrix[0].row.length })
        setLimitHighlights(matrix.length && matrix.length * matrix[0].row.length - 1)
    }, [matrix])

    useEffect(() => {
        setHighlightsValue((value) => value > limitHighlights ? limitHighlights : value)
    }, [limitHighlights, setHighlightsValue])

    return (
        <header className={styles.header}>
            <div className={styles.widthToolbar}>
                <Input name="width" value={width} onChange={handleSize}></Input>
                <Input name="height" value={height} onChange={handleSize}></Input>
                <Button onClick={handleCreateMatrix} title="create!"></Button>
            </div>
            {matrix.length ? (
                <div className={styles.highlightsToolbar}>
                    <Input name="highlight" value={highlightsValue} onChange={handleHighlight}></Input>
                    <Button onClick={handleAddRow} title="add row"></Button>
                </div>
            ) : null}

        </header >
    )
}

export default Toolbar;