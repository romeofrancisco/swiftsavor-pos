import React from "react";
import { FaUserLock } from "react-icons/fa";
import LoginForm from "../components/Login/LoginForm";

function Login() {

  return (
    <div className="w-screen h-screen flex">
      <div className="background-image flex flex-col justify-center items-center w-[73%]">
        <h1 className="text-7xl font-bold z-10">
          Swift<span className="text-Primary">Savor</span>
        </h1>
        <p className="text-xl z-10">
          Efficient Sales, Inventory and Employee Management
        </p>
      </div>
      <div className="bg-myPrimary w-[27%] flex flex-col justify-center items-center">
        <header className="flex gap-1 mb-10">
          <FaUserLock size={40} style={{ color: "red" }} />
          <legend className="text-4xl font-semibold">Login</legend>
        </header>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
