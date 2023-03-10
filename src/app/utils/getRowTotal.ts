import { GetCellType } from "./types";

export const getRowTotal = (arr: GetCellType[]): number => arr.reduce((acc, number) => acc + number.amount, 0)