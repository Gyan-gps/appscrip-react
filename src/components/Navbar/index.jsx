// import React from 'react'

import Nav from "../Nav"
import LeftNavbar from "./LeftNavbar"
import TopNavbar from "./TopNavbar"
import styles from '../../styles/NavBar.module.css'
const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.leftNavbar} style={{width:"clamp(150px,15.325vw,300px)",position:"fixed"}}>
                <LeftNavbar />
            </div>
            <div className={styles.rightNavbar} style={{marginLeft:"clamp(150px,15.325vw,300px)"}} >
                <TopNavbar />
                <Nav />
            </div>
        </div>
    )
}

export default Navbar
