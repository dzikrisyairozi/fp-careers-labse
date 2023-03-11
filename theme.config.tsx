import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { route } = useRouter()
    if (route !== '/') {
      return {
        titleTemplate: 'Final Project | OPREC LAB RPL',
      }
    }
  },
  logo: (
    <>
      <span className="hidden font-normal text-gray-600 md:inline">
        Final Project | OPREC LAB RPL
      </span>
    </>
  ),
  project: {
    link: 'https://github.com/Lab-RPL-ITS',
  },
  chat: {
    link: 'https://discord.gg/wzxEqsS34M',

  },
  editLink: {
    text: 'Edit this page on GitHub',
  },
  docsRepositoryBase: 'https://github.com/Lab-RPL-ITS',
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
  },
  footer: {
    text: (
      <p>
        © {new Date().getFullYear()}{' '}
        <a
          className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:under]"
          target="_blank"
          rel="noopener"
        >
          Software Engineering Lab 
        </a>
      </p>
    ),
  },
  head: () => {
    const { asPath } = useRouter()
    const { frontMatter, title } = useConfig()

    return (
      <>
        {/* Open Graph */}
        <meta property="og:url" content={`https://fp.careers.labse.in${asPath}`} />
        <meta property="og:title" content={frontMatter.title} />
        <meta property="og:type" content={'docs.thcl.dev'} />
        <meta property="og:site_name" content="Final Project | OPREC LAB RPL" />
        <meta
          name="og:description"
          content="Final Project | OPREC LAB RPL"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site:domain" content="fp.careers.labse.in" />
        <meta name="twitter:url" content={`https://fp.careers.labse.in${asPath}`} />

        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Final Project | OPREC LAB RPL"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="Final Project | OPREC LAB RPL"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <script
          async
          defer
          data-website-id="a1ad7cb6-4189-4930-aa8e-34a0fef859a8"
          data-domains="fp.careers.labse.in"
        />
      </>
    )
  },
}

export default config