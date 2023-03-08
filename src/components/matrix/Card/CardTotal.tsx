import { FC } from "react";
import { CardTotalType } from "../../../app/matrix/types";
import style from './Card.module.css'

const CardTotal: FC<CardTotalType> = ({ number, enter, leave }) => {
    return (<span
        className={style.cardTotal}
        onMouseEnter={enter}
        onMouseLeave={leave}>
        {number}
    </span>)
}

export default CardTotal;