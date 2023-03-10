import { createContext, FC, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { MatrixType } from "../app/utils/types";
import { getMatrix } from "../app/utils/getMatrix";
import { getRow } from "../app/utils/getRow";
import { getSortedMatrix } from "../app/utils/getSortedMatrix";
import { getHighlights } from "../app/utils/getHighlights";
import { MatrixContextType } from "./types";

type Props = { children: ReactNode }

const MatriInitialContext = {}

export const MatrixContext = createContext<MatrixContextType>(MatriInitialContext);

export const MatrixContextProvider: FC<Props> = (props) => {
    const { children } = props;

    const [matrix, setMatrix] = useState<MatrixType>([])
    const [highlightsArray, setHighlightsArray] = useState<number[]>([])
    const [highlightsValue, setHighlightsValue] = useState<number>(0);

    const setIncrement = (rowIndex: number, columnIndex: number, increment: number) => {
        setMatrix((state) => {
            const array = JSON.parse(JSON.stringify(state))
            array[rowIndex].row[columnIndex].amount += increment;
            return array;
        })
    }

    const createMatrix = (width: number, height: number) => {
        console.log(width, height, "HUI")
        width < 1 || height < 1 ? setMatrix([]) : setMatrix(() => getMatrix(width, height))
    }

    const addRow = (width: number) => {
        setMatrix((state) => {
            const array = JSON.parse(JSON.stringify(state));
            array.push(getRow(width));
            return array;
        })
    }

    const deleteRow = (rowIndex: number) => {
        setMatrix((state) => {
            const array = JSON.parse(JSON.stringify(state));
            array.splice(rowIndex, 1);
            return array;
        })
    }

    const sorted = getSortedMatrix(matrix)

    const installHighlights = (id: number, state: boolean) => {
        state ? setHighlightsArray(getHighlights(highlightsValue, id, sorted)) : setHighlightsArray([])
    }

    // const value = useMemo(() => ({ state, setState }), [state])

    return <MatrixContext.Provider value={{
        matrix,
        setIncrement,
        addRow,
        deleteRow,
        installHighlights,
        highlightsArray,
        createMatrix,
        setHighlightsValue,
        highlightsValue
    }}>
        {children}
    </MatrixContext.Provider >
}

export const useMatrixContext = () => useContext(MatrixContext)
