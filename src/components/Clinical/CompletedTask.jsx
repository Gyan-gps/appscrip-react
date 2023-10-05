// import React from 'react'
import styles from '../../styles/Task.module.css'
import Card from "../common/Card"
import Filter from '../common/Filter'
const taskList = [
  {
    date: "",
    userList: [
      {
        img: "",
        name: "Malenie Laurent",
        appointmentId: "324424",
        taskId: "232332",
        appointmentTime: "December 22, 2022 10:30 AM",
        duration: "1 hour",
      },
      {
        img: "",
        name: "Malenie Laurent",
        appointmentId: "324424",
        taskId: "232332",
        appointmentTime: "December 22, 2022 10:30 AM",
        duration: "1 hour",
      },
      {
        img: "",
        name: "Malenie Laurent",
        appointmentId: "324424",
        taskId: "232332",
        appointmentTime: "December 22, 2022 10:30 AM",
        duration: "1 hour",
      },
      {
        img: "",
        name: "Malenie Laurent",
        appointmentId: "324424",
        taskId: "232332",
        appointmentTime: "December 22, 2022 10:30 AM",
        duration: "1 hour",
      },
    ]
  }
]
const CompletedTask = () => {
  return (
    <div className={styles.completedTask}>
      <div className={styles.top}>
        <Filter />
      </div>
      <div>
        {
          taskList.map((ele, i) => (
            <>
              {ele.date && <div key={i} className={styles.dateStep}>{ele.date}</div>}
              <div className={styles.cardFlex}>
                {
                  ele.userList.map((ele, i) => (
                    <Card key={i} tab={false} list={ele} />
                  ))
                }
              </div>
            </>
          ))
        }
      </div>
    </div>
  )
}

export default CompletedTask
