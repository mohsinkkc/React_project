import React from 'react'
import { useState } from "react";
import axios from "axios";
import { NavLink,} from 'react-router-dom'

function Addproduct() {
    
  const [formvalue, setFormValue] = useState({
    imageurl: "",
    id: "",
    name: "",
    email: "",
    mobile: "",

  });

  const onchange = (e) => {
    setFormValue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
    console.log(formvalue);
  }


  const validation = () => {
    var result = true;
    if (formvalue.imageurl == "" || formvalue.imageurl == null) {
      result = false;
      alert('url faild is required');
      return false;
    }
    if (formvalue.name == "" || formvalue.name == null) {
      result = false;
      alert('name faild is required');
      return false;
    }
    if (formvalue.email == "" || formvalue.email == null) {
      result = false;
      alert('email faild is required');
      return false;
    }
    if (formvalue.mobile == "" || formvalue.mobile == null) {
      result = false;
     alert('mobile faild is required');
      return false;
    }
    alert("product add successfully")
    return result;

  }

  const onsubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res = await axios.post('http://localhost:3000/admin', formvalue);
      setFormValue({ ...formvalue, name: "", email: "", password: "", mobile: "",imageurl:"" })
      console.log(res)
    }
  }

  return (
    <div className="content-wrapper">
    <div className="appointment">
        <div className="container">
        <div className="row">
            <div className="col-md-12 ">
              <div className="titlepage text_align_center">
                <h2>Add your Product</h2>
                
              </div>
            </div>
            <div className='container p-5'>
              <form>
              <div className="form-group pb-3 rounded-circle">
                  <label htmlFor="exampleInputEmail1">Image URL</label>
                  <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter imageurl" value={formvalue.imageurl} onChange={onchange} name='imageurl' />
                </div>
                <div className="form-group pb-3 rounded-circle">
                  <label htmlFor="exampleInputEmail1">Name</label>
                  <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" value={formvalue.name} onChange={onchange} name='name' />
                </div>
                <div className="form-group pb-3">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={formvalue.email} onChange={onchange} name='email' />
                </div>
                <div className="form-group pb-3">
                  <label htmlFor="exampleInputPassword1">Number</label>
                  <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Mobile No:" value={formvalue.mobile} onChange={onchange} name='mobile' />
                </div>

                <button type="submit" className="btn btn-primary " onClick={onsubmit}>Submit</button>
                <p className='text-center '><NavLink className="read_more " to="/product">View Product</NavLink></p>

              </form>
            </div>
          </div>
        </div>
    </div>
</div>
  )
}

export default Addproduct
