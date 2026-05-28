import React from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { ToastContainer, toast } from 'react-toastify';
import { loginApi } from '../../services/allApi';
import { useNavigate } from 'react-router-dom';
import { googleloginApi } from '../../services/allApi';
import { GoogleLogin } from '@react-oauth/google'; 
import { jwtDecode } from 'jwt-decode'; 

function Login() {
 
   const [userDetails,setuserDetails]=React.useState({
      username:"",
      email:"",
      password:""
    })
     const navigate=useNavigate()
  const handleLogin=async()=>{
    console.log(userDetails);
    if (userDetails.email&&userDetails.password) {
      
    
    try {
      const response=await loginApi(userDetails)
      console.log(response);
      if (response.status===200) {
       sessionStorage.setItem("token", response.data.token)
sessionStorage.setItem("existingUser", JSON.stringify(response.data.existingUser))

        toast(response.data.message)
      } else {
        alert("Login failed")
      }
      if (response.data.existingUser.role=="user") {
        setTimeout(() => {
          navigate("/")
        }, 3000);
         setuserDetails({
          username:"",
          email:"",
          password:""
        })
      }
        else if (response.data.existingUser.role === "doctor") {
  navigate("/doctor-dasdboard");
}
       else {
        setTimeout(() => {
          navigate("/admin-home")
        }, 5000);
        sessionStorage.setItem(
  "adminId",
  response.data.existingUser._id
)
      }
    } catch (error) {
      console.log("Login",error);
      console.log(error.response.data);
      alert(error.response.data.message)
     
      
    }
    }
    else{
      // alert("please fill the form")
    
    }
  }
  const handleGoogleLogin=async(credential)=>{
    console.log(credential);
    
   

    const decoded = jwtDecode(credential.credential);
    console.log(decoded);
    try {
      const response=await googleloginApi({
        email:decoded.email,
        password:"googlepswd",
        username:decoded.name,
        profile:decoded.picture
      });
      console.log(response);
      sessionStorage.setItem("token",response.data.token)
        sessionStorage.setItem("existingUser",JSON.stringify(response.data.existingUser))
      toast("Google login successful!");
      setTimeout(() => {
          navigate("/")
        }, 3000);
    } catch (error) {
      console.log(error);
      alert("Google login failed");
    }
    
  }
  return (
    <>
    <section style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://static.vecteezy.com/system/resources/thumbnails/048/120/779/small/peaceful-forest-lake-surrounded-by-misty-trees-reflecting-in-calm-water-serene-nature-scene-tranquility-concept-photo.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}>
          <div
                      style={{
                        width: "500px",          
                        backgroundColor: "",
                        borderRadius: "20px",
                        padding: "30px",         
                        boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                      
                        position:"relative",
                        left:"500px",
                        top:"100px",
                        backdropFilter:" blur(10px)"
                     
                        // border:"2px solid"
                      }}
                    >
                      <h1
                        style={{
                          textAlign: "center",
                          fontSize: "24px",
                          fontWeight: "bold",
                          marginBottom: "20px",
                          color:"rgb(255, 193, 147)",
                          fontFamily:'Sansita Swashed, system-ui'
                        }}
                      >
                       Login Here
                      </h1>
          
                      <form className="flex flex-col gap-4">
                       
          
                        <div>
                          <Label htmlFor="email1" style={{color:"rgb(255, 193, 147)",fontFamily:'Sansita Swashed, system-ui'}}>email</Label>
                          <TextInput id="email1" onChange={e=>setuserDetails({...userDetails,email:e.target.value})} type="email" required />
                        </div>
          
                        <div>
                          <Label htmlFor="password1" style={{color:"rgb(255, 193, 147)",fontFamily:'Sansita Swashed, system-ui'}}>Enter Your Password</Label>
                          <TextInput id="password1"  onChange={e=>setuserDetails({...userDetails,password:e.target.value})} type="password" required />
                        </div>
          <div className='p-5'style={{textAlign:"center"}}>
                        <Button onClick={handleLogin} style={{padding: "10px 20px",
width: "100%",
fontWeight: "600",
borderRadius: "8px"}}>Login</Button>
                        </div>
                      </form>
                       <div className='p-5'style={{textAlign:"center"}}>
                          <GoogleLogin
              onSuccess={credentialResponse => {
                console.log(credentialResponse);
                handleGoogleLogin(credentialResponse)
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
                       </div>
                        <ToastContainer />
                    </div>

    </section>
    
    </>
  )
}

export default Login
