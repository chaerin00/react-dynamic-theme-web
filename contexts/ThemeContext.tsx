import React, { useContext, createContext } from 'react'

import { Theme } from 'lib/api/theme'

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

export function ThemeProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: Theme
}) {
  return (
    <ThemeStateContext.Provider value={value}>
      {children}
    </ThemeStateContext.Provider>
  )
}

export function useThemeState() {
  const state = useContext(ThemeStateContext)
  if (!state) throw new Error('Cannot find ThemeProvider')
  return state
}
