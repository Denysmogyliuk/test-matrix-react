import { MatrixType, RowType } from "./types";

export const getSortedMatrix = (matrix: MatrixType) =>
  matrix.flatMap((row: RowType) => row.row).sort((a, b) => a.amount - b.amount);
