import React, { useState } from 'react'
import SideImage from '../../../assets/adminLogin.jpg'
import { Toaster } from 'react-hot-toast'
import { adminLogin } from '../../../helper/adminApi'
import { useNavigate } from 'react-router-dom'


function Login() {
    const Navigate = useNavigate()
    const [loginData, setloginData] = useState([])
    const handleChange = (e) => {
        const { value, name } = e.target
        setloginData({ ...loginData, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await adminLogin(loginData)
        if (response.status) {
            Navigate('/admin')
        } else {
            response.error({ msg: 'login failed' })
        }
    }
    // console.log(loginData, 'formdata');


    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={SideImage} alt="" />
            </div>
            <div className='bg-gray-800 flex flex-col justify-center'>
                <Toaster position='top-center' reverseOrder={false} />
                <form className='max-w-md w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
                    <h2 className='text-4xl text-white font-bold text-center'>Admin Login</h2>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>User Name</label>
                        <input onChange={handleChange} name='email' className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                    </div>
                    <div className='flex flex-col text-gray-400 py-2 pb-6'>
                        <label>Password</label>
                        <input onChange={handleChange} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' name='password' type="password" />
                    </div>
                    {/* <div className='flex justify-between text-gray-400 py-2'>
                    <p></p>
                    <p>Forgot Password</p>
                </div> */}
                    <button onClick={handleSubmit} className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/60 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Login;