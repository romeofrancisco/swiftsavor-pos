import React from "react";
import { useState } from "react";
import { login } from "../../store/slices/auth/authThunk";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading";
import { Navigate } from "react-router-dom";

function LoginForm() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);

  const handleOnChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(credentials));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 justify-center items-center"
      >
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="input w-[15rem]"
            name="email"
            onChange={handleOnChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Password</label>
          <input
            type="password"
            className="input w-[15rem] grow"
            name="password"
            onChange={handleOnChange}
          />
        </div>
        <button className="button mt-4 w-[15rem]">Login</button>
      </form>
      {loading && <Loading/>}
    </>
  );
}

export default LoginForm;
