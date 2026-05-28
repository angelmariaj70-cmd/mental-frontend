import React from 'react'
import { Button, Label, TextInput } from "flowbite-react";
import { registerApi } from '../../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
function Register() {
  const [userDetails,setuserDetails]=React.useState({
    username:"",
    email:"",
    password:""
  })
  const navigate=useNavigate()
   const handleRegister=async()=>{
    console.log(userDetails);
    if (userDetails.username&&userDetails.email&&userDetails.password) {
      
    
    try {
      const response=await registerApi(userDetails)
      console.log(response);
      if (response.status===201) {
        toast(response.data.message)
        setTimeout(() => {
          navigate("/login")
        }, 5000);
        setuserDetails({
          username:"",
          email:"",
          password:""
        })
        }
       else {
        toast("User Registration failed")
      }
    } catch (error) {
      console.log("Registration error",error);
      console.log(error.response.data);
      toast(error.response.data.message)
      
      
    }
    }
    else{
      alert("please fill the form")
    }
  }
  return (
    <div>
      <section
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.pexels.com/photos/35480850/pexels-photo-35480850.jpeg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
       
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
            padding: "0 80px",
          }}
        >
         
          <div style={{ color: "rgb(230, 240, 130)", maxWidth: "400px" }}>
            <h1
              style={{
                fontSize: "40px",
                fontWeight: "bold",
                lineHeight: "1.4",
                fontFamily:"monospace"
              }}
            >
              "Believe you can and you're halfway there."
            </h1>
            <p style={{ marginTop: "10px" }}>Thomas Theodore</p>
          </div>

         
          <div
            style={{
              width: "500px",          
              backgroundColor: "",
              borderRadius: "12px",
              padding: "30px",         
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              position:"relative",
              right:"200px",
             
               backdropFilter:" blur(10px)"
            }}
          >
            <h1
              style={{
                textAlign: "center",
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "20px",
                color:"rgb(242, 234, 224)",
                fontFamily: 'Sansita Swashed, system-ui'
              }}
            >
              Register Here
            </h1>

            <form className="flex flex-col gap-4">
              <div>
                <Label htmlFor="email1" style={{color:"rgb(242, 234, 224)", fontFamily: 'Sansita Swashed, system-ui'}}>Username</Label>
                <TextInput  onChange={e=>setuserDetails({...userDetails,username:e.target.value})}
                  id=""
                  type="text"
                  
                  required
                />
              </div>

              <div>
                <Label htmlFor="email1" style={{color:"rgb(242, 234, 224)", fontFamily: 'Sansita Swashed, system-ui'}}>email</Label>
                <TextInput  onChange={e=>setuserDetails({...userDetails,email:e.target.value})} id="email1" type="email" required />
              </div>

              <div>
                <Label htmlFor="password1" style={{color:"rgb(242, 234, 224)", fontFamily: 'Sansita Swashed, system-ui'}}>Enter Your Password</Label>
                <TextInput  onChange={e=>setuserDetails({...userDetails,password:e.target.value})} id="password1" type="password" required />
              </div>
<div className='p-5'style={{textAlign:"center"}}>
              <Button onClick={handleRegister}  style={{padding: "10px 20px",
             width: "100%",
             fontWeight: "600",
             borderRadius: "8px",fontFamily:'Sansita Swashed, system-ui'}}>Register</Button>
              </div>
            </form>
          </div>
        </div>
         <ToastContainer />
      </section>
    </div>
  );
}

export default Register;