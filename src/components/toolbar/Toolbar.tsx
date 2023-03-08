import { FC, useState } from "react";
import { SizeState } from "../../app/matrix/types";
import Button from "../elements/button/Button";
import Input from "../elements/input/Input";
import styles from "./Toolbar.module.css"

const MAX_SIZE = 100;

const Toolbar: FC = () => {
    const [{ height, width }, setSize] = useState<SizeState>({ height: 0, width: 0 })
    const [highlightsValue, setHighlightsValue] = useState(0)

    console.log(highlightsValue)

    const handleSize = (name: string, number: number) => {
        const validNumber = Math.max(0, Math.min(MAX_SIZE, Number(number)));
        setSize(state => ({ ...state, [name]: validNumber }))
    }

    //this is max value of showing elements
    const maxHighlights = 20;

    const handleHighlight = (name: string, number: number) => {
        setHighlightsValue(number)
        const validNumber = Math.max(0, Math.min(maxHighlights, Number(number)));
        setHighlightsValue(state => (validNumber))
    }

    const handleAddRow = () => { console.log("add row") }
    const handleCreateMatrix = () => { console.log("create matrix") }

    //true after init matrix
    const showHighlights = true;

    return (
        <header className={styles.header}>
            <div className={styles.widthToolbar}>
                <Input name="height" value={height} onChange={handleSize}></Input>
                <Input name="width" value={width} onChange={handleSize}></Input>
                <Button onClick={handleCreateMatrix} title="create!"></Button>
            </div>
            {showHighlights && (
                <div className={styles.highlightsToolbar}>
                    <Input name="highlight" value={highlightsValue} onChange={handleHighlight}></Input>
                    <Button onClick={handleAddRow} title="add row"></Button>
                </div>
            )}

        </header >
    )
}

export default Toolbar;