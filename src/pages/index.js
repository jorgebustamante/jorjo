import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>children data from index.js</h1>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/test">link to mdx page</Link>
  </Layout>
)

export default IndexPage
