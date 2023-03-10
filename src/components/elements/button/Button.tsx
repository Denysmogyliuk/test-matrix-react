import { FC } from "react"
import { ButtonPropsType } from "../../types";
import styles from "./Button.module.css"

const Button: FC<ButtonPropsType> = ({ title, onClick, disabled }) => {
    return (
        <button className={styles.button} type="button" disabled={disabled} onClick={onClick}>{title}</button>
    )
}

export default Button;