import binary_search from "./binary-search";

describe("binary_search", () => {
  it("returns true if the element is found", () => {
    const array = [1, 2, 3, 4];
    const item = 2;
    const result = binary_search(array, item);
    expect(result).toBe(true);
  });
  it("returns false if the element is found", () => {
    const array = [1, 2, 3, 4];
    const item = 5;
    const result = binary_search(array, item);
    expect(result).toBe(false);
  });
});
