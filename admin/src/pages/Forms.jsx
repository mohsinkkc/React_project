// add employee
import React from 'react'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Forms() {

    const redirect=useNavigate();
    
    
    const [form, setform]=useState({
     username:"",password:"",email:"",mobile:""
    })
    
    
    
    const onchange=(e)=>{
    
        setform({...form,id: new Date().getTime().toString(),[e.target.name]:e.target.value});
        console.log(form);
    }
    
    
    
    
    const validation = () => {
        var result = true;
    
        if (form.username == "" || form.username == null) {
          result = false;
          alert('name Field is required !');
    
          return false;
        }
        if (form.password == "" || form.password == null) {
          result = false;
         alert('Password Field is required !');
          return false;
        }
        if (form.email == "" || form.email == null) {
           result = false;
          alert('email Field is required !');
           return false;
         }
         if (form.mobile == "" || form.mobile == null) {
           result = false;
          alert('mobile Field is required !');
           return false;
         }
        return result;
      }
    
    
    
    
    
    const onsubmit=async(e)=>{
        e.preventDefault();
        if (validation()) {
    const res=await axios.post('http://localhost:3000/user',form);
    console.log(res);
    setform({...form,username:"",password:"",email:"",mobile:""});
    redirect('/dashboard');
    }}

  return (
    <div style={{paddingLeft:"250px"}}>
      <div className='body '>
    <div>
        <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
  <div className="login-block1 ">
    <h1 style={{color:"white"}}>Add Employee</h1>
    <input type="text" placeholder='username'  id="username"  name='username' onChange={onchange} value={form.username}/>
    <input type="text" placeholder='email'  id="email"  name='email' onChange={onchange} value={form.email}/>
    <input type="password" placeholder='password'  id="password" name='password' onChange={onchange} value={form.password}/>
    <input type="text" placeholder='mobile'  id="mobile"  name='mobile' onChange={onchange} value={form.mobile}/><br/>
    <button onClick={onsubmit} className='bg-primary' >Add</button>
  </div></div></div>
    </div>
  )
}

export default Forms
