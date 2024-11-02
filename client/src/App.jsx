import React from "react";
import Login from "./pages/Login";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Layout from "./pages/Layout";
import Unauthorized from "./pages/Unauthorized";
import EmployeeRoutes from "./guards/EmployeeRoutes";
import MangerRoutes from "./guards/MangerRoutes";

export default function App() {
  const { tokens, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  const roles = {
    manager: "Manager",
    employee: "Employee",
  };

  useEffect(() => {
    if (tokens.access && user.role && location.pathname === "/") {
      if (user.role === roles.employee) {
        navigate("employee/order");
      } else if (user.role === roles.manager) {
        navigate("manager/dashboard");
      }
    }
  }, [tokens, user, location.pathname, navigate]);

  return (
    <>
      <Routes>
        {!tokens.access && !user.role ? (
          <Route path="/" element={<Login />} />
        ) : (
          <Route path="/" element={<Layout />}>
            {/* Manager Route */}
            <Route path="manager/*" element={<MangerRoutes />} />

            {/* Employee Route */}
            <Route path="employee/*" element={<EmployeeRoutes />} />
          </Route>
        )}

        <Route path="unauthorized" element={<Unauthorized />} />
      </Routes>
    </>
  );
}
