import React, { useEffect } from "react";
import chat from "../../assets/chat.png";
import { useNavigate } from "react-router-dom";
const query = new URLSearchParams(window.location.search);
const bookingId = query.get("room");
function PaySuccess() {
const navigate = useNavigate();
;

  return (
    <div className="w-screen min-h-screen bg-gray-100 flex items-center justify-center px-6">
      
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center items-start space-y-6">
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            🎉 Congrats your Booking Confirmed <br />
            <span className="text-gray-600 text-xl font-medium">
              Conatact with your favourite Therapist...
            </span>
          </h1>

          <button 
  onClick={()=>navigate(`/chat?role=patient&room=${bookingId}`)} 
  className="px-6 py-3 bg-amber-300 hover:bg-amber-400 transition text-cyan-900 rounded-full flex items-center gap-3 shadow-md"
>
            <img src={chat} alt="chat icon" className="w-5 h-5" />
            <span className="font-medium">Chat with your therapist</span>
          </button>

        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-6 bg-gray-50">
          <img
            src="https://cdn.dribbble.com/userupload/15097592/file/original-11af0dab65a0913fe4ea1d71d9d48f4a.gif"
            alt="success"
            className="max-w-full h-auto object-contain"
          />
        </div>

      </div>
    </div>
  );
}

export default PaySuccess;