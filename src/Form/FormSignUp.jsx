import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import UseForm from "./UseForm";
import validate from "./ValidateInfo";
import { Link } from "react-router-dom";
function FormSignUp({ setIsChecking }) {
  const { handleChange, values, handleSubmitSignup, errors,currentUser } = UseForm(validate);


  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmitSignup}>
        <h1>
          Are you ready to shop? Get started with us! Create your account by
          filling out the information below{" "}
        </h1>
        {currentUser&&currentUser.email}
        
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            value={values.username}
            placeholder="Enter your username"
            className="form-input"
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
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
            placeholder="Enter your password"
            className="form-input"
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="confirm-password" className="form-label">
            Confirm Password
          </label>
          <input
            id="conf-password"
            type="text"
            name="ConfirmPassword"
            value={values.ConfirmPassword}
            placeholder="Enter your password again"
            className="form-input"
            onChange={handleChange}
          />
          {errors.ConfirmPassword && <p>{errors.ConfirmPassword}</p>}
        </div>
        <button type="submit" className="form-input-btn" >
          Sign Up
        </button>
        <span className="form-input-login">
          Already to have an account! Login
          <ul>
            <li>
              <Link to="/">here</Link>
            </li>
          </ul>
        </span>
      </form>
      
    </div>
  );
}

export default FormSignUp;
