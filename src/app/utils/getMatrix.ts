import { MatrixType, SizeState } from "../matrix/types";
import { getRow } from "./getRow";



export const getMatrix = ({ width, height }: SizeState): MatrixType => {
    let counterHeight = 0;
    const matrix = [];

    while (counterHeight < height) {

        const row = getRow(width)
        matrix.push(row)
        counterHeight += 1
    }

    return matrix
}