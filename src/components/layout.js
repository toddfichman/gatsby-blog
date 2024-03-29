import React from "react"
import Footer from "./footer"
import Header from "./header"
import layoutStyles from "./layout.module.scss"
import '../styles/index.scss'

export default function Layout(props) {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
