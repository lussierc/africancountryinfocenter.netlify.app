import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const AboutPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>About — {site.siteMetadata.title}</title>
        <meta name="description" content={"About page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('https://iea.imgix.net/5f8a3b57-74e5-423b-8d00-86afeeef7b3a/GettyImages-175566839.jpg?auto=compress%2Cformat&fit=min&q=80&rect=496%2C4491%2C3618%2C2402&w=1280&h=850&fit=crop&fm=jpg&q=70&auto=format')`, marginBottom: 0}}>
          <h1 className="post-title">About This Website</h1>
          <p>Learn more about our website &rarr;</p>
        </div>
        <div>
          <p>This website contains a page for each and every African country. Each page contains information about the county such as it's abbreviation, population, capital city, and more. Each page also contains an image of the country flag and of it's capital city. Most pages also contain a brief writeup that talks about the country's history, culture, and more!</p>
          <p>This website was created to shine light on all African countries, giving users of the website a broad overview of what is going on within them. The website creator has been investigating African countries for years through coursework and wanted to create a simple website showcasing them.</p>

          <p>Visitors of the website with questions, concerns, or ideas should use the Contact page to submit an email.</p>
        </div>
      </div>
    </Layout>
  )
}
export default AboutPage
export const pageQuery = graphql`
  query AboutPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
