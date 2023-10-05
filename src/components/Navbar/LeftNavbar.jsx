// import React from 'react'
import styles from '../../styles/LeftNavbar.module.css'
import appoint from '../../assets/appoint.png'
import task from '../../assets/task.png'
const LeftNavbar = () => {
  return (
    <div className={styles.leftnav}>
      <div className={styles.logo}>LOGO</div>
      <div className={styles.medact}>
        <div className={styles.top}>MedLife</div>
        <div className={styles.bottom}>Add Clinical</div>
      </div>
      <div className={styles.tab}>
        <div className={styles.flex}>
            <img src={appoint} alt='appoint' loading='lazy' />
            <div>Appointments</div>
        </div>
        <div className={`${styles.flex} ${styles.select}`}>
            <img src={task} alt='task' loading='lazy' />
            <div>Task</div>
        </div>
      </div>
    </div>
  )
}

export default LeftNavbar
