import { css } from '@emotion/react'
import palette from './palette'

const globalStyle = css`
  @import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);

  ${palette}
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans KR';
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  button {
    background: none;
    border: none;
    font-family: 'Noto Sans KR';
    :active {
      outline: none;
    }
  }
`
export default globalStyle
