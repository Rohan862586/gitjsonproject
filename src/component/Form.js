
import React from "react";
import { useDispatch, useSelector } from 'react-redux'

const FormElement = ({ handleSubmit, name, setName }) => {

    return(
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: "50%" }}
        autoFocus
        required
      />
      <br />
      <button className="btn btn-primary mt-1" onClick={() => { }}>Submit</button>
      <button className="btn btn-danger mt-1" onClick={() => setName("")}>
        Cancel
      </button>
    </div>
  </form>
    )
};

export default FormElement;


