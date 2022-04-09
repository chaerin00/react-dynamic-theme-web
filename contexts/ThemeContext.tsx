import React, { useReducer, useContext, createContext, Dispatch } from 'react'

type State = {
  count: number
  text: string
}

type Action =
  | { type: 'SET_COUNT'; count: number }
  | { type: 'SET_TEXT'; text: string }

type ThemeDispatch = Dispatch<Action>

const ThemeStateContext = createContext<State>({
  count: 0,
  text: '',
})
const ThemeDispatchContext = createContext<ThemeDispatch | null>(null)

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_COUNT':
      return {
        ...state,
        count: action.count,
      }
    case 'SET_TEXT':
      return {
        ...state,
        text: action.text,
      }
    default:
      throw new Error('Unhandled action')
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: 'hello',
  })

  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  )
}

export function useThemeState() {
  const state = useContext(ThemeStateContext)
  if (!state) throw new Error('Cannot find ThemeProvider') // 유효하지 않을땐 에러를 발생
  return state
}

export function useThemeDispatch() {
  const dispatch = useContext(ThemeDispatchContext)
  if (!dispatch) throw new Error('Cannot find ThemeProvider') // 유효하지 않을땐 에러를 발생
  return dispatch
}
