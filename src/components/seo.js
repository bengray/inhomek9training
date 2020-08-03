import React from "react"
import { Helmet } from "react-helmet"

export default function SEO({ page, description }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <title>{`Dorner Canine Training | ${page}`}</title>
      <link rel="canonical" href="http://inhomek9training.com" />
    </Helmet>
  )
}
