import React from 'react'
import { useEffect,useState } from "react";
import axios from 'axios';

function Table() {
  const [data, setdata]=useState([]);
    
    
    
    
    useEffect(()=>{fetchdata();},[]);
    
    
    
    
    const fetchdata=async()=>{
        const res=await axios.get("http://localhost:3000/user");
        setdata(res.data);
    }
    
    
    const ondelete=async(id)=>{
    const res= await axios.delete(`http://localhost:3000/user/${id}`);
    alert("data deleted soon");
    fetchdata();
    
    }
    
    const updatestatus=async(id)=>{
        const res=await axios.get(`http://localhost:3000/user/${id}`);
        if(res.data.status=="Block")
        {
            await axios.patch(`http://localhost:3000/user/${id}`,{status:"Unblock"});
           alert('Unblock Success');
            fetchdata();
        }
        else
        {
            await axios.patch(`http://localhost:3000/user/${id}`,{status:"Block"});
            alert('Block Success');
            fetchdata();   
        }

    }
  return (
    <div className="content-wrapper">
    <section className="content">
        <div className="row">
            <div className="col-xs-12">
                <div className="box">
                    <div className="box-header">
                        <h3 className="box-title">User Details</h3>
                    </div>{/* /.box-header */}
                    <div className="box-body">
                        <table id="example2" className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email-id</th>
                                    <th>Password</th>
                                    <th>mobile</th>
                                    <th>Update/Delete/status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item,index,ent)=>{
                                        return(
                                <tr>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.password}</td>
                                    <td> {item.mobile}</td>
                                    <td><button onClick={()=>{ondelete(item.id)}} >Delete</button>
                                    <button className="btn btn-success btn-xs" onClick={()=>updatestatus(item.id)} style={{marginLeft:"10px"}}><i className="fa fa-check" />{item.status}</button>
                                    <button className="btn btn-primary btn-xs"><i className="fa fa-pencil" /></button>
                                    </td>
                                
                                </tr>)})
                                }
                           </tbody>
                        </table>
                    </div>{/* /.box-body */}
                </div>{/* /.box */}
            </div>
        </div>
    </section>
    </div>
    
  )
}

export default Table
