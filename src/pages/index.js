import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import homeStyles from './index.module.scss'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <div className={homeStyles.text}>
        <h1>Hey,</h1>
        <h2>Thanks for visting my blog.</h2>
        <div className={homeStyles.content}>

          <p>This blog was made using Gatsby.js, Sass, and Contentful.</p>
          <p>
            Need a developer? <Link className={homeStyles.link} to="/contact">Contact me</Link>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
