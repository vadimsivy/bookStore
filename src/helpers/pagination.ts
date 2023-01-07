export const getTotalPages = (totalPages: number): number[] => (
  Array.from({length: totalPages}, (_, index) => index + 1)
)
