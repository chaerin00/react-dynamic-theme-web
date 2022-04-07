import { useQuery } from 'react-query'
import { fetchStoreList, Store } from 'lib/api/store'

export const useGetStoreList = (initialData: Store[]) => {
  const brandId = process.env.NEXT_PUBLIC_BRAND_ID || ''
  const query = useQuery('store', () => fetchStoreList(brandId), {
    initialData,
  })
  return query
}
