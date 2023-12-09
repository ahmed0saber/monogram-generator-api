import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <span>Monogram Generator API Docs</span>,
  project: {
    link: 'https://github.com/ahmed0saber/monogram-generator-api',
  },
  docsRepositoryBase: 'https://github.com/ahmed0saber/monogram-generator-api',
  footer: {
    text: 'Monogram Generator API Docs',
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s | Monogram Generator API Docs'
      }
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Monogram Generator API Docs" />
      <meta property="og:description" content="Monogram Generator API is a simple API that enables you to easily generate monograms." />
    </>
  ),
}

export default config
