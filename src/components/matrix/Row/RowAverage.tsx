import { FC, useContext, useState } from "react";
import { MatrixType } from "../../../app/matrix/types";
import { getAverage } from "../../../app/utils/getAverage";
import { Context } from "../../context";
import CardAverage from "../Card/CardAverage";
import styles from "./Row.module.css"


const RowAverage: FC<any> = () => {
    const array = useContext<MatrixType>(Context)

    const average = getAverage(array)

    return <ul className={styles.row}>
        {average.map((item, index) =>
            <CardAverage key={index} number={item} />)}
    </ul>
}

export default RowAverage;