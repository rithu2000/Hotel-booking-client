import { useEffect } from 'react';
import jwt_decode from 'jwt-decode'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { setUser } from "../redux/UserSlice"
import { getUserDetails } from '../Api/UserApi';

function UserPublicRoute(props) {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user)

  useEffect(() => {
    const routerFunction = async () => {
      const token = localStorage.getItem("token")
      const decodedToken = jwt_decode(token)
      const userId = decodedToken.userId;
      if (userId) {
        const userData = await getUserDetails(userId);
        if (userData) {
          dispatch(
            setUser(userData)
          );
          console.log(userData)
        }
      }
    }
    routerFunction()
  }, [])

  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }
  if (user.user) {
    return props.children;
  }
}

export default UserPublicRoute;