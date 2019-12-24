export const range = (from: number, to: number) =>
  Array(to - from)
    .fill(0)
    .map((_, idx) => idx)

export const plusMillis = (date: Date, ms: number) => {
  const newDate = new Date(date.valueOf())
  newDate.setMilliseconds(date.getMilliseconds() + ms)
  return newDate
}
