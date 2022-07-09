import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import {Messenger} from "./Messenger";

export const MessengerLayout = () => {
  return (
    <section id="messenger">
      <Outlet />
    </section>
  );
};

export const Navigation = () => {
  return (
    <Routes>
      <Route element={<MessengerLayout />}>
        <Route path="messenger" element={<Messenger />} />
      </Route>
    </Routes>
  );
};