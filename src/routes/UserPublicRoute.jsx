import React from "react";
import { Navigate } from "react-router-dom";

function UserPublicRoute(props) {

    if (localStorage.getItem("token")) {
        return <Navigate to="/" />;
    }
    return props.children;
}

export default UserPublicRoute;