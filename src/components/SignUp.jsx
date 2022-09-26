import React, { useState } from "react";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const changeHandler = (event) => {
    if (event.target.name === "checkbox") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
    console.log(data);
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
        </div>
        <a href="/">Login</a>
        <button>Sign up</button>
      </form>
    </div>
  );
};

export default SignUp;
