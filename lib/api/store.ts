import client from './client'

export type Store = {
  business_hours: string
  delivery_charge: number
  description: string
  distance: string
  full_address: string
  id: string
  image_url: string
  is_open: boolean
  min_order_amount: number
  name: string
  phone_number: string
}

export const fetchStoreList = async (brandId: string) => {
  try {
    const { data } = await client.get<Store[]>(
      `/stores?delivery=False&brand__id=${brandId}&dist=10000&point=127.04130142966,37.5171892352971`
    )
    return data
  } catch (e) {
    return Promise.reject(e)
  }
}
