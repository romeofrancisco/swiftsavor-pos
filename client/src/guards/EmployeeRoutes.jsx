import React from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import Order from "../pages/employee/Order";
import Transactions from "../pages/employee/Transactions";

const roles = {
    manager: "Manager",
    employee: "Employee",
  };

const EmployeeRoutes = () => {
  return (
    <Routes>
      <Route element={<RequireAuth allowedRole={roles.employee} />}>
        <Route path="/order" element={<Order />} />
        <Route path="/transactions" element={<Transactions />} />
      </Route>
    </Routes>
  );
};

export default EmployeeRoutes;
