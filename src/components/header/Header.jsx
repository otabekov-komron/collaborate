import React from 'react'
import logo from '../../assets/logo.png'
import Btn from '../button/Btn'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt="" />
      <div className="rigth">
        <Btn text='+ Add project' bgcolor='transparent' color="#7299CE"/>
        <Btn text='Edit Profile' bgcolor='transparent' color="#7299CE" icon={[<i class="fas fa-cogs"></i>]} />
        <Btn text='Log out' bgcolor='transparent' color="#7299CE" icon={[<i class="fa fa-sign-out" aria-hidden="true"></i>]} />
      </div>
    </div>
  )
}

export default Header
