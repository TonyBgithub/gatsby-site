import React from "react"
import Header from "../components/Header"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <Header headerText="About Gatsby" />
      <Header headerText="A second title" />
      <p>Such wow. Very React.</p>
    </Layout>
  )
}