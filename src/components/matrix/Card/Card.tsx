import { FC, useEffect, useState } from "react";
import { useMatrixContext } from "../../../context/MatrixContext";
import { CardType } from "../../types";
import style from './Card.module.css'

const Card: FC<CardType> = ({ amount, rowIndex, columnIndex, id }) => {
    const { setIncrement, installHighlights, highlights } = useMatrixContext()
    const [isHighlight, setIsHighlight] = useState<boolean>(false)


    const handleIncrement = () => { setIncrement(rowIndex, columnIndex, 1) }

    const handleEnter = () => { installHighlights(id, true) }

    const handleLeave = () => { installHighlights(id, false) }

    useEffect(() => {
        highlights.includes(id)
            ? setIsHighlight(true)
            : setIsHighlight(false)
    }, [id, highlights])

    return <button
        className={isHighlight ? [style.card, style.cardHighlight].join(" ") : style.card}
        onClick={handleIncrement} type="button"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}>{amount}
    </button>
}

export default Card;