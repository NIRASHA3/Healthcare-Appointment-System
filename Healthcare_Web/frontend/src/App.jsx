import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointment from './pages/MyAppointment'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import "./App.css"
import Create from './pages/Create'
import Read from './pages/Read'
import Update from './pages/Update'
import Admin from './pages/Admin'



const App = () => {
  return (
    <div className="h">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/doctors' element={<Doctors/>} />
        <Route path='/doctors/:speciality' element={<Doctors/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/my-profile' element={<MyProfile/>} />
        <Route path='/my-appointment' element={<MyAppointment/>} />
        <Route path='/appointment/:docId' element={<Appointment/>} />
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/admin/create' element={<Create/>}></Route>
        <Route path='/admin/read/:id' element={<Read/>}></Route>
        <Route path='/admin/update/:id' element={<Update/>}></Route>
      </Routes>
      <Footer/>
    
    </div>
  )
}

export default App