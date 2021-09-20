import React from 'react'
import { Helmet } from 'react-helmet'

const MetaHead = ({ title, description, url }) => {
  return (
    <Helmet>
      <title>{`Lucmania - ${title}`}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content='Cine, películas, acción, terror, ciencia ficción, animación, series, tv, televisión, terror, Netflix, Prime Video, Disney Plus' />
      <meta name='author' content='Martín David Roldán, Mxrold' />
      <link rel='canonical' href={url} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@mxrold' />
      <meta name='twitter:creator' content='@mxrold' />
      <meta name='twitter:title' content='Lucmania' />
      <meta name='twitter:description' content={description} />
      <meta
        name='twitter:image'
        content='https://firebasestorage.googleapis.com/v0/b/lucmania-7f96a.appspot.com/o/lucmania%2Flucmania-social.png?alt=media&token=4be778f0-2493-42a6-b8a2-a293bb38fb7f'
      />
      <meta property='og:title' content='Lucmania' />
      <meta property='og:description' content={description} />
      <meta
        property='og:image'
        content='https://firebasestorage.googleapis.com/v0/b/lucmania-7f96a.appspot.com/o/lucmania%2Flucmania-social.png?alt=media&token=4be778f0-2493-42a6-b8a2-a293bb38fb7f'
      />
      <meta property='og:url' content={url} />
      <meta property='og:site_name' content='Lucmania' />
      <meta property='og:locale' content='es_ES' />
      <meta property='og:type' content='article' />
    </Helmet>
  )
}

export default MetaHead
