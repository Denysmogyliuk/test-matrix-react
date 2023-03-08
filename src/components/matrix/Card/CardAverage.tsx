import { FC } from "react";
import { CardAverageType } from "../../../app/matrix/types";
import style from './Card.module.css'

const CardAverage: FC<CardAverageType> = ({ number }) => {
    return <span
        className={style.cardAverage}>
        {number}
    </span >
}

export default CardAverage;