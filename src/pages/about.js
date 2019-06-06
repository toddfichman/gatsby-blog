import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from '../components/head';

const About = () => {
  return (
    <Layout>
      <Head title="About"/>
      <div>
        <h1>About</h1>
        <p>About stuff here</p>
        <p>
          Need a developer <Link to="/contact">Contact me</Link>
        </p>
      </div>
    </Layout>
  )
}

export default About
