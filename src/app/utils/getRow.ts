import { RowType } from "../matrix/types"
import { getRandomId } from "./getRandomId"
import { getCell } from "./getCell"

export const getRow = (width: number): RowType => {
    const Row: RowType = {
        row: [],
        id: getRandomId()
    }


    for (let i = 0; i < width; i++) {
        Row.row.push(getCell())
    }

    return Row;
}