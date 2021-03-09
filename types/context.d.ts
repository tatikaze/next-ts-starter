export type ActionType = {
  type: string
  payload: {
    count?: number
  }
}

export type RootState = {
  count: number
}
