import styled from "@emotion/styled"

export const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100% - 5rem);
`

export const Footer = styled.footer`
  display: flex;
  flex: 1;
  padding: 1rem 0;
  justify-content: center;
  align-items: center;
`

export const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fit, 300px);
  max-width: 800px;

  @media (max-width: 600px) {
    width: 100%;
    grid-template-columns: repeat(auto-fit, 1fr);
  }
`

export const Card = styled.a`
  padding: 1.5rem;
  color: inherit;
  text-align: left;
  text-decoration: none;
  border: 1px solid lightgrey;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;

  &:hover,
  &:focus,
  &:active {
    color: ${({ theme }) => theme.body.color};
    border-color: ${({ theme }) => theme.body.color};
  }

  h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }
`

export const Logo = styled.span`
  height: 1em;
  margin-left: 0.5rem;
`
