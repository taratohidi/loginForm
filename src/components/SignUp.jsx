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
  const [touch, setTouch] = useState({});

  const focusHandler = (event) => {
    setTouch({ ...touch, [event.target.name]: true });
  };

  useEffect(() => {
    setErrors(validate(data));
  }, [data, touch]);

  const changeHandler = (event) => {
    if (event.target.name === "checkbox") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      console.log(data);
    } else {
      setTouch({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h2>Sing up</h2>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={data.name}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.name && touch.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.email && touch.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.password && touch.password && <span>{errors.password}</span>}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.confirmPassword && touch.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>
        <div>
          <label htmlFor="checkbox">I agree terms and privacy policy</label>
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            value={data.isAccepted}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.isAccepted && touch.isAccepted && (
            <span>{errors.isAccepted}</span>
          )}
        </div>
        <a href="/">Login</a>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUp;
