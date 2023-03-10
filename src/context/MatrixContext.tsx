import { createContext, Dispatch, FC, ReactNode, SetStateAction, useContext, useMemo, useState } from "react";
import { MatrixType } from "../app/utils/types";
import { getMatrix } from "../app/utils/getMatrix";
import { getRow } from "../app/utils/getRow";
import { getSortedMatrix } from "../app/utils/getSortedMatrix";
import { getHighlights } from "../app/utils/getHighlights";

type Props = { children: ReactNode }

interface MatrixContextType {
    matrix: MatrixType,
    setIncrement: (rowIndex: number, columnIndex: number, increment: number) => void,
    matrixIsOpen: boolean,
    setMatrixIsOpen: Dispatch<SetStateAction<boolean>>,
    addRow: (width: number) => void,
    deleteRow: (rowIndex: number) => void,
    installHighlights: any
    highlights: number[],
    createMatrix: any
}

export const MatrixContext = createContext<MatrixContextType>({});

export const MatrixContextProvider: FC<Props> = (props) => {
    const { children } = props;

    const [matrix, setMatrix] = useState<MatrixType>([])
    const [matrixIsOpen, setMatrixIsOpen] = useState<boolean>(true)
    const [highlights, setHighlights] = useState<number[]>([])

    const setIncrement = (rowIndex: number, columnIndex: number, increment: number) => {
        setMatrix((state) => {
            const array = JSON.parse(JSON.stringify(state))
            array[rowIndex].row[columnIndex].amount += increment;
            return array;
        })
    }

    const createMatrix = (width: number, height: number) => {
        if (width === 0 && height === 0) {
            setMatrix([])
            return null
        }
        setMatrix(() => getMatrix({ width: width, height: height }))
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
        state ? setHighlights(getHighlights(1, id, sorted)) : setHighlights([])
    }

    // const value = useMemo(() => ({ state, setState }), [state])

    return <MatrixContext.Provider value={{ matrix, setIncrement, matrixIsOpen, setMatrixIsOpen, addRow, deleteRow, installHighlights, highlights, createMatrix }}> {children}</MatrixContext.Provider >
}

export const useMatrixContext = () => useContext(MatrixContext)
