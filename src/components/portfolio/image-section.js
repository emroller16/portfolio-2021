import React from "react"
import * as styles from './image-section.module.scss';

export default function ImageSection({ children }) {
  return (
    <>
      <div className={styles.container}>
        {children}
      </div>
    </>
  )
}