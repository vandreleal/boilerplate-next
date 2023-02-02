import { FC, ReactElement, ReactNode } from "react"

import { Global, ThemeProvider } from "@emotion/react"
import { render, RenderOptions } from "@testing-library/react"

import { globalStyle } from "@/styles/global"
import { light } from "@/styles/theme"

const AllTheProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Global styles={globalStyle} />
      <ThemeProvider theme={light}>{children}</ThemeProvider>
    </>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from "@testing-library/react"
export { default as userEvent } from "@testing-library/user-event"
export { customRender as render }
