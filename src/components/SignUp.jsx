import React, { useState, useEffect } from "react";
import { validate } from "./validate";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors(validate(data));
  }, [data]);

  const changeHandler = (event) => {
    if (event.target.name === "checkbox") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  return (
    <div>
      <form>
        <h2>Sing up</h2>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={data.name}
            onChange={changeHandler}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={data.email}
            onChange={changeHandler}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={data.password}
            onChange={changeHandler}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
          />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>
        <div>
          <label htmlFor="checkbox">I agree terms and privacy policy</label>
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            value={data.isAccepted}
            onChange={changeHandler}
          />
          {errors.isAccepted && <span>{errors.isAccepted}</span>}
        </div>
        <a href="/">Login</a>
        <button>Sign up</button>
      </form>
    </div>
  );
};

export default SignUp;
