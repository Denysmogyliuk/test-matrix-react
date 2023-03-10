import { MatrixType } from "./types";

export const getSortedMatrix = (matrix: MatrixType) => matrix.flatMap((row: any) => row.row).sort((a, b) => a.amount - b.amount);
