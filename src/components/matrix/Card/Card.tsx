import { FC } from "react";
import { CellType } from "../../../app/matrix/types";
import style from './Card.module.css'

const Card: FC<CellType> = ({ id, amount }) => {

    const isHighlight = false;

    const handleIncrement = () => { console.log(id) }

    const handleEnter = () => { console.log(id) }

    const handleLeave = () => { console.log(id) }

    return <button
        className={isHighlight ? [style.card, style.cardHighlight].join(" ") : style.card}
        onClick={handleIncrement} type="button"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}>{amount}
    </button>
}

export default Card;