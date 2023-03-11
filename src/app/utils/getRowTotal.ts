import { Cell } from "./types";

export const getRowTotal = (arr: Cell[]): number => arr.reduce((acc, number) => acc + number.amount, 0);