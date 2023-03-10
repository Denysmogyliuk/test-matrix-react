export type CellType = {
    amount: number,
    id: number,
    rowIndex: number,
    columnIndex: number
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

export type CardType = {
    amount: number,
    rowIndex: number,
    columnIndex: number,
    id: number
}

export interface CardAverageType {
    number: number,
}

export interface CardPercentType {
    amount: number,
}

export interface CardTotalType {
    number: number,
    enter: () => void,
    leave: () => void
}

export interface GetCellType {
    amount: number,
    id: number
}

export interface RowElemIndex {
    row: GetCellType[],
    rowIndex: number
}