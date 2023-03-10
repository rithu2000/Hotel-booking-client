import { userApi } from '../utils/Apis'

export async function authenticate(email) {
  try {

    return await userApi.post('/authenticate', { email })
  } catch (error) {
    return { error: 'Username doesnt exist...!' }
  }
};

export async function registerUser(credentials) {
  try {

    const { data } = await userApi.post(`/register`, credentials, { withCredentials: true })

    return data
  } catch (error) {
    return { error: 'Cannot find the User' }
  }
};

export async function userLogin(credentials) {
  try {
    const { data } = await userApi.post(`/login`, credentials, { withCredentials: true })

    return data
  } catch (error) {
    return { error: 'login failed' }
  }
};

export async function getUserDetails(userId) {
  try {
    const { data } = await userApi.post(`/getuser/${userId}`)
    return data;
  } catch (error) {
    return { error: "cannot fetch the data" }
  }
}

export async function hotelDetails() {
  try {
    const { data } = await userApi.get('/hoteldata');

    return data
  } catch (error) {
    return { error: 'Cannot be listed' }
  }
};

export const getByCity = async (city) => {
  try {
    const { data } = await userApi.get(`/getHotelByCity/${city}`, city);

    return data;
  } catch (error) {
    return { error: 'Cannot fetch the data' }
  }
};

export const getHotelData = async (Id) => {
  try {
    const { data } = await userApi.get(`/hotelDetails/${Id}`);

    return data
  } catch (error) {
    return { error: 'Hotel data is not present there' }
  }
};

export const getRoomData = async (hotelId) => {
  try {
    const { data } = await userApi.get(`/RoomDetails/${hotelId}`);

    return data
  } catch (error) {
    return { error: 'Empty room data' }
  }
};

export const check = async (roomId) => {
  try {
    const data = await userApi.get(`/roomCheck/${roomId}`)

    return data
  } catch (err) {
    return { error: 'Unavailable' }
  }
};

export const updateDate = async (Id, UADate) => {
  try {
    const data = await userApi.patch(`/updateDate/${Id}`, UADate)

    return data
  } catch (error) {
    return { error: 'Process has not completed' }
  }
};

export const checkDate = async (Id, UA) => {
  try {
    const { data } = await userApi.post(`/checkDate/${Id}`, UA)

    return data
  } catch (error) {
    return { error: 'Date is not valid' }
  }
};

export const bookRoom = async (Id, roomBook) => {
  try {
    const data = await userApi.post(`/bookRoom/${Id}`, roomBook)

    return data
  } catch (error) {
    return { error: 'Booking error' }
  }
};

export const bookings = async (Id) => {
  try {
    const { data } = await userApi.get(`/getMyBookings/${Id}`)

    console.log(data, "1234567890");

    return data
  } catch (error) {
    return { error: "Something went wrong" }
  }
};