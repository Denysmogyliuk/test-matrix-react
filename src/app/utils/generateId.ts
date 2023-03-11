import { customAlphabet } from "nanoid";

const ALPHABET = '123456789';
const nanoid = customAlphabet(ALPHABET, 12);

export const generateId = (): number => Number(nanoid());
