import React, { useState } from "react";
import "../Contact/contact.css";
import Footer from "../Footer/Footer";
import axios from 'axios';
const Contact = () => {
  const[data,setData]=useState({
    fname:"",
    email:"",
    msg:"",
  });
  const handleChange=(event)=>{
    setData((currData)=>{
      return {...currData, [event.target.name]:event.target.value};
    });

  }
  const handleSubmit=async (e)=>{
   e.preventDefault();
try {
  let response=await fetch('http://localhost:8080/contact',{
    method:'POST',
    body:JSON.stringify(data),
    headers:{
      "Content-Type":"application/json"
    }
   })
   let resData=await response.json();
   console.log(resData);
   if(resData){
    alert("send successfully!");
   }
} catch (error) {
  console.log(error);
  setData({
    fname:"",
    email:"",
    msg:"",
  });
  
}
  



  }


  return (
    <>
    <div className="contact">
 
      <div className="row offset-3">
     <div className="col col-md-6 col-sm-4 col-xl-6">      
      <h1>Contact Me</h1>
      <form method="POST"  onSubmit={handleSubmit} noValidate className="needs-validation">
       
      <div className="mb-3">
          <label htmlFor="fname" class="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fname"
            name="fname"
            value={data.fname}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />

          <div class="invalid-feedback">
                Please Enter your FullName.
              </div>
        </div>

        <div class="mb-3">
          <label htmlFor="email" class="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="name@example.com"
            required
          />
                    <div class="invalid-feedback">
                Please Enter your Email.
              </div>
        </div>
        <div className="mb-3">
          <label htmlFor="msg" class="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="msg"
            name="msg"
            value={data.msg}
            onChange={handleChange}
            rows="3"
            cols="20"
            required
          >
           
          </textarea>
          <div class="invalid-feedback">
                Please Enter your messgae.
              </div>
        </div>

<div className="row">
  <div className="col col-md-6 offset-5">
        <div className="mb-2">
          <button className="btn btn-danger btn-md">Send</button>

        </div>
        </div>
        </div>
       
      </form>
      </div>

      </div>
    </div>
    <hr className="border-2 text-white" />
    <Footer/>
    </>
  );
};

export default Contact;
