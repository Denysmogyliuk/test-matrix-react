import { GetCellType } from "./types";
import { getRandomId } from "./getRandomId";

export const getCell = (): GetCellType => {
    const amount = Math.floor(100 + Math.random() * 900);
    const id = getRandomId();

    return { amount, id }
}