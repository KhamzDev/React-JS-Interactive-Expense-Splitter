import { useState } from "react"
import styles from "./MainPage.module.css"
import ResultDisplay from "./DisplayInfo/ResultDisplay/ResultDisplay"



function MainPage() {

  return (
    <div className={styles.container}>
      <ResultDisplay />
    </div>
  )
}

export default MainPage