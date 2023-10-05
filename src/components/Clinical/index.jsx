// import React from 'react'

import { useState } from "react"
import styles from '../../styles/Clinical.module.css'
import UpcomingTask from "./UpcomingTask"
import CompletedTask from "./CompletedTask"

const Clinical = () => {
  const [tab, setTab] = useState(true)
  const tabstyle = {
    color:"#04095A",
    borderBottom:"2px solid #04095A"
  }
  return (
    <div className={styles.clinical}>
      <div className={styles.top}>
        <div className={styles.ttop}>
          <div className={styles.div}>Task</div>
          <div className={styles.p}>Clinical &gt; Task</div>
        </div>
        <div className={styles.tab}>
          <div onClick={() => setTab(true)} style={tab?tabstyle:{}} >Upcoming Tasks</div>
          <div onClick={() => setTab(false)} style={!tab?tabstyle:{}} >Completed Tasks</div>
        </div>
      </div>
      <div className={styles.bottom}>
        {tab ? <UpcomingTask /> : <CompletedTask />}
      </div>
    </div>
  )
}

export default Clinical
