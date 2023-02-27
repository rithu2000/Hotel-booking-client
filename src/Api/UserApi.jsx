import { userApi } from '../utils/Apis'

export async function authenticate(email) {
  try {
    return await userApi.post('/authenticate', { email })
  } catch (error) {
    return { error: 'Username doesnt exist...!' }
  }
}

export async function registerUser(credentials) {
  try {

    const { data } = await userApi.post(`/register`, credentials, { withCredentials: true })

    return data
  } catch (error) {
    return { error: 'Cannot find the User' }
  }
}

export async function userLogin(credentials) {
  try {

    const { data } = await userApi.post(`/login`, credentials, { withCredentials: true })

    return data
  } catch (error) {
    return { error: 'login failed' }
  }
}

export async function hotelDetails() {
  try {
    const { data } = await userApi.get('/hoteldata');

    return data
  } catch (error) {
    return { error: 'Cannot be listed' }
  }
}



export const getByCity = async (city) => {
  try {
    const { data } = await userApi.get(`/getHotelByCity/${city}`, city);
    console.log(data, "vanna dataaa");
    
    return data;
  } catch (error) {
    console.log(error);
    return { error: 'Cannot fetch the data' }

  }
};
export const getHotelData = async (Id) => {
  try {
    const { data } = await userApi.get(`/hotelDetails/${Id}`);
    console.log(data, "in userApi")

    return data
  } catch (error) {
    console.log(error);
    return { error: 'Hotel data is not present there' }

  }
};
export const getRoomData = async (hotelId) => {
  try {
    const { data } = await userApi.get(`/RoomDetails/${hotelId}`);
    console.log(data, "in userApi")

    return data
  } catch (error) {
    console.log(error);
    return { error: 'Empty room data' }

  }
};
export const check = async (roomId) => {
  try {
    console.log(roomId, "roomIdd")
    const data = await userApi.get(`/roomCheck/${roomId}`)
    console.log(data, "ddaaaaaaaaattttaaaa")

    return data
  } catch (err) {
    console.log(err)
    return { error: 'Unavailable' }

  }
}
export const updateDate = async (Id, UADate) => {
  try {
    console.log(UADate)
    const data = await userApi.patch(`/updateDate/${Id}`, UADate)
    console.log(data, "Update Rooms")

    return data
  } catch (error) {
    console.log(error)
    return { error: 'Process has not completed' }

  }
}
export const checkDate = async (Id, UA) => {
  try {
    console.log(UA, "1111111111")
    const data = await userApi.post(`/checkDate/${Id}`, UA)
    console.log(data, "check Date")

    return data
  } catch (error) {
    console.log(error)
    return { error: 'Date is not valid' }

  }
}
export const bookRoom = async (Id, roomBook) => {
  try {
    console.log(roomBook, "1111111111")
    const data = await userApi.post(`/bookRoom/${Id}`, roomBook)
    console.log(data, "check Date")

    return data
  } catch (error) {
    console.log(error)
    return { error: 'Booking error' }

  }
}