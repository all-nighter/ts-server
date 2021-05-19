interface SF0<R = void> {
  (): R | Promise<R>
}

interface SF1<T, R = void> {
  (input: T): R | Promise<R>
}

export type SF<T, R = void> = T extends void ? SF0<R> : SF1<T, R>
