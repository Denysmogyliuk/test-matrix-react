import { MatrixType, SizeState } from "./types";
import { getRow } from "./getRow";

export const getMatrix = (width: number, height: number): MatrixType => {
    let counterHeight = 0;
    const matrix = [];

    while (counterHeight < height) {

        const row = getRow(width)
        matrix.push(row)
        counterHeight += 1
    }
    return matrix
}