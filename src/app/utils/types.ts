// export type CellType = {
//     amount: number,
//     id: number,
//     rowIndex: number,
//     columnIndex: number
// }

export interface RowType {
    row: GetCellType[],
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

export
    interface HighlightType {
    highlight: number,
    id: number
    arr: Number[]
}

export interface StateSizeType {
    height: number,
    width: number
}

export interface GetCellType {
    amount: number,
    id: number
}