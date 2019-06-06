import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import contactStyles from "./contact.module.scss"

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <div>
        <h1 className={contactStyles.header}>Contact Information</h1>
        <div className={contactStyles.contactContainer}>
          <FontAwesomeIcon icon={faEnvelope} size="2x" />{" "}
          <a
            className={contactStyles.contactLink}
            href={"mailto:toddfichman@gmail.com"}
          >
            toddfichman@gmail.com
          </a>
        </div>
        <div className={contactStyles.contactContainer}>
          <FontAwesomeIcon icon={faLinkedin} size="2x"/>{" "}
          <a
            className={contactStyles.contactLink}
            href="https://www.linkedin.com/in/todd-fichman-438a4016b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className={contactStyles.contactContainer}>
          <FontAwesomeIcon icon={faGithub} size="2x"/>{" "}
          <a
            className={contactStyles.contactLink}
            href="https://github.com/toddfichman"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
