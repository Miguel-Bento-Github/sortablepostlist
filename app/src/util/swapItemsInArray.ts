/**
 * Returns a new array with elements swapped at the specified indices.
 * The original array remains unchanged.
 *
 * ```ts
 * // Example usage
 * const originalArray = [1, 2, 3, 4, 5];
 * const swappedArray = swapElements(originalArray, 1, 3); // Swap elements at indices 1 and 3
 * const invalidIndicesArray = swapElements(originalArray, 0, 10); // Invalid indices for swapping, remains the same as the originalArray
 * ```
 * @param array The array containing the elements to be swapped.
 * @param index1 The index of the first element to swap.
 * @param index2 The index of the second element to swap.
 * @returns A new array with swapped elements.
 */
export const swapItemsInArray = <T>(
  array: T[],
  index1?: number,
  index2?: number
): T[] => {
  if (
    index1 === undefined ||
    index2 === undefined ||
    index1 < 0 ||
    index1 >= array.length ||
    index2 < 0 ||
    index2 >= array.length
  ) {
    return array.slice(); // Return a copy of the original array
  }

  const newArray = array.slice(); // Create a copy of the original array
  [newArray[index1], newArray[index2]] = [newArray[index2], newArray[index1]];
  return newArray;
};
