import { FC } from "react";
import { InputPropsType } from "../../types";
import styles from "./Input.module.css"

const Input: FC<InputPropsType> = ({ name, onChange, value, placeholder }) => {
    const handlerChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        const value = Number(evt.target.value);
        onChange(name, value);
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