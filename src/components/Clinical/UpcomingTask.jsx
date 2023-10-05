// import React from 'react'
import styles from '../../styles/Task.module.css'
import Card from "../common/Card"
import Filter from '../common/Filter'

const taskList = [
  {
    date: "Thursday, 28 Dec 2022",
    userList: [
      {
        img: "",
        name: "Malenie Laurent",
        appointmentId: "324424",
        taskId: "232332",
        appointmentTime: "December 22, 2022 10:30 AM",
        duration: "1 hour",
        status: "Overdue"
      },
    ]
  },
  {
    date: "Wednesday, 27 Dec 2022",
    userList: [
      {
        img: "",
        name: "Malenie Laurent",
        appointmentId: "324424",
        taskId: "232332",
        appointmentTime: "December 22, 2022 10:30 AM",
        duration: "1 hour",
        status: "Upcoming"
      },
      {
        img: "",
        name: "Malenie Laurent",
        appointmentId: "324424",
        taskId: "232332",
        appointmentTime: "December 22, 2022 10:30 AM",
        duration: "1 hour",
        status: "Overdue"
      },
      {
        img: "",
        name: "Malenie Laurent",
        appointmentId: "324424",
        taskId: "232332",
        appointmentTime: "December 22, 2022 10:30 AM",
        duration: "1 hour",
        status: "Upcoming"
      },
    ]
  },
]

const UpcomingTask = () => {
  return (
    <div className={styles.upcomingTask}>
      <div className={styles.top}>
        <Filter />
      </div>
      <div>
        {
          taskList.map((ele, i) => (
            <>
              <div key={i} className={styles.dateStep}>{ele.date}</div>
              <div className={styles.cardFlex}>
                {
                  ele.userList.map((ele, i) => (
                    <Card key={i} tab={true} list={ele} />
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

export default UpcomingTask
