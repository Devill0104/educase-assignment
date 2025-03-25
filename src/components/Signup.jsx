import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div className='login-div'>
    <div className="login-info">
        <h1>Create your <br /> PopX account</h1>
        <form action="">
            <div className="form-inps">
                <div className="form-inp">
                    <label htmlFor="fullname">Full Name<span className='red-ast'>&#42;</span></label>
                    <input type="text" name="fullname" id="fullname" placeholder='Enter fullname' required/>
                </div>
                <div className="form-inp">
                    <label htmlFor="phonenumber">Phone number<span className='red-ast'>&#42;</span></label>
                    <input type="number" name="phonenumber" id="phonenumber" placeholder='Enter phonenumber' required/>
                </div>
                <div className="form-inp">
                    <label htmlFor="email">Email address<span className='red-ast'>&#42;</span></label>
                    <input type="email" name="email" id="email" placeholder='Enter email address' required/>
                </div>
                <div className="form-inp">
                    <label htmlFor="password">Password<span className='red-ast'>&#42;</span></label>
                    <input type="password" name="password" id="password" placeholder='Enter password' required/>
                </div>
                <div className="form-inp">
                    <label htmlFor="companyname">Company name<span className='red-ast'>&#42;</span></label>
                    <input type="text" name="companyname" id="companyname" placeholder='Enter companyname' required/>
                </div>
                <div >
                    <p>Are you an Agency?<span className='red-ast'>&#42;</span></p>
                    <input type="radio" id="html" name="fav_language" value="HTML"/>
                    <label htmlFor="html">Yes</label>
                    <input type="radio" id="css" name="fav_language" value="CSS"/>
                    <label htmlFor="css">No</label>
                </div>
            </div>
            <Link to='/user'><button className="signup-btn" type='submit'>Creat Account</button></Link>
            </form>
    </div>
</div>
  )
}

export default Signup