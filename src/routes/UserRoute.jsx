import { Route, Routes } from 'react-router-dom'
import UserProtectRouter from './UserProtectedRoute';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';
import Booking from '../pages/Booking/Booking';
import HotelInfo from '../pages/HotelDetails/HotelInfo';
import Payment from '../pages/Payment/Payment';
import ViewHotel from '../pages/ViewHotel/ViewHotels';
import Invoice from '../pages/Invoice/Invoice';
import UserPublicRoute from './UserPublicRoute';
import Navbar from '../components/navbar/Navbar';
import Header from '../components/header/Header';

export default function UserRoute() {

    return (
        <>
        <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/login' element={<UserProtectRouter><Login /></UserProtectRouter>} />
                <Route exact path='/register' element={<UserProtectRouter><Signup /></UserProtectRouter>} />

                <Route exact path='/booking' element={<UserPublicRoute><Booking /></UserPublicRoute>} />
                <Route exact path='/hotelinfo' element={<UserPublicRoute><HotelInfo /></UserPublicRoute>} />
                <Route exact path='/payment' element={<UserPublicRoute><Payment /></UserPublicRoute>} />
                <Route exact path='/viewhotel' element={<UserPublicRoute><ViewHotel /></UserPublicRoute>} />
                <Route exact path='/invoice' element={<UserPublicRoute><Invoice /></UserPublicRoute>} />
            </Routes>
        </>
    )
}