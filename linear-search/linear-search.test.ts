import linear_search from "./linear-search"

describe('linear_search', () => {
  it('returns true if the item in the array', () => {
    const array = [1, 2, 3, 4, 5]
    const item = 2
    const result = linear_search(array, item)
    expect(result).toBe(true)    
  })
  it('returns false if the item is not in the array', () => {
    const array = [1, 2, 3, 4, 5]
    const item = 8
    const result = linear_search(array, item)
    expect(result).toBe(false)
  })
})