import { MatrixType } from "./types"

export const getAverage = (matrix: MatrixType): number[] => {
    const arrAverage: number[] = []
    const height: number = matrix.length;
    const width: number = matrix[0].row.length;

    for (let i = 0; i < width; i += 1) {
        let total: number = 0;

        for (let j = 0; j < height; j += 1) {
            total += matrix[j].row[i].amount;
        }

        const average = +(total / height).toFixed(0);
        arrAverage.push(average);
    }

    return arrAverage;
}