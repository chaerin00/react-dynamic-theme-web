import client from './client'

export type LoginBody = {
  social: 'google' | 'naver' | 'kakao'
  token: string
}

export type LoginResponse = {
  email: string
  id: string
  token: string
}

export const postToken = async (body: LoginBody) => {
  try {
    const response = await client.post<LoginResponse>('/api/users/login', body)
    console.log('[SUCCESS] POST TOKEN', response)
    return response.data
  } catch (e) {
    console.log('[FAIL] POST TOKEN', e)
    return Promise.reject(e)
  }
}
