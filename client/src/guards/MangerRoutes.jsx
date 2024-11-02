import React from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import Dashboard from "../pages/manager/Dashboard";
import Products from "../pages/manager/Products";
import Categories from "../pages/manager/Categories";
import Transactions from "../pages/manager/Transactions";

const roles = {
  manager: "Manager",
  employee: "Employee",
};

const MangerRoutes = () => {
  return (
    <Routes>
      <Route element={<RequireAuth allowedRole={roles.manager} />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/all-transactions" element={<Transactions />} />
      </Route>
    </Routes>
  );
};

export default MangerRoutes;
