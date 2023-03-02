import { Route, Routes } from "react-router-dom";
import PublicRoute from "./AdminPublicRoute";
import ProtectedRoute from "./AdminProtectedRoute";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import Login from "../pages/admin/login/Login";
import UserManage from "../pages/admin/userManagement/UserManagement";
import AddHotel from "../pages/admin/addhotels/AddHotel";
import ViewHotel from "../pages/admin/viewHotel/ViewHotel";
import Navbar from "../components/admin/navbar/Navbar";
import AddRoom from "../pages/admin/addRoom/AddRoom";
import ViewRoom from "../pages/admin/viewRoom/ViewRoom";
import EditRoom from "../pages/admin/editRoom/EditRoom";
import EditHotel from "../pages/admin/editHotel/EditHotel";


export default function AdminRoute() {

    return (
        <>
            <Routes>
                <Route exact path="/admin-login" element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                } />
            </Routes>

            <Navbar />
            <Routes>
                <Route exact path="/" element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                } />
                <Route exact path="/userlist" element={
                    <ProtectedRoute>
                        <UserManage />
                    </ProtectedRoute>
                } />
                <Route exact path="/addHotel" element={
                    <ProtectedRoute>
                        <AddHotel />
                    </ProtectedRoute>
                } />
                <Route exact path="/hotels" element={
                    <ProtectedRoute>
                        <ViewHotel />
                    </ProtectedRoute>
                } />
                <Route exact path="/addRoom" element={
                    <ProtectedRoute>
                        <AddRoom />
                    </ProtectedRoute>
                } />
                <Route exact path="/rooms" element={
                    <ProtectedRoute>
                        <ViewRoom />
                    </ProtectedRoute>
                } />
                <Route exact path="/editRoom" element={
                    <ProtectedRoute>
                        <EditRoom />
                    </ProtectedRoute>
                } />
                 <Route exact path="/editHotel" element={
                    <ProtectedRoute>
                        <EditHotel />
                    </ProtectedRoute>
                } />
            </Routes>
        </>
    );
}