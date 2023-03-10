import { customAlphabet } from "nanoid";

const ALPHABET = '123456789';
const nanoid = customAlphabet(ALPHABET, 7);

export const getRandomId = (): number => {
    return Number(nanoid())
}