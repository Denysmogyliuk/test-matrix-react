import { FC, useState } from "react";
import { getRowTotal } from "../../../app/utils/getRowTotal";
import { useMatrixContext } from "../../../context/MatrixContext";
import { RowElemIndex } from "../../types";
import Card from "../Card/Card";
import CardPercent from "../Card/CardPercent";
import CardTotal from "../Card/CardTotal";
import style from './Row.module.css'

const Row: FC<RowElemIndex> = ({ row, rowIndex }) => {
    const { deleteRow } = useMatrixContext()

    const [showPercent, setShowPercent] = useState<boolean>(false);

    const handleShowPercent = () => {
        setShowPercent(true)
    }

    const handleClosePercent = () => {
        setShowPercent(false)
    }

    const handleRemoveRow = () => { deleteRow(rowIndex) }

    const lineTotal = getRowTotal(row)
    const linePercent = row.map((number) => (number.amount / lineTotal * 100).toFixed(1))

    return (
        <>
            <ul className={style.row}>

                {!showPercent ?
                    row.map((item: any, index) =>
                        <li key={item.id}>
                            <Card id={item.id} rowIndex={rowIndex} columnIndex={index} amount={item.amount} />
                        </li>) :
                    linePercent.map((item: any, index) =>
                        <li key={index}>
                            <CardPercent amount={item} />
                        </li>)
                }

                <CardTotal enter={handleShowPercent} leave={handleClosePercent} number={lineTotal} />
                <li>
                    <button className={style.removeButton} onClick={handleRemoveRow}>X</button>
                </li>
            </ul >
        </>
    )
}

export default Row;