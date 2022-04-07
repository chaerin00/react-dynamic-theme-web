import { useQuery } from 'react-query'
import { fetchTheme, Theme } from 'lib/api/theme'

export const useGetTheme = (referer: string, initialData: Theme) => {
  const query = useQuery('theme', () => fetchTheme(referer), { initialData })
  return query
}
