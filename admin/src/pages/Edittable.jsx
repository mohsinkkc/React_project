import React,{useState, useEffect} from 'react'

import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Edittable() {


    useEffect(()=>{
        onedit();
    },[])

    // Edit update 
    const [formvalue, setFormvalue] = useState({
        username: "",
        email: "",
        password: "",
        mobile: "",
    })

    const {id}=useParams();
    
    const onedit = async () => {
        const res = await axios.get(`http://localhost:3000/user/${id}`);
        setFormvalue({ ...formvalue, username: res.data.username, email: res.data.email, password: res.data.password, mobile: res.data.mobile });
    }


    const onchange = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        //console.log(formvalue);
    }

    const validation = () => {
        let result = true;
        if (formvalue.username == "" || formvalue.username == null) {
            result = false;
           alert('Name field is required !');
            return false;
        }
        if (formvalue.email == "" || formvalue.email == null) {
            result = false;
            alert('email field is required !');
            return false;
        }
        if (formvalue.password == "" || formvalue.password == null) {
            result = false;
            alert('password field is required !');
            return false;
        }
        if (formvalue.mobile == "" || formvalue.mobile == null) {
            result = false;
            alert('mobile field is required !');
            return false;
        }
        return result;
    }


    const redirect=useNavigate();

    const onupdate = async (e) => {
        if (validation()) {
            e.preventDefault();
            await axios.patch(`http://localhost:3000/user/${id}`, formvalue)
                .then((res) => {
                    console.log(res);
                    if (res.status === 200) {
                        setFormvalue({ ...formvalue, username: "", email: "", password: "", mobile: "" });
                        redirect('/form');
                        alert('Update Success');
                    }
                })
        }
    }
  return (
    <div style={{paddingLeft:"250px"}}>
    <section id="main-content" >
                   <section className="wrapper">
                       <h3><i className="fa fa-angle-right" /> Edit User</h3>
   
                       <div className="row ">
                           <div className="col-md-12">
                               <div className="content-panel">
                                   <h4><i className="fa fa-angle-right" /> Edit User</h4><hr />
                                   <form >
                                       <div className="row">
                                           <div className="form-group col-md-6 mb-3">
                                               <label htmlFor="inputname">Name</label>
                                               <input type="text" value={formvalue.username} onChange={onchange} className="form-control mt-1" id="name" name="name" placeholder="Name" />
                                           </div>
                                           <div className="form-group col-md-6 mb-3">
                                               <label htmlFor="inputemail">Email</label>
                                               <input type="email" value={formvalue.email} onChange={onchange} className="form-control mt-1" id="email" name="email" placeholder="Email" />
                                           </div>
                                           <div className="form-group col-md-6 mb-3">
                                               <label htmlFor="inputname">Password</label>
                                               <input type="password" value={formvalue.password} onChange={onchange} className="form-control mt-1" id="name" name="password" placeholder="Password" />
                                           </div>
                                           <div className="form-group col-md-6 mb-3">
                                               <label htmlFor="inputemail">Mobile</label>
                                               <input type="number" value={formvalue.mobile} onChange={onchange} className="form-control mt-1" id="email" name="mobile" placeholder="Mobile" />
                                           </div>
                                           <div className="form-group col-md-6 mb-3">
                                               <button type="submit" data-dismiss="modal" onClick={onupdate} className="btn btn-success btn-lg px-3">Save</button>
                                           </div>
                                       </div>
                                   </form>
   
                               </div>
                           </div>
                       </div>
                   </section>
               </section>
               
       </div>
     )
}

export default Edittable