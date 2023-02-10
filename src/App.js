import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import AdminLogin from './pages/admin/login/Login';
import AdminHome from './pages/admin/dashboard/Dashboard';
import { PaginationTable } from './pages/admin/userManagement/UserManagement'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<AdminLogin />} />
        <Route path='/home' element={<AdminHome />} />
        <Route path='/viewusers' element={<PaginationTable />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;