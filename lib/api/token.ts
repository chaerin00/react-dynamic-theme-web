import client from './client'

export type TokenPayload = {
  brand_id: string
  code: string
  redirect_uri: string
}

export type TokenResponse = {
  access: string
  is_new_user: boolean
  phone_number: string
  refresh: string
  username: string
}

export const postToken = async (payload: TokenPayload) => {
  try {
    const { data } = await client.post<TokenResponse>('token/kakao', payload)
    return data
  } catch (e) {
    return Promise.reject(e)
  }
}
