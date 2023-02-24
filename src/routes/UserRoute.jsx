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

export default function UserRoute() {

    return (
        <>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/login' element={<UserProtectRouter><Login /></UserProtectRouter>} />
                <Route exact path='/register' element={<UserProtectRouter><Signup /></UserProtectRouter>} />

                <Route exact path='/booking' element={<UserProtectRouter><Booking /></UserProtectRouter>} />
                <Route exact path='/hotelinfo' element={<UserProtectRouter><HotelInfo /></UserProtectRouter>} />
                <Route exact path='/payment' element={<UserProtectRouter><Payment /></UserProtectRouter>} />
                <Route exact path='/viewhotel' element={<UserProtectRouter><ViewHotel /></UserProtectRouter>} />
                <Route exact path='/invoice' element={<UserProtectRouter><Invoice /></UserProtectRouter>} />
            </Routes>
        </>
    )
}