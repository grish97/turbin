import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import {Dashboard} from "./Dashboard";

export const DashboardLayout = () => {
  return (
    <section id="dashboard">
      <Outlet />
    </section>
  );
};

export const Navigation = () => {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};