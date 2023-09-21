import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



export default function AdminProtected({ children }) {

  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth);

  if (user) {
    const isAdmin = user?.role === "admin";
    return isAdmin ? children : redirect("/");
  }
}
