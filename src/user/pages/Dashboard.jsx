import React from "react";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
function Dashboard() {
  return (
    <>
      <section className="bg-gray-300 py-16 px-4">
        
        
        <h1
          className="text-3xl md:text-5xl font-bold text-center mb-12"
          style={{ fontFamily: "'Roboto Slab', serif", color: "#362F78" }}
        >
          Welcome User, Here's how it works 👇
        </h1>

       
        <div className="flex flex-col items-center gap-10">

          
          <Card
            className="max-w-4xl w-full shadow-lg hover:scale-105 transition duration-300"
            imgSrc="https://www.unicothings.com/wp-content/uploads/2020/08/Quotes-On-Being-A-Good-Person-1140x570.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold text-gray-900">
              Get matched to the best therapist for you
            </h5>
            <p className="text-gray-600">
              Answer a few questions to find a qualified therapist who fits your needs and preferences.
            </p>
          </Card>

          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-10 h-10 text-green-600 animate-bounce duration-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 5v14m0 0l-6-6m6 6l6-6"
            />
          </svg>

          
          <Card
            className="max-w-4xl w-full shadow-lg hover:scale-105 transition duration-300"
            imgSrc="https://cdn.pixabay.com/photo/2021/01/27/11/01/office-desk-5954672_1280.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold text-gray-900">
              Communicate your way
            </h5>
            <p className="text-gray-600">
              Talk to your therapist however you feel comfortable — text, chat, audio, or video.
            </p>
          </Card>

          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
           className="w-10 h-10 text-green-600  animate-bounce duration-100"
          >
            <path 
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 5v14m0 0l-6-6m6 6l6-6"
            />
          </svg>

          
          <Card
            className="max-w-4xl w-full shadow-lg hover:scale-105 transition duration-300"
            imgSrc="https://simclusive.com/wp-content/uploads/2024/01/Simclusive-blog-images-3.png"
            horizontal
          >
            <h5 className="text-2xl font-bold text-gray-900">
              Get professional support
            </h5>
            <p className="text-gray-600">
              Connect with licensed therapists and start improving your mental well-being today.
            </p>
          </Card>
<Button color="cyan" className='hover:bg-amber-600'>Start now</Button>
        </div>
      </section>
    </>
  );
}

export default Dashboard;