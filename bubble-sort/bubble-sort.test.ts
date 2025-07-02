import bubble_sort from './bubble-sort-2'

describe('bubble sort', () => {
    it('sorts the array values from smallest to largest', () => {
        const array = [5, 4, 3, 2, 1]
        bubble_sort(array)
        console.log(array)
        expect(array[0]).toBe(1)
        expect(array[1]).toBe(2)
        expect(array[2]).toBe(3)
        expect(array[3]).toBe(4)
        expect(array[4]).toBe(5)
    })
})