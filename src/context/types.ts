import { Dispatch, ReactNode, SetStateAction } from "react"
import { MatrixType } from "../app/utils/types"

export interface MatrixContextType {
    addRow: (width: number) => void,
    createMatrix: (width: number, height: number) => void,
    deleteRow: (rowIndex: number) => void,
    highlightsArray: number[],
    highlightsValue: number
    installHighlights: (id: number, state: boolean) => void,
    matrix: MatrixType,
    setHighlightsValue: Dispatch<SetStateAction<number>>,
    setIncrement: (rowIndex: number, columnIndex: number, increment: number) => void,
}

export type MatrixContextProviderProps = { children: ReactNode }
