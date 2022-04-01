import axios from 'axios'

export type ThemeResponse = {
  data: {
    id: string
    name: string
    title: string
    description: string
    keywords: string
    author: string
    og_title: string
    og_description: string
    og_image: string
    gtm: string
    bootpay_app_id: string
    kakao_app_id: string
    kakao_share_template_id: string
    kakao_channel: string
    kakao_channel_image: string
    main_logo: string
    sub_logo: string
    brand_character: string
    main_color: string
    sub_color: string
    representative_name: string
    registration_number: string
    business_report_number: string
    address: string
    email: string
    phone: string
    administrator: number
    default_menu_store_id: string
    footer_brand_name: string
  }
}

export const fetchTheme = async (referer: string) => {
  try {
    const { data } = await axios.get<ThemeResponse>(
      'https://mdvelhd113.execute-api.ap-northeast-2.amazonaws.com/develop/web/theme',
      {
        headers: {
          referer,
        },
      }
    )
    return data
  } catch (e) {
    console.log('[FAIL] FETCH THEME DATA', e)
    return Promise.reject(e)
  }
}
