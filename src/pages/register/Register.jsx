import React from 'react'
import './register.css'

import Logo from '../../assets/logo.png'
import Btn from '../../components/button/Btn'

const Register = () => {
    return (
        <div className='container'>
            <img src={Logo} alt="" />
            <h1>Sign Up</h1>
            <form>
                <label htmlFor="fname">Name</label>
                <input type="text" id="fname" name="fname"></input>
                <label htmlFor="lname">Email</label>
                <input type="email" id="lname" name="lname"></input>
                <label htmlFor="lname">Password</label>
                <input type="password" id="lname" name="lname"></input>
                <label htmlFor="lname">Password</label>
                <span>( Must be at least 6 characters long )</span>
                <input type="password" id="lname" name="lname"></input>
                <Btn text="Sign Up" color='#7299CE'/>
            </form>
            <p>Already a member? Log in</p>
        </div>
    )
}

export default Register
