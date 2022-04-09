import React, { useReducer, useContext, createContext, Dispatch } from 'react'
import { Theme } from 'lib/api/theme'

type Action = { type: 'SET_THEME'; theme: Theme }

type ThemeDispatch = Dispatch<Action>

const initialData: Theme = {
  id: '',
  name: '',
  title: '',
  description: '',
  keywords: '',
  author: '',
  og_title: '',
  og_description: '',
  og_image: '',
  gtm: '',
  bootpay_app_id: '',
  kakao_app_id: '',
  kakao_share_template_id: '',
  kakao_channel: '',
  kakao_channel_image: '',
  main_logo: '',
  sub_logo: '',
  brand_character: '',
  main_color: '',
  sub_color: '',
  representative_name: '',
  registration_number: '',
  business_report_number: '',
  address: '',
  email: '',
  phone: '',
  administrator: 0,
  default_menu_store_id: '',
  footer_brand_name: '',
}

const ThemeStateContext = createContext<Theme>(initialData)
const ThemeDispatchContext = createContext<ThemeDispatch | null>(null)

function reducer(state: Theme, action: Action): Theme {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        ...action.theme,
      }
    default:
      throw new Error('Unhandled action')
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialData)

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
  if (!state) throw new Error('Cannot find ThemeProvider')
  return state
}

export function useThemeDispatch() {
  const dispatch = useContext(ThemeDispatchContext)
  if (!dispatch) throw new Error('Cannot find ThemeProvider')
  return dispatch
}
