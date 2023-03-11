import { createContext, FC, useContext, useState } from "react";
import { getHighlights } from "../app/utils/getHighlights";
import { getMatrix } from "../app/utils/getMatrix";
import { generateRow } from "../app/utils/generateRow";
import { getSortedMatrix } from "../app/utils/getSortedMatrix";
import { MatrixContextProviderProps, MatrixContextType } from "./types";
import { MatrixType } from "../app/utils/types";

const matrixInitialContext = {
    addRow: () => { },
    createMatrix: () => { },
    deleteRow: () => { },
    highlightsArray: [],
    highlightsValue: 0,
    installHighlights: () => { },
    matrix: [],
    setHighlightsValue: () => { },
    setIncrement: () => { }
}

export const MatrixContext = createContext<MatrixContextType>(matrixInitialContext);

export const MatrixContextProvider: FC<MatrixContextProviderProps> = (props) => {
    const { children } = props;
    const [matrix, setMatrix] = useState<MatrixType>([]);
    const [highlightsArray, setHighlightsArray] = useState<number[]>([]);
    const [highlightsValue, setHighlightsValue] = useState<number>(0);

    const setIncrement = (rowIndex: number, columnIndex: number, increment: number) => {
        setMatrix((state) => {
            const row = { ...state[rowIndex] };
            const col = { ...row.row[columnIndex] };
            const amount = col.amount + increment;
            const newState = [...state];

            newState[rowIndex].row[columnIndex] = { id: col.id, amount }
            return newState;
        })
    }

    const createMatrix = (width: number, height: number) => {
        if (width < 1 || height < 1) {
            return setMatrix([]);
        }

        return setMatrix(() => getMatrix(width, height))
    }

    const addRow = (width: number) => {
        setMatrix((state) => {
            const row = generateRow(width);
            return [...state, row];
        })
    }

    const deleteRow = (rowIndex: number) => {
        setMatrix((state) => state.filter((_, index) => index !== rowIndex))
    }

    const sorted = getSortedMatrix(matrix)

    const installHighlights = (id: number, state: boolean) => {
        if (!state) {
            setHighlightsArray([]);
            return
        }

        if (highlightsValue === 0 || sorted.length === 0) {
            setHighlightsArray([]);
            return
        }

        const toHightLight = getHighlights(highlightsValue, id, sorted);

        setHighlightsArray(toHightLight);
    }

    return <MatrixContext.Provider value={{
        addRow,
        createMatrix,
        deleteRow,
        highlightsArray,
        highlightsValue,
        installHighlights,
        matrix,
        setHighlightsValue,
        setIncrement,
    }}>
        {children}
    </MatrixContext.Provider >
}

export const useMatrixContext = () => useContext(MatrixContext);
