export type DefaultPerson = { name: string | null; age: number | null }

export type Family = DefaultPerson & {
  children: DefaultPerson[]
}
