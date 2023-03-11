import { MatrixType } from "./types";
import { generateRow } from "./generateRow";

export const getMatrix = (width: number, height: number): MatrixType => Array.from({ length: height }, () => generateRow(width));