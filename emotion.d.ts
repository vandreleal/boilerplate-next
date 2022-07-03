import "@emotion/react"

declare module "@emotion/react" {
  export interface Theme {
    body: {
      background: string
      color: string
    }
  }
}
