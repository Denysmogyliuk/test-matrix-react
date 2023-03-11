import { RowType } from "./types"
import { generateId } from "./generateId"
import { generateCell } from "./generateCell"

export const generateRow = (width: number): RowType => {
    const row = Array.from({ length: width }, () => generateCell());

    return { row, id: generateId() };
}
