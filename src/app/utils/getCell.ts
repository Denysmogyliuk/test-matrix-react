import { CellType } from "../matrix/types";
import { getRandomId } from "./getRandomId";



export const getCell = (): CellType => {
    const amount = Math.floor(100 + Math.random() * 900);
    const id = getRandomId();

    return { amount, id }
}