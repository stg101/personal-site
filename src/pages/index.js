import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Social from "../components/social"
import SEO from "../components/seo"
import { relative } from "path"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        // display: `grid`,
        // gridTemplateRows: `1fr 50px`,
        position: `relative`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        backgroundColor: `black`,
        color: `white`,
        height: `70vh`,
      }}
    >
      <div
        style={{
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `space-around`,
          alignItems: `center`,
          height: `200px`,
        }}
      >
        <h1 style={{ margin: 0 }}>Hi people</h1>

        <div>
          <p style={{ margin: 0 }}>Welcome to my personal site.</p>
          <p style={{ margin: 0 }}>I am a full stack developer</p>
        </div>
      </div>
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          alignItems: `flex-end`,
          position: `absolute`,
          bottom: `10px`,
          right: `10px`,
        }}
      >
        <div
          style={{
            width: `32px`,
          }}
        >
          <a href="https://github.com/stg101" target="_blank">
            <Social />
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
