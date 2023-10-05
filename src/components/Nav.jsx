// import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Clinical from './Clinical'
const Nav = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Clinical/>}/>
      </Routes>
    </div>
  )
}

export default Nav
