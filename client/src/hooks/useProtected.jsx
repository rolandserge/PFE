import React from 'react';
import UserAuth from "./userAuth";
import { Route, Navigate } from 'react-router-dom';


export default function Protected({element}){

    let isAuthenticated = UserAuth();

    console.log(isAuthenticated)

    return isAuthenticated ? element : <Navigate to="/" />;
}