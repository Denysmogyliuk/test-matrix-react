import { Dispatch, ReactNode, SetStateAction } from "react"
import { MatrixType } from "../app/utils/types"

export interface MatrixContextType {
    matrix: MatrixType,
    setIncrement: (rowIndex: number, columnIndex: number, increment: number) => void,
    addRow: (width: number) => void,
    deleteRow: (rowIndex: number) => void,
    installHighlights: any
    highlightsArray: number[],
    createMatrix: (width: number, height: number) => void,
    setHighlightsValue: Dispatch<SetStateAction<number>>,
    highlightsValue: number
}

export type MatrixContextProviderProps = { children: ReactNode }
