import { adminAPI, cloudApi } from '../utils/Apis'


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

export async function addingHotel(Hotel) {
    try {

        const { data } = await adminAPI.post(`/addhotel`, Hotel)

        return data
    } catch (error) {
        return { error: "adding hotel caught error" }
    }
}

export async function addingRoom(addRoom, Id) {
    try {
        const { data } = await adminAPI.put(`/addRoom/${Id}`, addRoom)

        return data
    } catch (error) {
        return { error: "Add Room may cause trouble " }
    }
}

export async function rooms() {
    try {
        const { data } = await adminAPI.get("/getAllRoom")

        return data
    } catch (error) {
        return { error: "Error on getting Room details" }
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

export async function deletingHotel(hotelId) {
    try {
        const { data } = await adminAPI.post(`/deleteHotel/${hotelId}`)

        return data
    } catch (error) {
        return { error: "Delete error" }
    }

}
export async function deletingRoom(roomId) {
    try {
        const { response } = await adminAPI.post(`/deleteRoom/${roomId}`)

        return response
    } catch (error) {
        return { error: "Delete Error" }
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

export async function roomById(roomId) {
    try {
        const { data } = await adminAPI.get(`/getRoomById/${roomId}`)

        return data
    } catch (error) {
        return { error: "Room id caught error" }
    }
}

export async function updateHotel(update) {
    try {
        const { data } = await adminAPI.post('/updateHotel', update)

        return data
    } catch (error) {
        return { error: "Update failed" }
    }
}


export async function uploadImage(image) {
    try {
        const formData = new FormData();
        formData.append("file", image);
        formData.append('upload_preset', 'hotelbooking');
        const { data } = await cloudApi.post(`/upload`, formData);

        return data?.secure_url;
    } catch (error) {
        return error;
    }
};