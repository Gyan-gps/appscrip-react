// import React from 'react'
import styles from '../../styles/TopNavbar.module.css'
import tnav1 from '../../assets/tnav1.png'
import tnav2 from '../../assets/tnav2.png'
import tnav3 from '../../assets/tnav3.png'
import menu from '../../assets/menu.png'
// import { useState } from 'react'

const navLists = [
    {
        text: "Dashboard",
        link: "/dashboard"
    },
    {
        text: "Patients",
        link: "/patients"
    },
    {
        text: "Human Resources",
        link: "/human-resources"
    },
    {
        text: "Clinical",
        link: "clinical"
    },
    {
        text: "Compliance",
        link: "/compliance"
    },
    {
        text: "Billing",
        link: '/billinge'
    },
    {
        text: "Reports",
        link: "reports"
    }
]

const nav = "Clinical";
const TopNavbar = () => {

    const style={
        color:"#04095A",
        borderBottom:"2px solid #04095A"
    }
    return (
        <div className={styles.topnav}>
            <div className={styles.logo}>LOGO</div>
            <ul>
                {
                    navLists.map((list) => (
                        <li key={list.text} style={nav===list.text?style:{}}>{list.text}</li>
                    ))
                }
            </ul>
            <div className={styles.left}>
                <div className={styles.clockin}>
                    <img src={tnav1} alt='tnav1' loading='lazy' /><div >Clocked-In</div>
                </div>
                <div className={styles.extra}><img src={tnav2} alt='tnav2' loading='lazy' /></div>
                <div className={styles.extra}><img src={tnav3} alt='tnav3' loading='lazy' /></div>
                <div className={styles.user}>
                    <div className={styles.icon}>MA</div>
                    <div className={styles.name}>Account</div>
                </div>
            </div>
            <img className={styles.menu} src={menu} alt='menu' loading='lazy' />
        </div>
    )
}

export default TopNavbar
