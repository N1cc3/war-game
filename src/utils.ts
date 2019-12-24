export const range = (from: number, to: number) =>
  Array(to - from)
    .fill(0)
    .map((_, idx) => idx)

export const plusMinutes = (date: Date, minutes: number) => {
  const newDate = new Date(date.valueOf())
  newDate.setMinutes(date.getMinutes() + minutes)
  return newDate
}
