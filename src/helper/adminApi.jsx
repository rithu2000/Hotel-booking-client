import axios from 'axios'


export async function adminLogin(credentials) {
    try {
        const {data} = await axios.post(`/admin/admin-login`, credentials, { withCredentials: true })
        return data
    } catch (error) {
        return { error: 'login failed' }
    }
}

export async function getUsers() {

    try {
        const {data} = await axios.get(`/admin/user-management`)

        return data
    } catch (error) {
        return { error: 'Axios error' }
    }

}

export async function blockUser() {
    try {
        const {UserData} = await axios.patch(`/admin/useraccess`) 
        
        return UserData
    } catch (error) {
        return {error: "block error"}
    }
    
}
