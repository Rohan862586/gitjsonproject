import React from "react";
import * as yup from 'yup';
import {  Form, Field, ErrorMessage } from 'formik';
import { Formik  } from 'formik';
import { createName } from "../api/api";
import { useDispatch, useSelector } from 'react-redux'
import { addData } from '../reducer/CompoSlice'
 
 
const AddData = (props) => {
  const  count = useSelector( (state) => state.counter.count)

    const dispatch = useDispatch();

    const validationSchema = yup.object({
      address : yup.string().required('please enter address'),
      mobile : yup.string().required('please enter admin'),
      name : yup.string().required('please enter name')
  });
  
const initialValues = {
  address : '',
  mobile : '',
  name : ''
};
// let counter = 0;

const onSubmit = (data) => {
  // data.id = counter + 1;
  // console.log('data=>', data);
  data.id = count
  createName(data)
 props.loadNames()
  props.setShow(false)
  dispatch(addData(data))
};

   return(
    <div>
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <Form>
        <div className="popup-box">
         <div className="box">
          <button className="btn-close" type="button"  onClick={()=>{   props.setShow(false)}}>x</button>
          <div>
            <h1> Add data </h1>
          </div>

            <div>
                <Field className="form-control" type="text" id='name' placeholder="name"  name="name"  />
                <ErrorMessage name='name' component='div' className='errormessage'/>     
            </div><br/>
            <div>
                <Field className="form-control" type="text" id='address' placeholder="address"  name="address"  />
                <ErrorMessage name='address' component='div' className='errormessage'/>     
            </div><br/>
            <div>
                <Field className="form-control" type="text" id='mobile' placeholder="mobile"  name="mobile"  />
                <ErrorMessage name='mobile' component='div' className='errormessage'/>     
            </div> 
            <br/>
            <br/>
            <div >
                <button className="btn btn-primary mr-1" >Submit</button>
            </div>
     </div>
     </div>            
    </Form>
    </Formik>
  </div>
   )
  }

export default AddData;

