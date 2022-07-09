import styled from "@emotion/styled"

export const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const Table = styled.table`
  min-width: min(100%, 360px);

  td:nth-of-type(2) {
    text-align: right;
  }
`
