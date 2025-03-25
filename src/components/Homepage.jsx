import React from 'react'
import { useState } from 'react'
import Signup from './Signup';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="main">
      <div className="homepage">
         <div className="content">
            <h2> Welcome to PopX</h2>
            <p>Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit.</p>
         </div>
         <div className="btns-div">
            <Link to='/signup'><button className='btn1 btn'>Create Account</button></Link>
            <Link to='/login'> <button className='btn2 btn'>Already Registered?Login</button></Link>
         </div>
      </div>
    </div>
  )
}

export default Homepage


// { (!showSignUp) ?   (<div className='main'>
//   <div className="homepage">
//     <div className="content">
//         <h2> Welcome to PopX</h2>
//         <p>Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit.</p>
//     </div>
//     <div className="btns-div">
//       <button onClick = {handleSignUP} className='btn1 btn'>Create Account</button>
//       <button onClick = {handleLogin} className='btn2 btn'>Already Registered?Login</button>
//     </div>
//   </div>
  
// </div>) :
// (<Signup/>) }