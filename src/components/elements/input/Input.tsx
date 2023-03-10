import { FC } from "react";
import { InputPropsType } from "../../types";
import styles from "./Input.module.css"

const Input: FC<InputPropsType> = ({ name, onChange, value, placeholder, max }) => {

    const handlerChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        const number = Number(evt.target.value);
        onChange(name, number)
    }

    return (
        <fieldset className={styles.fieldset}>
            <label htmlFor={name}>{name}</label>
            <input
                className={styles.input}
                name={name}
                onChange={(evt) => handlerChange(evt)}
                type="number"
                value={value}
                placeholder={placeholder}
            />
        </fieldset>

    );
};

export default Input;