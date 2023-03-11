import { FC } from "react";
import Row from "./Row/Row";
import RowAverage from "./Row/RowAverage";
import style from './Matrix.module.css'
import { RowType } from "../../app/utils/types";
import { useMatrixContext } from "../../context/MatrixContext";

const Matrix: FC = () => {
    const { matrix } = useMatrixContext();

    return (
        <>
            <ul className={style.column}>
                {matrix.map((item: RowType, index: number) => {
                    return <li className={style.row} key={item.id}>
                        <Row rowIndex={index} row={item.row} />
                    </li>
                })}
                <RowAverage />
            </ul>
        </>
    )
}

export default Matrix;