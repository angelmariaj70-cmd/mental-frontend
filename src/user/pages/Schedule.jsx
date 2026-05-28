import React from 'react'
import { useState } from "react";
import { Avatar, Button, Card } from "flowbite-react";

import {  Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
function Schedule() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center py-10 px-4">

      <h1 className="text-3xl md:text-5xl font-bold text-[#362F78] text-center mb-10">
        Your Therapist
      </h1>

      <Card className="max-w-sm w-full text-center shadow-md rounded-xl p-6">

       
        <div className="flex justify-center">
          <Avatar
            img="https://img.freepik.com/premium-photo/neutral-man-isolated-background_941493-1069.jpg?w=996"
            rounded
            bordered
            size="lg"
          />
        </div>

        <Button  color="alternative"  onClick={() => setOpenModal(true)}><h2 className="text-xl font-semibold mt-4 text-gray-800">
          Dr. Ravindra K
        </h2></Button>
        
        
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader>About the psychologist</ModalHeader>
        <ModalBody>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Dr. Ravindra K is a dedicated and compassionate psychologist with a strong academic background in mental health and behavioral sciences. He completed his undergraduate studies in Psychology, followed by a Master's degree in Clinical Psychology from a reputed institution. Driven by a passion to help individuals lead healthier and more balanced lives, he further specialized in therapeutic practices and counseling techniques.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Dr. Ravindra K has experience working with individuals dealing with stress, anxiety, depression, and relationship challenges. His approach focuses on understanding each patient’s unique situation and providing personalized care through evidence-based therapies.

With a calm and empathetic nature, he creates a safe and supportive environment where clients feel comfortable sharing their concerns. His goal is to guide individuals toward mental well-being and personal growth.
            </p>
          </div>
        </ModalBody>
        <ModalFooter>
          
          <Button color="alternative" onClick={() => setOpenModal(false)}>
           close
          </Button>
        </ModalFooter>
      </Modal>

        <p className="text-gray-500 text-sm">Psychologist</p>

     
        <div className="flex flex-col gap-3 mt-6">

          <Button color="purple">
            Start Video Consultation
          </Button>

          <Button color="gray">
            Send Message
          </Button>

          <Button color="success">
            Proceed to Payment
          </Button>

        </div>

      </Card>

    </div>
  )
}

export default Schedule