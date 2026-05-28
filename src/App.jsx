
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Header from './user/components/Header'
import LandingPage from './user/LandingPage'
import Footers from './user/components/Footers'
import Dashboard from './user/pages/Dashboard'
import Login from './user/pages/Login'
import Register from './user/pages/Register'
import Questions from './user/pages/Questions'
import Doctors from './user/pages/Doctors'
import PaySuccess from './user/pages/PaySuccess'
import DoctorDashboard from './Pychologists/DoctorDashboard'
import AdminDashboard from './admin/AdminDashboard'
import Schedule from './user/pages/Schedule'
import ViewDoctor from './user/pages/ViewDoctor'
import Paymenterror from './user/pages/Paymenterror'
import Chat from './user/pages/Chat'
import Rusult from './user/pages/Rusult'
import Preloader from './user/components/Preloader'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
 const[isLoading,setIsLoading]=useState(false)
  

useEffect(()=>{
  setTimeout(()=>{
    setIsLoading(true)
  },6000)
}, []) 

  

  return (
    <>
  
<Header/>
    <Routes>
      
      <Route path='/'element={ isLoading?<LandingPage/>:<Preloader/>}/>
      <Route path='/register'element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard'element={<Dashboard/>}/>
      <Route path='/question' element={<Questions/>}/>
     <Route path='result'element={<Rusult/>}/>
      <Route path='/doctor'element={<Doctors/>}/>
      <Route path='/view/:id'element={<ViewDoctor/>}/>
      <Route path='/payment-success' element={<PaySuccess/>}/>
      <Route path='/chat'element={<Chat/>}/>
      <Route path='payment-error' element={<Paymenterror/>}/>
      <Route path='/sedule'element={<Schedule/>}/>
      <Route path='doctor-dasdboard'element={<DoctorDashboard/>}/>
      <Route path='admin-home'element={<AdminDashboard/>}/>
    </Routes>
 
     
    </>
  )
}

export default App
