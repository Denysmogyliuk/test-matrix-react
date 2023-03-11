export interface Cell {
    amount: number,
    id: number
}

export interface RowType {
    row: Cell[],
    id: number
}

export type SizeState = {
    width: number,
    height: number
}

export type MatrixType = RowType[];

export interface NumberType {
    amount: number,
    id: number
}

export interface HighlightType {
    highlight: number,
    id: number
    arr: Number[]
}

export interface StateSize {
    height: number,
    width: number
}
