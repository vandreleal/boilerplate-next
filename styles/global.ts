import { css } from "@emotion/react"

export const globalStyle = css`
  *,
  *::before,
  *::after {
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
  }

  html,
  body,
  div#__next {
    height: 100%;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  code {
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
  }
`
