import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserRoute from './routes/UserRoute';
import AdminRoute from './routes/AdminRoute';
import LoadingSpinner from './components/spinner/Spinner';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';

function App() {
  const { loading } = useSelector((state) => state.alerts);

  return (
    <>
      {loading && <LoadingSpinner />}
      {!loading && <BrowserRouter>
        <Toaster position='top-center' reverseOrder={false} />
        <Routes>
          <Route path='/*' element={<UserRoute />} />
          <Route path='/admin/*' element={<AdminRoute />} />
        </Routes>
      </BrowserRouter>}
    </>
  );
}

export default App;