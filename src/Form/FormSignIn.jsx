import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";
import UseForm from "./UseForm";
import validate from "./ValidateInfo";
function FormSignIn() {

    const history = useHistory();
    const onCLick = () => {
        history.push('/success');
    }
    const { handleChange, values, handleSubmitLogIn, errors } = UseForm(validate);
    return (
<div>
<form className="form" onSubmit={handleSubmitLogIn}>
        <h1>
          Are you ready to shop? Get started with us! Create your account by
          filling out the information below{" "}
        </h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="email"
            type="text"
            name="email"
            value={values.email}
            placeholder="Enter your Email"
            className="form-input"
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="text"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="form-input"
  
          />
          {errors.password && <p>{errors.password}</p>}
           
        </div>
        <button type="submit" className="form-input-btn" >
          Sign In

        </button>
      <ul>
        <li>
          <Link to="/signUp">Sign Up</Link>
        </li>
        <button onClick={onCLick}>
            Login
        </button>
      </ul>
    </form>
    
   

</div>


      
  );
}

export default FormSignIn;
