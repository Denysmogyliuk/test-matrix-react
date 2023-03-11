import { Cell } from "./types"

export const getHighlights = (highlight: number, id: number, filteredArr: Cell[]): number[] => {
    const arrayFromId: number[] = []
    const index = filteredArr.findIndex(cell => cell.id === id)
    const amount = filteredArr[index].amount

    let afterIndex: number = index + 1;
    let beforeIndex: number = index - 1;

    while (arrayFromId.length !== highlight) {

        const nextValue = filteredArr[afterIndex];
        const previousValue = filteredArr[beforeIndex];

        if (!nextValue) {
            arrayFromId.push(previousValue.id);
            beforeIndex -= 1;
        } else if (!previousValue) {
            arrayFromId.push(nextValue.id);
            afterIndex += 1;
        } else {
            const amountDiff = amount - previousValue.amount < nextValue.amount - amount;
            amountDiff ? arrayFromId.push(previousValue.id) : arrayFromId.push(nextValue.id);
            amountDiff ? beforeIndex-- : afterIndex++;
        }
    }
    return arrayFromId;
}
