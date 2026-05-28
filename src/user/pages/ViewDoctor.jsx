import React from 'react'
import { Card } from "flowbite-react";
import { useState } from 'react';
import { useEffect } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import { asingleDoctor } from '../../services/allApi';
import booking from '../../assets/booking.png'
import { useParams } from 'react-router-dom';

import { makeBooking } from '../../services/allApi';
function ViewDoctor() {
   
  const [doctors, setAllDoctors] = useState({})
 const {id}=useParams()

  // API call
  const getDoctor = async (id, token) => {
      console.log("Function called", id);
    try {
      const reqHeader = {
        Authorization: `Bearer ${token}`
      }

      const response = await asingleDoctor(id, reqHeader)
      setAllDoctors(response.data.single)
      console.log(response.data.single);
      

    } catch (error) {
      console.log("API Error:", error)
    }
  }

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token")

    if (storedToken && id) {
      getDoctor(id, storedToken)
    }
  }, [id])
  const handlePayment=async()=>{
    console.log(doctors);
    const stripe = await loadStripe('pk_test_51TPyZeR8gdAiCQ5w4y3IW3rxAZ6jWtXk9MYLXHGcHSU2gCV5TKv8jc9xtL7QVtinKaz8OJGAN40FCq7uulu211Vw00jnlnrUbh');
    console.log(stripe);
    const token=sessionStorage.getItem("token")
    const reqHeader={
      Authorization:`Bearer ${token}`,
    };
    const reqBody={
      doctorDetails:doctors,
    }
    try {
      const response=await makeBooking
      (doctors._id,reqBody,reqHeader)
      console.log(response);
     window.location.href = response.data.url;
      
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
   <div className="w-screen min-h-screen bg-gray-200 flex">

  
  <div className="w-1/2 h-screen mx-2.5">
    <img
      src={doctors.profile}
      alt="doctor"
      className="w-full h-full object-cover"
    />
  </div>

  
  <div className="w-1/2 p-10 flex flex-col justify-center bg-white">

    <h1 className="text-4xl font-bold text-gray-900">
      {doctors.name}
    </h1>

    <div className="grid grid-cols-2 gap-4 text-gray-600 mt-5">
      <p><b>Experience:</b> {doctors.experience}</p>
      <p><b>Specialization:</b> {doctors.specialization}</p>
    </div>

    <p className="mt-5 text-gray-500 leading-relaxed">
      {doctors.about}
    </p>

    <div className="flex gap-4 mt-8">

     

      <button
  onClick={handlePayment}
  className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white rounded-full flex items-center gap-2"
>
  <img src={booking} alt="booking icon" className="w-5 h-5" />
  Start Booking
</button>

    </div>

  </div>
</div>
   
  )
  }

export default ViewDoctor
