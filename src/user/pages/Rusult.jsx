import React from 'react'
import { useNavigate } from "react-router-dom";
function Rusult() {
  const score = Number(sessionStorage.getItem("mentalScore"));

  const navigate = useNavigate();

  let message = "";



  if (score <= 2) {

    message =
      "Your responses show mild stress levels. Self-care and wellness activities may help you.";

  }

  else if (score <= 4) {

    message =
      "You may benefit from professional guidance and emotional support.";

  }

  else {

    message =
      "Professional mental health support is strongly recommended.";

  }
  return (
    <div>
       <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">

      <div className="bg-white p-10 rounded-2xl shadow-lg max-w-xl text-center">

        <h1 className="text-4xl font-bold text-indigo-700 mb-6">
          Your Wellness Result
        </h1>

        <h2 className="text-2xl font-semibold mb-4">
          Score : {score}
        </h2>

        <p className="text-lg text-gray-700 mb-6">
          {message}
        </p>




        {score >= 5 && (

          <button
            onClick={() => navigate("/doctor")}
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl"
          >

            Connect With Doctors

          </button>

        )}

      </div>

    </div>
 
    </div>
  )
}

export default Rusult
