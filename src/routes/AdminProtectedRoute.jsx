import React from 'react';
import { Navigate } from 'react-router-dom';

function AdminProtectRouter(props) {

  if (localStorage.getItem("adminToken")) {
    return props.children;
  }
  if (!localStorage.getItem("adminToken")) {
    return <Navigate to="/admin/admin-login" />
  }
}

export default AdminProtectRouter;