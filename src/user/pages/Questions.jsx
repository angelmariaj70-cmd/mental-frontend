
// import React, { useEffect, useState } from "react";
// import { Button, Progress } from "flowbite-react";
// import { viewAllQuestions } from "../../services/allApi";
// import { useNavigate } from "react-router-dom";
// function Questions() {
//   const [questions, setQuestions] = useState([]);
//   const [current, setCurrent] = useState(0);
//   const [token, setToken] = useState("");
// const navigate=useNavigate();
//   const user = JSON.parse(sessionStorage.getItem("existingUser"));
//   const username = user?.username || "User";

//   const fetchQuestions = async (token) => {
//     try {
//       const reqHeader = {
//         Authorization: `Bearer ${token}`,
//       };
//       const response = await viewAllQuestions(reqHeader);
//       setQuestions(response.data.viewquestion);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     const storedToken = sessionStorage.getItem("token");
//     setToken(storedToken);

//     if (storedToken) {
//       fetchQuestions(storedToken);
//     }
//   }, []);

//  const handleClick = () => {
//   if (current < questions.length - 1) {
//     setCurrent((prev) => prev + 1);
//   } else {
//     console.log("Completed 🎉");

    
//     navigate("/doctor");
//   }
// };

 
//   const totalQuestions = questions.length;
//   const progress =
//     totalQuestions > 0 ? ((current + 1) / totalQuestions) * 100 : 0;

//   return (
//     <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-start py-10 px-4">

    
//       <h1 className="text-3xl md:text-5xl font-bold text-[#362F78] text-center max-w-3xl"style={{fontFamily:"Lobster, sans-serif"}}>
//         Hey {username} 👋 Let’s find the support that fits you best
//       </h1>

//       <p className="text-lg italic text-[#362F78] text-center max-w-2xl mt-6" style={{fontFamily:"Dancing,script"}}>
//         Answer a few quick questions so we can understand your needs and connect you with the right professional for your journey.
//       </p>

     
//       <div className="w-full max-w-xl mt-8">
//         <p className="mb-2 text-sm font-medium text-gray-700">
//           Question {current + 1} of {totalQuestions}
//         </p>

//         <Progress progress={progress} size="sm" color="indigo" />
//       </div>

//       <div className="bg-white mt-6 p-8 rounded-2xl shadow-lg w-full max-w-xl text-center">

//         <h2 className="text-xl font-semibold mb-6">
//           {questions[current]?.question}
//         </h2>

//         <div className="flex flex-col gap-4">
//           {questions[current]?.options.map((a, i) => (
//             <Button
//               key={i}
//               onClick={handleClick}
              
//               pill   
//               className="w-full py-2 text-white 
//              bg-linear-to-r from-indigo-500 to-indigo-700 
//              "
//             >
//               {a}
//             </Button>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Questions;
import React, { useEffect, useState } from "react";
import { Button, Progress } from "flowbite-react";
import { viewAllQuestions } from "../../services/allApi";
import { useNavigate } from "react-router-dom";

function Questions() {

  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [token, setToken] = useState("");
  const [score, setScore] = useState(0);

  const navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("existingUser"));
  const username = user?.username || "User";

  const fetchQuestions = async (token) => {
    try {

      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const response = await viewAllQuestions(reqHeader);

      setQuestions(response.data.viewquestion);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

    const storedToken = sessionStorage.getItem("token");

    setToken(storedToken);

    if (storedToken) {
      fetchQuestions(storedToken);
    }

  }, []);




  // SCORE LOGIC
  const handleAnswer = (option) => {

    let optionScore = 0;

    // score based on answer
    if (option === "Never") {
      optionScore = 0;
    }

    else if (option === "Sometimes") {
      optionScore = 1;
    }

    else if (option === "Often") {
      optionScore = 2;
    }

    else if (option === "Always") {
      optionScore = 3;
    }

    const updatedScore = score + optionScore;

    setScore(updatedScore);




    // NEXT QUESTION
    if (current < questions.length - 1) {

      setCurrent((prev) => prev + 1);

    }

    // LAST QUESTION
    else {

      sessionStorage.setItem("mentalScore", updatedScore);

      navigate("/result");
    }

  };




  const totalQuestions = questions.length;

  const progress =
    totalQuestions > 0
      ? ((current + 1) / totalQuestions) * 100
      : 0;




  return (

    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-start py-10 px-4">

      <h1
        className="text-3xl md:text-5xl font-bold text-[#362F78] text-center max-w-3xl"
        style={{ fontFamily: "Lobster, sans-serif" }}
      >
        Hey {username} 👋 Let’s find the support that fits you best
      </h1>

      <p
        className="text-lg italic text-[#362F78] text-center max-w-2xl mt-6"
        style={{ fontFamily: "Dancing Script" }}
      >
        Answer a few quick questions so we can understand your needs and connect you with the right professional for your journey.
      </p>




      <div className="w-full max-w-xl mt-8">

        <p className="mb-2 text-sm font-medium text-gray-700">
          Question {current + 1} of {totalQuestions}
        </p>

        <Progress progress={progress} size="sm" color="indigo" />

      </div>





      <div className="bg-white mt-6 p-8 rounded-2xl shadow-lg w-full max-w-xl text-center">

        <h2 className="text-xl font-semibold mb-6">
          {questions[current]?.question}
        </h2>




        <div className="flex flex-col gap-4">

          {questions[current]?.options.map((a, i) => (

            <Button
              key={i}
              onClick={() => handleAnswer(a)}
              pill
              className="w-full py-2 text-white 
              bg-linear-to-r from-indigo-500 to-indigo-700"
            >

              {a}

            </Button>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Questions;