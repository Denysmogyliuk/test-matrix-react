import { FC } from "react";
import { getAverage } from "../../../app/utils/getAverage";
import { useMatrixContext } from "../../../context/MatrixContext";
import CardAverage from "../Card/CardAverage";
import styles from "./Row.module.css"


const RowAverage: FC = () => {
    const { matrix } = useMatrixContext()

    const average = getAverage(matrix)

    return <ul className={styles.row}>
        {average.map((item, index) =>
            <CardAverage key={index} number={item} />)}
    </ul>
}

export default RowAverage;