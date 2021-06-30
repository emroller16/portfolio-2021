import * as React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from 'react-helmet';
// import Navigation from './/./navigation/navigation'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
              }
            }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Helmet
          title={'Emily Roller'}
          meta={[
            { name: 'description', content: 'A portfolio site for Emily Roller' },
            { name: 'keywords', content: 'web design, design system, design systems, ux, user experience, front end development, portfolio, emily, roller' },
          ]}
        >
        </Helmet>
        {/* <Navigation menuLinks={data.site.siteMetadata.menuLinks} /> */}
        {children}
      </React.Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout