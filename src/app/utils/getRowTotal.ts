import { CellType } from "../matrix/types";

export const getRowTotal = (arr: CellType[]): number => arr.reduce((acc, number) => acc + number.amount, 0)