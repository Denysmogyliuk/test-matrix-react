import { Cell } from "./types";
import { generateId } from "./generateId";

export const generateCell = (): Cell => {
    const amount = Math.floor(100 + Math.random() * 900);
    const id = generateId();

    return { amount, id }
}