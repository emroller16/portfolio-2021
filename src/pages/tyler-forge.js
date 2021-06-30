import React from "react"
import Layout from "../components/layout"
import PortfolioHeader from "../components/portfolio/portfolio-header"
import ImageSection from "../components/portfolio/image-section"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <Layout>
      <PortfolioHeader projectName="Forge Design System">
        Tyler Technologies is a large enterprise company that needed a design system.
      </PortfolioHeader>
      <ImageSection>
        <StaticImage src="../images/placeholder.jpeg" alt="A dinosaur" />
        <StaticImage src="../images/placeholder.jpeg" alt="A dinosaur" />
      </ImageSection>

    </Layout>
  );
}