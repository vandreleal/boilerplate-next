import type { AppProps } from "next/app"

import { Global, ThemeProvider } from "@emotion/react"

import { globalStyle } from "@/styles/global"
import { light } from "@/styles/theme"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Global styles={globalStyle} />
      <ThemeProvider theme={light}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
