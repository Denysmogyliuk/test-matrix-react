import { HighlightType } from "../matrix/types"


export const getHighlights = ({ highlight, id, arr }: HighlightType): string[] => {

    const arrIdxHighlight: string[] = []

    if (highlight === 0 || arr.length === 0) return arrIdxHighlight

    const idx = arr.findIndex(number => number.id === id)
    const number = arr[idx].number

    let afterIdx: number = idx + 1;
    let beforeIdx: number = idx - 1

    while (arrIdxHighlight.length !== highlight) {

        const afterNum = arr[afterIdx]
        const beforeNum = arr[beforeIdx]

        if (!afterNum) {
            arrIdxHighlight.push(beforeNum.id)
            beforeIdx -= 1
        } else if (!beforeNum) {
            arrIdxHighlight.push(afterNum.id)
            afterIdx += 1
        } else {

            number - beforeNum.number < afterNum.number - number ? arrIdxHighlight.push(beforeNum.id) : arrIdxHighlight.push(afterNum.id)

            number - beforeNum.number < afterNum.number - number ? beforeIdx -= 1 : afterIdx += 1
        }
    }

    return arrIdxHighlight
}