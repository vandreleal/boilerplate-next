import { NextSeo } from "next-seo"
import { FC } from "react"

import packageJson from "package.json"

import * as S from "./PageHome.styles"

export const PageHome: FC = () => {
  const { dependencies, devDependencies } = packageJson

  const renderTable = (dependencies: { [s: string]: string }) => {
    return (
      <S.Table>
        <tbody>
          {Object.entries(dependencies).map(([dep, version]) => (
            <tr key={dep}>
              <td>{dep}</td>
              <td>{version}</td>
            </tr>
          ))}
        </tbody>
      </S.Table>
    )
  }

  return (
    <>
      <NextSeo
        description="An opinionated Next.js boilerplate."
        title="Next.js Boilerplate"
      />
      <S.Main>
        <h1>Next.js Boilerplate</h1>
        <h2>dependencies</h2>
        {renderTable(dependencies)}
        <h2>devDependencies</h2>
        {renderTable(devDependencies)}
      </S.Main>
    </>
  )
}
