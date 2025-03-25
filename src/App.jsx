import { useState } from 'react'
import './App.css'
import './index.css'; // or wherever your index.css is located
import User from './components/User';
import Login from './components/Login'
import Homepage from './components/Homepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
function App() {


  return (
    <>
      <Router>
        <Routes>
        <Route exact path='/' Component={Homepage}></Route>
          <Route path="/user" element={<User />} />
         
          <Route  path='/login' Component={Login}></Route>
          <Route  path='/signup' Component={Signup}></Route>
        </Routes>
      </Router>
      {/* <Homepage/> */}
    </>
  )
}

export default App
