// import React from 'react'
import styles from '../../styles/Card.module.css'
const img = "https://s3-alpha-sig.figma.com/img/9ca4/a1fb/f3a3afc0dc1522f08477f9baf48a5afa?Expires=1697414400&Signature=D1DbaaYvRoRj4lH0us9tZ7Yl-91iI~Q5qn-MG5AsDkTcJ2YEnFZU8rFKh5~xHDeKGbpgO4357kWsh7ZiqUupIRddYpfWD~QYIrojXEvh2-VZswaRZDb0sCtCClwQoFQoh35LEs6-ni5ElwxilexYh0CYKf3LHZastN2qILfFmCsGbtfiG9DY22YKkv3EcHiYdTkE3CA797p7OfaDAqp2XC8HqZExL4icaCChM-Xd7s5MeR83tNZbCgbSHcwijexM9UzNcmWEJ1LAfzB5ZOXiXzEr~IgDQ4AjvtugyuYkKfd-KyW8Wqx2gl34gxh-ZD4elOd1G7K-LEXGMn3vYoBfsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const Card = ({tab,list}) => {
    return (
        <div className={styles.card}>
            <div className={styles.details}>
                <div className={styles.user} >
                    <div className={styles.icon}><img src={list.img || img} alt="img" loading="lazy" /></div>
                    <div className={styles.desc}>
                        <div className={styles.dtop}>
                            <div className={styles.name}>{list.name}</div>
                            <div className={styles.appid}>Appointment Id: {list.appointmentId}</div>
                        </div>
                        <div className={styles.assess}>Intake Comprehensive Assessment</div>
                    </div>
                </div>
                <div className={styles.task}>
                    <div className={styles.tflex}>
                        <div className={styles.tleft}>Task Id:</div>
                        <div className={styles.tright}>{list.taskId}</div>
                    </div>
                    <div className={styles.tflex}>
                        <div className={styles.tleft}>{tab?"Date & Time:":"Completed on:"}</div>
                        <div className={styles.tright}>{list.appointmentTime}</div>
                    </div>
                    <div className={styles.tflex}>
                        <div className={styles.tleft}>Duration:</div>
                        <div className={styles.tright}>{list.duration}</div>
                    </div>
                </div>
            </div>
            <div className={styles.action}>
                {tab&&<div className={styles.status}>Status <div style={{color:list.status==="Upcoming"?"#00B071":"#F44336"}}>{list.status}</div></div>}
                <div className={styles.btn}>
                    <button>Start Assessment</button>
                </div>
            </div>
        </div>
    )
}

export default Card
