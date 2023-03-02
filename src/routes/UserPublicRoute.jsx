import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getUsers } from '../Api/AdminApi';
import {setUser} from "../redux/UserSlice"

function UserPublicRoute(props) {

    const dispatch = useDispatch();

    useEffect(()=>{
        const routerFunction=async()=>{
            if (localStorage.getItem("token")) {
              let  userData = await getUsers();
              console.log(userData);
              if(userData){
                dispatch(
                    setUser({
                    user: userData,
                  })
                );
              }
              }
          }
          routerFunction()

    },[])

    if (!localStorage.getItem("token")) {
        return <Navigate to="/" />;
    }
    return props.children;
}

export default UserPublicRoute;