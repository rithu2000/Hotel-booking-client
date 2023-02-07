import axios from 'axios'
axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

export async function authenticate(email) {
    try {
        return await axios.post('/api/authenticate', { email })
    } catch (error) {
        return { error: 'Username doesnt exist...!' }
    }
}

export async function registerUser(credentials) {
    try {
        const { data } = await axios.post(`/api/register`, credentials, {withCredentials: true})


        return data
    } catch (error) {
        return Promise.reject({ error })
    }
}

export async function userLogin(credentials) {
    try {
        const { data } = await axios.post(`/api/login`, credentials, { withCredentials: true })

        return data
    } catch (error) {
        return { error: 'login failed' }
    }
}