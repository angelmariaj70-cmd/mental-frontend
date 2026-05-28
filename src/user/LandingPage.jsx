import React from 'react'
import Footers from './components/Footers';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {  Card } from "flowbite-react";
import CountUp from "react-countup";
import { Button } from 'flowbite-react';
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import 'swiper/css';
import { viewHomeDoctors } from '../services/allApi';
function LandingPage() {
    const [doctors, setDoctors] = useState([]);
    const getDoctor=async()=>{
      try {
        const response=await viewHomeDoctors()
        console.log("Api response",response.data);
        setDoctors(response.data.landDoctore)
        
      } catch (error) {
        console.log("Api error",error);
        
      }
    } 
    useEffect(() => {
  getDoctor()
}, [])
  return (
   <>
<section className="relative"> 
 <h1
      className="text-4xl md:text-6xl font-bold p-5"
      style={{ fontFamily: "'Roboto Slab', serif", color: "#362F78", textAlign:"center" }}
    >
      Relax first, change your lifestyle
    </h1>

  
  
  <Swiper
    className="h-[600px]"
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 7000,
      disableOnInteraction: false,
    }}
    pagination={{ clickable: true }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
  >

    
    <SwiperSlide>
      <img
        src="https://www.mybump2baby.com/wp-content/uploads/2023/08/Names-Meaning-Joy.png"
        className="w-full h-full object-cover"
        alt=""
      />
    </SwiperSlide>

    
    <SwiperSlide>
      <img
        src="https://images.unsplash.com/photo-1758273240331-745ccab011a2?q=80&w=1331&auto=format&fit=crop"
        className="w-full h-full object-cover object-center"
        alt=""
      />
    </SwiperSlide>

    
    <SwiperSlide>
      <img
        src="https://images.pexels.com/photos/7089329/pexels-photo-7089329.jpeg"
        className="w-full h-full object-cover object-center"
        alt=""
      />
    </SwiperSlide>

  </Swiper>
 
</section>
<section className="bg-gray-300 py-12 px-10">
  <div className="flex flex-col md:flex-row items-center gap-10">
    
   
    <div className="md:w-1/2 flex flex-col justify-center md:text-left">
     <h1 className="text-4xl font-bold" style={{color: "#362F78",fontFamily:"poppins"}}>
  Nurture your mind with care and clarity.
</h1>
<p className="text-green-700 text-2xl mt-2"style={{color:"#362F78"}}>
  WellMind — your space for healing, online.
</p>

     
    </div>

   
   <div className="md:w-1/2 h-[500px] flex items-center">
     <div className="space-y-6">

  <div>
    <h2 className="text-3xl font-bold text-indigo-700">
      <CountUp end={5000} duration={5} separator="," />
    </h2>
    <p>Messages, chat, audio, video sessions</p>
  </div>

  <div>
    <h2 className="text-3xl font-bold text-indigo-700">
      <CountUp end={25} duration={3} separator="," />
    </h2>
    <p>Qualified therapists ready to help</p>
  </div>

  <div>
    <h2 className="text-3xl font-bold text-indigo-700">
      <CountUp end={10000} duration={3} separator="," />
    </h2>
    <p>People got help</p>
  </div>

</div>
    </div>

  </div>
</section>

<section className="bg-gray-300 py-12">
  <h1
    className="text-2xl md:text-3xl font-bold text-center mb-10"
    style={{ fontFamily: "Poppins", color: "#362F78" }}
  >
    WE'RE HERE TO HELP YOU 🤝
  </h1>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

   
    <div className="text-center p-6 rounded-xl transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-white cursor-pointer">
      <div className="text-blue-500 text-4xl mb-4 transition duration-300 group-hover:scale-110">💊</div>
      <h2 className="text-xl font-semibold text-blue-700 mb-2 hover:text-blue-900 transition">
        Stress less.
      </h2>
      <p className="text-gray-600 mb-3">
        Get in-the-moment relief for stress and anxiety so you can get back to living.
      </p>
      <a href="#" className="text-blue-600 underline hover:text-blue-800">
        Learn More
      </a>
    </div>

    
    <div className="text-center p-6 rounded-xl transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-white cursor-pointer">
      <div className="text-purple-500 text-4xl mb-4">🌙</div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2 hover:text-purple-600 transition">
        Sleep more.
      </h2>
      <p className="text-gray-600 mb-3">
        Fall asleep (and stay asleep) naturally and peacefully.
      </p>
      <a href="#" className="text-gray-800 underline hover:text-purple-600">
        Learn More
      </a>
    </div>

    
    <div className="text-center p-6 rounded-xl transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-white cursor-pointer">
      <div className="text-green-500 text-4xl mb-4">🍃</div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2 hover:text-green-600 transition">
        Live mindfully.
      </h2>
      <p className="text-gray-600 mb-3">
        Navigate life's ups and downs with resilience, confidence and guided support.
      </p>
      <a href="#" className="text-gray-800 underline hover:text-green-600">
        Learn More
      </a>
    </div>

  </div>
</section>
<section className="bg-gray-300 py-12 px-10">
  <div className="flex flex-col md:flex-row items-stretch gap-10">
    
   
    <div className="md:w-1/2 flex flex-col justify-center">
      <h2
        className="text-3xl mb-4"
        style={{ fontFamily: "Dancing Script, cursive", color: "#362F78" }}
      >
        Our Goal✨
      </h2>

      <p
        className="text-gray-800 text-base md:text-lg leading-8 font-medium max-w-xl"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Our goal is simple: make mental wellness accessible to everyone.
        With thoughtfully designed sessions, soothing visuals, and an
        easy-to-use interface, WellMind helps you build a consistent
        mindfulness routine without feeling overwhelmed. Even a few
        minutes a day can make a meaningful difference—and we’re here to
        guide you every step of the way.

        <br /><br />

        WellMind is more than just an app. It’s a companion that supports
        your mental well-being, encourages self-awareness, and helps you
        cultivate a healthier, more balanced life.
      </p>
    </div>

   
    <div className="md:w-1/2 h-[400px]">
      <img
        src="https://static01.nyt.com/images/2018/05/08/well/physed-happiness/physed-happiness-superJumbo.jpg"
        alt="wellness"
        className="w-full h-full object-cover rounded-xl shadow-lg"
      />
    </div>

  </div>
</section>
<section>
  
</section>
<section className="bg-gray-300 py-12">
<h1
    className="text-3xl md:text-3xl font-bold text-center mb-10"
    style={{ fontFamily: "", color: "#362F78" }}
  >
    Over 2 million 5-star reviews.
  </h1>
  <div className='flex gap-3.5 p-5 '>
    <Card href="#" className="max-w-sm  ">
      <h5 className="text-xl font-bold tracking-tight text-indigo-600 dark:text-white">
      “When I cannot fall asleep, I turn on this site and am out within 5 minutes.”
</h5>

 <p className="font-normal text-indigo-600 dark:text-gray-400 ">
        Joseph from Bengaluru
      </p>
      <div className='mx-5'>⭐⭐⭐⭐⭐</div>
      
      </Card>
       <Card href="#" className="max-w-sm "style={{height:"300px"}}>
      <h5 className="text-xl font-bold tracking-tight text-indigo-600 dark:text-white">
        “WellMind has changed my life in immeasurable ways. I am more resilient and feel so much more connected to myself.”
      </h5>
       <p className="font-normal text-indigo-600 dark:text-gray-400 ">
        Shilpa Yadav from Lucknow
      </p>
      <div className='mx-5'>⭐⭐⭐⭐⭐</div>
      </Card>
       <Card href="#" className="max-w-sm "style={{height:"300px"}}>
      <h5 className="text-xl font-bold tracking-tight text-indigo-600 dark:text-white">
        “I have a very busy brain and can find it hard to unwind. Now a daily practice is actually so wonderful and healing for me.”
      </h5>
       <p className="font-normal text-indigo-600 dark:text-gray-400 ">
        Raj Shetty from Pune
      </p>
      <div className='mx-5'>⭐⭐⭐⭐⭐</div>
      </Card>
       <Card href="#" className="max-w-sm "style={{height:"300px"}}>
      <h5 className="text-xl font-bold tracking-tight text-indigo-600 dark:text-white">
        “Whenever I need to unwind from a stressful work day I meditate with WellMind's soundscapes and it automatically sends me to my happy place.”
      </h5>
       <p className="font-normal text-indigo-600 dark:text-gray-400 ">
        John from Kochi
      </p>
      <div className='mx-5'>⭐⭐⭐⭐⭐</div>
      </Card>
      </div>
</section>
<section className='bg-gray-300 py-12'>
  <h1
    className="text-3xl md:text-3xl font-bold text-center mb-10"
    style={{ fontFamily: "", color: "#362F78" }}
  >
    Meet our prominent psychologists.
  </h1>

  {/* Cards container */}
  <div className='flex gap-2 flex-wrap justify-center'>
  {
    doctors?.map((item,index)=>(
       <Link to={`/view/${item._id}`} key={index}>
      <Card
        key={item._id}
        className="max-w-sm m-5"
        renderImage={() => (
          <img
            width={500}
            height={500}
            src={item.profile}
            alt=""
          />
        )}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {item.name}
        </h5>

        <p>{item.specialization}</p>
      </Card>
      </Link>
    ))
  }
</div>

  {/* Button BELOW cards */}
  <div className="flex justify-center mt-6">
    <Link to={'/doctor'}>
    <Button color="cyan" className="hover:bg-amber-600">
     Explore more psychologists <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="white"
  className="w-8 h-8 text-blue-600"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
  />
</svg>
    </Button>
    </Link>
  </div>
</section>
 <section className="bg-gray-300 py-16 px-4">
        
        
       <h1
    className="text-3xl md:text-3xl font-bold text-center mb-10"
    style={{ fontFamily: "", color: "#362F78" }}
  >
   Her's how it works
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
          <Link to={'/question'}>
<Button color="cyan" className='hover:bg-amber-600'>Start now</Button></Link>
        </div>
      </section>
<section className='bg-gray-300 py-12'>
<h1 className="text-2xl md:text-5xl font-bold text-center text-blue-900 mb-12">
        Frequently Asked Questions
      </h1>

     

     
      <hr className="mb-4 border-gray-300" />

      
      <Accordion collapseAll>
      <AccordionPanel>
        <AccordionTitle>What is WellMind?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            WellMind is the #1 mental support website designed to help you manage stess,sleep better and live happier,healthier life.Here we provide support to chat with notable psychologists ,chat with them 
          </p>
          
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>What is meditation?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Meditation is the practice of allowing thoughts to come and go, as you learn to recognize and release them without judgment. Studies show that a long-term meditation practice can actually help shift your nervous system out of fight or flight and into the relaxed parasympathetic mode producing a wide array of benefits* including:

Decreased anxiety and depression symptoms
Chronic pain management
Lower stress levels
Improved sleep quality
          </p>
        
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle>What causes stress and anxiety?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
           Stress and anxiety can have various causes and can differ greatly from person to person. Here are a few common factors that contribute to stress and anxiety:

Major life changes: Significant life events such as moving, getting married (or divorced), starting a new job or experiencing the loss of a loved one can trigger it.
Work or school pressure: High workloads, tight deadlines, challenging bosses, or work pressure can lead to stress and anxiety.
Financial challenges: Job loss, debt, or just struggling to make ends meet can be a significant source of stress and anxiety.
Relationships: Whether romantic, familial or social, strain or conflict in relationships can cause stress and anxiety.
Health concerns: Managing chronic illness, physical pain or battling a health condition can be a cause, as well.
Traumatic experiences: Experiencing a traumatic event, such as an accident, abuse or even a natural disaster can lead to anxiety-related conditions.
Uncertainty and change: Experiencing frequent change (even positive change!) or feeling uncertain about the future can be a common cause of anxiety.
It's important to note that not everyone experiences stress and anxiety in the same way. If you're dealing with stress and anxiety, it's recommended to seek support from a mental health professional who can provide personalized guidance
          </p>
          
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
      <AccordionTitle>
        How can I manage my stress and anxiety?
      </AccordionTitle>
      <AccordionContent>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Once you're in the  WellMind, we recommend using a Breathing Bubble exercise if you're looking for immediate stress or anxiety relief. Breathwork elicits the body's relaxation response which reduces tension and lowers stress.We also have other content programs, including our Overcome Stress and Anxiety collection in partnership with clinical psychologist, Dr.Gibry Laila . In this series, Dr. Gibry guides listeners through high stress moments in real time, including panic attacks, negative thought spirals, and more.
        </p>
      </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
      <AccordionTitle>
       Who will be helping me?
      </AccordionTitle>
      <AccordionContent>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          After you sign up, we will match you to an available therapist who fits your objectives, preferences, and the type of issues you are dealing with. If you feel your therapist isn't a good fit for you, you may elect to be matched to a different therapist..
        </p>
      </AccordionContent>
      </AccordionPanel>
       <AccordionPanel>
      <AccordionTitle>
       How much does it cost?
      </AccordionTitle>
      <AccordionContent>
        <p className="mb-2 text-gray-500 dark:text-gray-400">
         The cost of therapy through WellMind ranges from $70 to $100 per week (billed every 4 weeks), and it is based on your location, source, preferences, and therapist availability. You can cancel your membership at any time, for any reason.
        </p>
      </AccordionContent>
      </AccordionPanel>
    </Accordion>
             

     
</section>
<Footers/>
   </>
  )
}

export default LandingPage
