import { FC } from "react";
import { CardPercentType } from "../../types";
import style from './Card.module.css'

const CardPercent: FC<CardPercentType> = ({ amount }) => {
    const background = { background: ` linear-gradient(90deg, rgb(253, 101, 74) 0%, rgb(253, 101, 74) ${amount}%, rgb(255, 162, 145) ${amount}%, rgb(255, 162, 145) 100%)` };

    return <button
        className={style.card}
        style={background}>
        {`${amount}%`}
    </button >
}

export default CardPercent;