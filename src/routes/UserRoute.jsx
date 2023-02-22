import { Route, Routes } from 'react-router-dom'
import UserProtectRouter from './UserProtectedRoute';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';

export default function UserRoute() {

    return (
        <>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/login' element={<UserProtectRouter><Login /></UserProtectRouter>} />
                <Route exact path='/register' element={<UserProtectRouter><Signup /></UserProtectRouter>} />
                
            </Routes>
        </>
    )
}