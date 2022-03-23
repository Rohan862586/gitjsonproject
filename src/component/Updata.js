
import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { updateName } from "../api/api";


const Update = (props) => {

const Tablereducer = useSelector(state => state.counter.edit)
const [address,setAddress]=useState(Tablereducer.address)
const [name,setName]=useState(Tablereducer.name)
const [mobile, setMobile]=useState(Tablereducer.mobile)

const abc = () => {
  console.log('kjdsflkdsjlkf')
  updateName(Tablereducer.id, {address,name,mobile} )
  props.setUpdate(false)
  props.loadNames()
}

   return(
    <div>
    <div className="popup-box">
    <div className="box">
          <button className="btn-close" type="button"  onClick={()=> props.setUpdate(false)}>x</button>
          <div>
            <h1> Update data </h1>
          </div> 
            <div>
                <input className="form-control" type="text" id='name' placeholder="name"  name="name" value={name} onChange={(e)=>{setName(e.target.value)}} />
            </div><br/>        
            <div>
                <input className="form-control" type="text" id='address' placeholder="address"  name="address" value={address} onChange={(e)=>setAddress(e.target.value)} />
            </div><br/>
            <div>
                <input className="form-control" type="text" id='mobile' placeholder="mobile"  name="mobile" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} />
            </div><br/>
            <br/>
            <div >
                <button className="btn btn-primary mr-1" onClick={()=>{ abc()}}>Update</button>
            </div>
     </div>
     </div> 
     </div>
   )
  }

export default Update;

