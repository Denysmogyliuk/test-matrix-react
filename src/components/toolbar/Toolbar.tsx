import { FC, useState } from "react";
import { SizeState } from "../../app/utils/types";
import { useMatrixContext } from "../../context/MatrixContext";
import Button from "../elements/button/Button";
import Input from "../elements/input/Input";
import styles from "./Toolbar.module.css"

const MAX_SIZE = 100;

const Toolbar: FC = () => {
    const { addRow, createMatrix, highlightsValue, setHighlightsValue, matrix } = useMatrixContext()
    const [{ height, width }, setSize] = useState<SizeState>({ height: 0, width: 0 })

    const handleSize = (name: string, number: number) => {
        const validNumber = Math.max(0, Math.min(MAX_SIZE, Number(number)));
        setSize(state => ({ ...state, [name]: validNumber }))
    }

    const handleHighlight = (name: string, number: number) => {
        const maxHighlights = height > 0 || width > 0 ? height * width - 1 : 0;
        const validNumber = Math.max(0, Math.min(maxHighlights, Number(number)));
        setHighlightsValue(() => (validNumber))
    }

    const handleAddRow = () => {
        addRow(width);
    }

    const handleCreateMatrix = () => {
        createMatrix(width, height)
    }

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