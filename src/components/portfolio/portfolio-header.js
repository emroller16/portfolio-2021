import React from "react"
import * as styles from './portfolio-header.module.scss';



export default function PortfolioHeader({ projectName, children }) {
  return (
    <>
      <div className={styles.container}>
        <h1 className="headline">{projectName}</h1>
        {children}
      </div>
    </>
  )
}