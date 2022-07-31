import React from 'react'
import { Helmet } from 'react-helmet';

const Meta= ({ title }) => {
  return (
    <Helmet>
      <title>{`Crypto App - ${title}`}</title>
    </Helmet>
  )
}

export default Meta;