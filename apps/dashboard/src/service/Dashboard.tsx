import {useState} from "react";
import {useAuth} from "./useAuth";

export const Dashboard = () => {
  const { user } = useAuth();

  return  (
    <div>
      <h2>Dashboard shared Component From 3001</h2>

      <p>Current logged user is {user ?? "No Any User"}</p>
    </div>
  );
};