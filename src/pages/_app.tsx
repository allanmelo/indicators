import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, Theme } from '../styles/GlobalStyles'

function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <GlobalStyle />
    <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
  )
}

export default App