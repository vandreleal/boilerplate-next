import type { AppProps } from "next/app"
import { useState } from "react"

import { Global, ThemeProvider } from "@emotion/react"
import styled from "@emotion/styled"

import { globalStyle } from "@/styles/global"
import { dark, light } from "@/styles/theme"

export const Container = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.body.background};
  color: ${({ theme }) => theme.body.color};

  a {
    color: ${({ theme }) => theme.body.color};
  }
`

const App = ({ Component, pageProps }: AppProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  return (
    <>
      <Global styles={globalStyle} />
      <ThemeProvider theme={isDarkTheme ? dark : light}>
        <Container>
          <Component {...pageProps} />
          <button
            style={{
              position: "fixed",
              bottom: "1rem",
              right: "1rem",
            }}
            type="button"
            onClick={() => setIsDarkTheme(!isDarkTheme)}
          >
            Change to {isDarkTheme ? "light" : "dark"} mode
          </button>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
