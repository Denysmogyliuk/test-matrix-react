import { customAlphabet } from "nanoid";

const ALPHABET = '0123456789';
const nanoid = customAlphabet(ALPHABET, 10);

export const getRandomId = (): number => {
    return +nanoid()
}