import * as React from "react"
import "../styles.scss"
import HomePageGrid from "../components/home-page-grid"
import Layout from "../components/layout"

const HomePage = () => {
  return (
    <Layout>
      <div className="intro-text">
        <h1 style={{ marginBottom: 0 }}>
          Hey there! I'm <span className="accent-text">Emily Roller.</span>
        </h1>
        <br />
        <h1 style={{ marginTop: 0 }}>Digital designer, front-end dabbler, and psychology nerd.</h1>
      </div>

      <HomePageGrid />

      <div className="about-text">
        <h1>What gets me going: <br />
          <span className="accent-text">trail runs</span>,
          <span className="accent-text"> back country permits</span>,
          <span className="accent-text"> cowboy camping</span>,
          <span className="accent-text"> cayenne kombucha</span>,
          <span className="accent-text"> live jazz</span>,
          <span className="accent-text"> used books</span>,
          <span className="accent-text"> pourover, light roast</span>, <br />
          just to name a few.
        </h1>

        <h2>I'd love to meet you! Hit me up on <a href="https://www.linkedin.com/in/emilyroller/">LinkedIn</a>, check out my <a href="https://www.figma.com/file/PA1EYBIiZMFsyNvgsGuZAH/portfolio-2021?node-id=115%3A188">portfolio</a> on Figma or check out my photography on <a href="https://www.instagram.com/emily_rebecca_photography/">the gram.</a>
        </h2>
      </div>
    </Layout>
  )
}

export default HomePage