import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function UserAuth({element}) {

  const { userInfo } = useSelector((state) => state.auth);


  return userInfo ? element : <Navigate to="/" />
}
