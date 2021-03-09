import { RootState, ActionType } from '~/types'

export const reducer = (state: RootState, action: ActionType): RootState => {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {
        ...state,
        count: action.payload.count + 1,
      }
  }
}
