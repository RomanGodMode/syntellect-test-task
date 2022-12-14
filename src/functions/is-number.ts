export const isNumber = (value: string) => {
  value = value.replace(',', '.')
  return !isNaN(value as any) && !isNaN(parseFloat(value))
}
