export function checkStringOrNumberisNotEmpty(value: string | number | null | undefined | unknown) {
  if (typeof value === 'string') return value.trim().length > 0
  if (typeof value === 'number') return true
  return false
}
