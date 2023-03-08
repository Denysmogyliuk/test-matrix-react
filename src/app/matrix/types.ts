export type CellType = {
    amount: number,
    id: number
}

export interface RowType {
    row: CellType[],
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

export interface ButtonPropsType {
    title: string,
    disabled?: boolean
    onClick: () => void,
}

export interface InputPropsType {
    name: string;
    onChange: (name: string, number: number) => void;
    placeholder?: string,
    value: number,
    max?: number
}

export interface StateSizeType {
    height: number,
    width: number
}

export interface CardAverageType {
    number: number,
}

export interface CardPercentType {
    id: number,
    amount: number,
}

export interface CardTotalType {
    number: number,
    enter: () => void,
    leave: () => void
}