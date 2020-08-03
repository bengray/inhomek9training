import React from "react"
import { Helmet } from "react-helmet"

export default function SEO({ page, description, href }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <title>{`Dorner Canine Training | ${page}`}</title>
      <link rel="canonical" href={href} />
      <html lang="en" />
    </Helmet>
  )
}
