import {userApi} from '../utils/Apis'

export async function authenticate(email) {
    try {
        return await userApi.post('/api/authenticate', { email })
    } catch (error) {
        return { error: 'Username doesnt exist...!' }
    }
}

export async function registerUser(credentials) {
    try {

        const { data } = await userApi.post(`/api/register`, credentials, { withCredentials: true })

        return data
    } catch (error) {
        return { error: 'Cannot find the User' }
    }
}

export async function userLogin(credentials) {
    try {

        const { data } = await userApi.post(`/api/login`, credentials, { withCredentials: true })

        return data
    } catch (error) {
        return { error: 'login failed' }
    }
}