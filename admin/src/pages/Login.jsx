import React,{useState} from 'react'
import axios from 'axios';
import {useNavigate , Link} from 'react-router-dom'
function Login() {
    const direct=useNavigate();

const [data,setdata]=useState({
    email:"",
    password:""
})
const onchange=(e)=>{
    setdata({...data,[e.target.name]:e.target.value});

}
const validation=()=>{
    var result=true;
    if(data.email=="" || data.email == null)
    {
        
        result=false;
        // toast.error("email is reqiured");
        return false;
    }
    if(data.password == "" || data.password == null)
    {
        result=false;
        // toast.error("enter password");
        return false;
    }
      return result;
}
const onsubmit=async(e)=>{
    e.preventDefault();
    if(validation())
    {
        const res= await axios.get(`http://localhost:3000/user?email=${data.email}`);
        if(res.data.length >0) {
            if(res.data[0].password == data.password)
            {
                // toast.success("login successful");
                setdata({...data,email:"",password:""});
                alert("login success")
                direct("/dashboard");
            }
            else{
                // toast.error("not  valid password");
                setdata({...data,email:"",password:""});
                alert("not valid password")
               
            }
        }
        else{
            // toast.error("not valid email id");
            setdata({...data,email:"",password:""});
                alert("not valid email id")
        }
    }
}
  return (
    <div>
      <div className="login">
    <div className="login-header">
      <h1>Login</h1>
    </div>
    <div className="login-form">
      <h3>Email id:</h3>
      <input type="text" name='email' value={data.email} onChange={onchange} placeholder="Email id" /><br />
      <h3>Password:</h3> 
      <input type="password" name='password' value={data.password} onChange={onchange} placeholder="Password" />
      <br />
      <input type="button" defaultValue="Login" onClick={onsubmit} className="login-button" />
      <br />
      
      
    </div>
  </div>
  <div className="error-page">
    <div className="try-again">Error: Try again?</div>
  </div>
    </div>
  )
}

export default Login
