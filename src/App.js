import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserRoute from './routes/UserRoute';
import Admin from './routes/AdminRoute';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<UserRoute />} />
        <Route path='/admin/*' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;