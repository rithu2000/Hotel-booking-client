import React from 'react'
// import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from "react-router-dom"


function Sidebar() {


    return (
        <div className='sidebar'>
            <div className="top">
                <Link to='/admin' style={{ textDecoration: "none" }}>
                    <span className="logo">BookNearMe</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <li>
                        <DashboardIcon className='icon' />
                        <span>Dashboard</span>
                    </li>
                    <Link to='/admin/users' style={{ textDecoration: "none" }}>
                        <li>
                            <PersonIcon className='icon' />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to='/admin/addhotels' style={{ textDecoration: "none" }}>
                        <li>
                            <Inventory2OutlinedIcon className='icon' />
                            <span>Add Hotels</span>
                        </li>
                    </Link>
                    <Link to='/admin/hotels' style={{ textDecoration: "none" }}>
                        <li>
                            <Inventory2OutlinedIcon className='icon' />
                            <span>Hotels</span>
                        </li>
                    </Link>
                    <li>
                        <StorefrontOutlinedIcon className='icon' />
                        <span>Booking</span>
                    </li>
                    <li>
                        <NotificationsOutlinedIcon className='icon' />
                        <span>Notifications</span>
                    </li>
                    <li>
                        <PersonOutlinedIcon className='icon' />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className='icon' />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar