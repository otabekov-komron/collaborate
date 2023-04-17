import React from 'react'
import Logo from '../../assets/logo.png'
import Btn from '../../components/button/Btn'
import { container, buttons } from "./home.module.css";

const Home = () => {
  return (
    <div className={container}>
      <img src={Logo} alt="" />
      <h1>COLLABORATE</h1>
      <p>A project management tool for developers</p>
      <div className={buttons}>
        <Btn text="Sign Up" color='#7299CE'/>
        <Btn text="Sign In" color='#7299CE'/>
      </div>
    </div>
  )
}

export default Home
