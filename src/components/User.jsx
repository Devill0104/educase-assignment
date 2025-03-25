import React from 'react'
import Woman from '../assets/Woman.jpg'
import '../index.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const User = () => {
  return (
    <div className='user-div'> 
        <div className="user-page">
            <div className="nav">
                <h2>Account Settings  </h2>
                <Link  to='/'><span>
                Home 
                </span></Link>
            </div>
           
            <div className="info">
                <img src={ Woman} alt=""  style={{ height: '100px', width: '100px', borderRadius: '50%' }} />
                <span>
                    <h3>Mary Doe</h3>
                    <h4>marydoe@gmail.com</h4>
                </span>
            </div>
            <div className="about">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facilis natus sapiente ea accusamus, 
                voluptas maiores obcaecati iste! Aliquam in similique at vero ipsum asperiores nisi ullam ab saepe et!
            </div>
        </div>

    </div>
  )
}

export default User