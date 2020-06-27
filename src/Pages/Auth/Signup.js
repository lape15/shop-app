import React, { useState } from "react";

const Signup = () => {
  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setSignUp({
      ...signUp,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signUp);
  };
  return (
    <div className="sign-up">
      <h2>Create an account</h2>
      <form onSubmit={handleSubmit}>
        <div className="content">
          <label className={`${signUp.name.length ? "shrink" : ""}`}>
            Name
          </label>
          <input
            type="text"
            name="name"
            value={signUp.name}
            onChange={handleChange}
          />
        </div>
        <div className="content">
          <label className={`${signUp.email.length ? "shrink" : ""}`}>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={signUp.email}
            onChange={handleChange}
          />
        </div>
        <div className="content">
          <label className={`${signUp.password.length ? "shrink" : ""}`}>
            Password
          </label>
          <input
            type="password"
            name="password"
            value={signUp.password}
            onChange={handleChange}
          />
        </div>
        <div className="content">
          <label className={`${signUp.confirmPassword.length ? "shrink" : ""}`}>
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={signUp.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="btn-box">
          <button className="btn">CREATE ACCOUNT </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
