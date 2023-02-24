import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserRoute from './routes/UserRoute';
import AdminRoute from './routes/AdminRoute';
import LoadingSpinner from './components/spinner/Spinner';
import { useSelector } from 'react-redux';

function App() {
  const { loading } = useSelector((state) => state.alerts);

  return (
    <>
    {loading && <LoadingSpinner/>}
   { !loading &&<BrowserRouter>
      <Routes>
        <Route path='/*' element={<UserRoute />} />
        <Route path='/admin/*' element={<AdminRoute />} />
      </Routes>
    </BrowserRouter>}
    </>
  );
}

export default App;