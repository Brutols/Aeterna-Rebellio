import React from 'react'
import styles from "./mainLayout.module.css"

const MainLayout = ({children}) => {
  return (
    <div className={styles.container} >{children}</div>
  )
}

export default MainLayout