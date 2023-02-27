import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    font-display: swap;
    src: local('Pretendard Medium'),
        url('../fonts/Pretendard-Medium.woff2') format('woff2'),
        url('../fonts/Pretendard-Medium.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    font-display: swap;
    src: local('Pretendard SemiBold'),
        url('../fonts/Pretendard-SemiBold.woff2') format('woff2'),
        url('../fonts/Pretendard-SemiBold.woff') format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-display: swap;
    src: local('Pretendard Bold'),
        url('../fonts/Pretendard-Bold.woff2') format('woff2'),
        url('../fonts/Pretendard-Bold.woff') format('woff');
  }

  
  * {
    word-break: keep-all;
  }

  body{
    font-family: 'Pretendard', sans-serif;
    font-weight: 500;
  }

  #wrap {
    max-width: 480px; //최소 360px
    width: 100%;
    margin: 0 auto;
   
  }

  button {
    cursor: pointer;
  }
`

export default GlobalStyle
