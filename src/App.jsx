import { useState } from 'react'
import Navbar from "./Components/Navbar"
import {Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Dashboard from "./Pages/Dashboard"
import { ToastContainer } from 'react-toastify'



function App() {

  const [isLog,setIsLog] = useState(false);

  return (
    <div className='w-screen h-screen overflow-x-hidden bg-gray-900 flex flex-col' >
      <Navbar isLog={isLog} setIsLog={setIsLog}/>


        <Routes>
          <Route index path='/' element={<Home/>}/>
          <Route path='/login' element={<Login setIsLog={setIsLog}/>}/>
          <Route path='/signup' element={<Signup setIsLog={setIsLog}/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>

      <ToastContainer></ToastContainer>
    </div>

  )
}

export default App
