declare module '*.mdx'

declare module '*.svg' {
  import * as React from 'react'

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >

  const src: string
  export default src
}

declare module '*.gif' {
  import * as React from 'react'

  const src: string
  export default src
}
