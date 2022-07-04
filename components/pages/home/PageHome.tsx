import { NextSeo } from "next-seo"
import Image from "next/image"
import { FC } from "react"

import * as S from "./PageHome.styles"

export const PageHome: FC = () => {
  return (
    <>
      <NextSeo
        description="An opinionated Next.js boilerplate."
        title="Next.js Boilerplate"
      />
      <S.Main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p>
          Get started by editing <code>pages/index.tsx</code>
        </p>
        <S.Grid>
          <S.Card href="https://nextjs.org/docs">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </S.Card>
          <S.Card href="https://nextjs.org/learn">
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </S.Card>
          <S.Card href="https://github.com/vercel/next.js/tree/canary/examples">
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </S.Card>
          <S.Card href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </S.Card>
        </S.Grid>
      </S.Main>
      <S.Footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          Powered by{" "}
          <S.Logo>
            <Image alt="Vercel Logo" height={16} src="/vercel.svg" width={72} />
          </S.Logo>
        </a>
      </S.Footer>
    </>
  )
}
