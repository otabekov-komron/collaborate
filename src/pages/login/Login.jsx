import React from 'react'
import '../register/register.css'

import Logo from '../../assets/logo.png'
import Btn from '../../components/button/Btn'

const Login = () => {
    return (
        <div className='container'>
            <img src={Logo} alt="" />
            <h1>Sign In</h1>
            <form>
                <label htmlFor="lname">Email</label>
                <input autoComplete='false'  type="email" id="lname" name="lname"></input>
                <label htmlFor="lname">Password</label>
                <input type="password" id="lname" name="lname"></input>
                <span>( Must be at least 6 characters long )</span>
                <label htmlFor="lname">Password confirmation</label>
                
                <input type="password" id="lname" name="lname"></input>
                <Btn text="Sign In" color='#7299CE' />
            </form>
            <p>You don't have account yet?  Register</p>
        </div>
    )
}

export default Login
