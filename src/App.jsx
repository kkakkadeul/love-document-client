import React from 'react'
import GlobalStyle from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import Router from './Router'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div id="wrap">
        <Router />
      </div>
    </ThemeProvider>
  )
}

export default App
