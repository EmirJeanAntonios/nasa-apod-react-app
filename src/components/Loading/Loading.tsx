import React from 'react'
import logo from "../../assets/nasa.svg"
import "./Loading.scss"
const Loading = () => {
  return (
    <div className='loading'>
        <img src={logo} alt="" />
    </div>
  )
}

export default Loading