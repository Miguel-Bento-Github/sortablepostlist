import { swapItemsInArray } from "../swapItemsInArray"; // Replace with the actual path to your module

describe("swapItemsInArray", () => {
  it("swaps elements at valid indices", () => {
    const originalArray = [1, 2, 3, 4, 5];
    const expectedArray = [1, 4, 3, 2, 5]; // Swapped elements at indices 1 and 3

    const swappedArray = swapItemsInArray(originalArray, 1, 3);
    expect(swappedArray).toEqual(expectedArray);
  });

  it("returns the same array for invalid indices", () => {
    const originalArray = [1, 2, 3, 4, 5];

    const swappedArray = swapItemsInArray(originalArray, 0, 10);
    expect(swappedArray).toEqual(originalArray); // Should be unchanged
  });

  it("returns the same array when only one index is provided", () => {
    const originalArray = [1, 2, 3, 4, 5];

    const swappedArray = swapItemsInArray(originalArray, 2);
    expect(swappedArray).toEqual(originalArray); // Should be unchanged
  });

  it("returns the same array when no indices are provided", () => {
    const originalArray = [1, 2, 3, 4, 5];

    const swappedArray = swapItemsInArray(originalArray);
    expect(swappedArray).toEqual(originalArray); // Should be unchanged
  });
});
