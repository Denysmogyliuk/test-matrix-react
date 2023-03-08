import { FC, useContext } from "react";
import { MatrixType, RowType } from "../../app/matrix/types";
import { Context } from "../context";
import Row from "./Row/Row";
import RowAverage from "./Row/RowAverage";
import style from './Matrix.module.css'

const Matrix: FC = () => {

    const array = useContext<MatrixType>(Context)

    return (
        <>
            <ul className={style.column}>
                {array.map((item: RowType) => {
                    return <li className={style.row} key={item.id}>
                        <Row id={item.id} row={item.row} />
                    </li>
                })}
                <RowAverage />
            </ul>
        </>
    )
}

export default Matrix;