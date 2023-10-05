// import React from 'react'
import styles from '../../styles/Filter.module.css'
import search from '../../assets/search.png'
import calendar from '../../assets/calendar.png'

const Filter = () => {
    return (
        <>
            <div className={styles.leftFilter}>
                <div className={styles.search}>
                    <img src={search} alt="search" loading="lazy" />
                    <input className={styles.input} type="text" placeholder='Search' />
                </div>
            </div>
            <div className={styles.rightFilter}>
                <div className={styles.date}>
                    <div className={styles.left}>
                        <div className={styles.flex}>
                            <img src={calendar} />
                            <div>From Date</div>
                        </div>
                        to
                        <div className={styles.flex}>
                            <img src={calendar} />
                            <div>To Date</div>
                        </div>
                    </div>
                    <div className={styles.btn}>
                        <button className={styles.apply}>Apply</button>
                        <button>Reset</button>
                    </div>
                </div>
                <div className={styles.filter}>

                    <img src="" />
                    <div>Filter</div>
                </div>
            </div>
        </>
    )
}

export default Filter
