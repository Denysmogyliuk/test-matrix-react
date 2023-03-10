import { GetCellType } from "./types"

export const getHighlights = (highlight: number, id: number, arr: GetCellType[]): number[] => {


    const arrHighlightsId: number[] = []

    if (highlight === 0 || arr.length === 0) return arrHighlightsId

    const index = arr.findIndex(number => number.id === id)
    const number = arr[index].amount

    let afterIndex: number = index + 1;
    let beforeIndex: number = index - 1

    while (arrHighlightsId.length !== highlight) {

        const afterNum = arr[afterIndex]
        const beforeNum = arr[beforeIndex]

        if (!afterNum) {
            arrHighlightsId.push(beforeNum.id)
            beforeIndex -= 1
        } else if (!beforeNum) {
            arrHighlightsId.push(afterNum.id)
            afterIndex += 1
        } else {

            number - beforeNum.amount < afterNum.amount - number ? arrHighlightsId.push(beforeNum.id) : arrHighlightsId.push(afterNum.id)

            number - beforeNum.amount < afterNum.amount - number ? beforeIndex-- : afterIndex++
        }
    }
    return arrHighlightsId
}
