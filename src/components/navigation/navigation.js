import * as React from "react"
import PropTypes from "prop-types"
import { Link, withPrefix } from "gatsby"

import * as styles from './navigation.module.scss';


const Navigation = ({ }) => (
  <div className={styles.container}>
    <div className={styles.left}>
      <Link to="/" className={styles.navItem}>Home</Link>
    </div>

    <div className={styles.right}>
      <a download href={withPrefix('./resume.pdf')} className={styles.navItem}>Resume</a>
      <Link to="/portfolio" className={styles.navItem}>Portfolio</Link>
    </div>

  </div>
)

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: `Emily Roller`,
}

export default Navigation