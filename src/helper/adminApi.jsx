import {adminAPI} from '../utils/Apis'



export async function adminLogin(credentials) {
    try {
        const { data } = await adminAPI.post(`/admin-login`, credentials, { withCredentials: true })

        return data
    } catch (error) {
        return { error: 'login failed' }
    }
}

export async function getUsers() {

    try {
        const { data } = await adminAPI.get(`/user-management`)

        return data
    } catch (error) {
        return { error: 'Axios error' }
    }

}

export async function blockUser(access, userId) {
    try {

        const response = await adminAPI.get(`/useraccess/${access}/${userId}`)

        return response.data
    } catch (error) {
        return { error: "Block error" }
    }

}

export async function addHotel() {
    try {

        console.log("sasthanm inide ethy");
        const data = await adminAPI.post(`/addhotel`, addHotel)
        console.log(data, "podaaaaaa myrree");
        return data
    } catch (error) {
        return { error: "adding hotel caugth error" }
    }
}


export async function listHotels() {
    try {

        const { data } = await adminAPI.get(`/viewhotels`)

        return data
    } catch (error) {
        return { error: "hotel cannot be fetched" }
    }
}

export async function deleteHotel() {
    try {
        const data = await adminAPI.post(`/deleteHotel/:hotelId`);

        return data
    } catch (error) {
        return { error: 'Trouble in deletion' }
    }
}

export async function hotelById() {
    try {
        const data = await adminAPI.get(`/getHotelById/:hotelId`)

        return data
    } catch (error) {
        return { error: "Cannot get the id" }
    }
}