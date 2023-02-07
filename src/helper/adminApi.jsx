import axios from 'axios'


export async function adminLogin(credentials) {
    try {
        const { data } = await axios.post(`/admin/login`, credentials, { withCredentials: true })

        return data
    } catch (error) {
        return { error: 'login failed' }
    }
}