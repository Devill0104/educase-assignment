import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login-div'>
        <div className="login-info">
            <h1>Signing in to your <br /> PopX account</h1>
            <p className='login-p'>Lorem ipsum dolor, sit amet consectetur adipisicing </p>
            <form action="">
                <div className="form-inps">
                    <div className="form-inp">
                        <label htmlFor="email">Email address</label>
                        <input type="email" name="email" id="email" placeholder='Enter email address' required/>
                    </div>
                    <div className="form-inp">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder='Enter password' required/>
                    </div>
                </div>
                <Link to='/user'><button className="form-btn" type='submit'>Login</button></Link>
            </form>
        </div>
    </div>
  )
}

export default Login