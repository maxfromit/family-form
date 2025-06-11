export type NameAndAge = { name: string; age: number }

export type Family = NameAndAge & {
  children: NameAndAge[]
}
