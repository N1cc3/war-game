export const range = (from: number, to: number) =>
  Array(to - from)
    .fill(0)
    .map((_, idx) => idx)
