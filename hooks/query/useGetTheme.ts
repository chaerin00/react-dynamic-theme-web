import { useQuery } from 'react-query'

import { fetchTheme, Theme } from 'lib/api/theme'

export const useGetTheme = (initialData: Theme) => {
  const referer = typeof window !== 'undefined' ? document.referrer : ''
  const query = useQuery('theme', () => fetchTheme(referer), { initialData })
  return query
}
