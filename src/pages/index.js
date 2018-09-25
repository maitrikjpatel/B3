import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hey! I am Maitrik Patel.</h1>
    <p>A Front-End Developer / UX Designer Who Designs and Develops Pixel Perfect Interface Designs and Products.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
