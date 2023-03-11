import { FC, useEffect, useState } from "react";
import { useMatrixContext } from "../../../context/MatrixContext";
import { CardType } from "../../types";
import style from './Card.module.css'

const INCREMENT = 1;

const Card: FC<CardType> = ({ amount, rowIndex, columnIndex, id }) => {
    const { setIncrement, installHighlights, highlightsArray } = useMatrixContext();
    const [isHighlight, setIsHighlight] = useState<boolean>(false);

    const handleIncrement = () => { setIncrement(rowIndex, columnIndex, INCREMENT) }

    const handleEnter = () => { installHighlights(id, true) }

    const handleLeave = () => { installHighlights(id, false) }

    useEffect(() => {
        highlightsArray.includes(id)
            ? setIsHighlight(true)
            : setIsHighlight(false)
    }, [id, highlightsArray]);

    return <button
        className={isHighlight ? [style.card, style.cardHighlight].join(" ") : style.card}
        onClick={handleIncrement} type="button"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}>{amount}
    </button>
}

export default Card;