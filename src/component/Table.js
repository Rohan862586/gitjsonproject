
import {  useSelector } from 'react-redux'
import React, { useState, useEffect } from "react";
import { getNames , removeName } from "../api/api";
import  Tableview from './Tableview'
import AddData from './AddData';
import Update from './Updata';

const Crud = () => {
  const [names, setNames] = useState([]);
  const [show,setShow] = useState("false")
  const [update,setUpdate] = useState("false");

   const  val = useSelector( (state) => state.counter.val)
   const  add = useSelector( (state) => state.counter.add)
console.log(add)

  useEffect(() => {
    loadNames();
  }, []);

  const loadNames = () => getNames().then((resp) => setNames(resp));


    removeName(val)
      .then((res) => {
          loadNames();
      })

  return (
    
    <div className="container-fluid">
     { (show === true)?<AddData setShow={setShow} loadNames={loadNames}/>:null}
     { (update === true)?<Update setUpdate={setUpdate} loadNames={loadNames}/>:null}

        <div className="row">
          <div className="col-md-12">
            <>
              <h4 className="text-center"> TODO with JSON Server and reduxToolkit </h4>
              <button className="btn btn-primary" onClick={() => { setShow(true)}}> Add Data </button>
                <div>
                  <table className="table">
                      <thead className="first">
                        <tr>
                          <th scope="col">id</th>
                          <th scope="col">name</th>
                          <th scope="col">address</th>
                          <th scope="col">mobile</th>
                          <th>Edit</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                    <Tableview  names={names} setUpdate={setUpdate} />
                  </table>
                </div>      
            </>
          </div>
        </div>
    </div>
  );
};

export default Crud;





