import React, { useState } from 'react'
import loginImg from '../../assets/login.jpg'
import toast, { Toaster } from 'react-hot-toast'
import { userLogin } from '../../Api/UserApi'
import { Link, useNavigate } from 'react-router-dom'
import validator from 'validator'


function Login() {
    const Navigate = useNavigate()
    const [loginData, setloginData] = useState([])
    const [isEmail, setIsEmail] = useState(false)
    const [isPassword, setIsPassword] = useState(false)
    const [submit, setSubmit] = useState(false)

    const handleChange = (e) => {

        const { value, name } = e.target
        setloginData({ ...loginData, [name]: value })
        setIsEmail(validator.isEmail(loginData?.email))
        setIsPassword(loginData?.password?.length > 2)

    }

    const handleSubmit = async (e) => {

        e.preventDefault()
        setSubmit(true)

        const response = await userLogin(loginData)
         console.log(response.token);
        if (response.error) {
            toast.error(response.error)
        } else {
            localStorage.setItem("token", response.token);
            toast.success(response.msg)
            Navigate('/')
        }

    }


    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={loginImg} alt="" />
            </div>
            <div className='bg-gray-800 flex flex-col justify-center'>
                <Toaster position='top-center' reverseOrder={false} />
                <form className='max-w-md w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
                    <h2 className='text-4xl text-white font-bold text-center'>Login</h2>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>User Name</label>
                        <input onChange={handleChange} name='email' className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                    </div>
                    <div>
                        {!loginData.email && submit ? <small className='text-red-500'>*Please enter an email</small> : null}
                        {!isEmail && loginData.email ? <small className='text-red-500'>Please enter a valid email</small> : null}
                    </div>
                    <div className='flex flex-col text-gray-400 py-2 pb-6'>
                        <label>Password</label>
                        <input onChange={handleChange} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' name='password' type="password" />
                    </div>
                    <div>
                        {!loginData.password && submit ? <small className='text-red-500'>*Please enter password</small> : null}
                        {!isPassword && loginData.password ? <small className='text-red-500'>Please enter a valid password</small> : null}
                    </div>
                    {/* <div className='flex justify-between text-gray-400 py-2'>
                    <p></p>
                    <p>Forgot Password</p>
                </div> */}
                    <button onClick={handleSubmit} className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/60 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Sign In</button>
                    
                    <div className='flex justify-between text-gray-400 py-2'>
                    <p>Didn't have an account</p>
                    <p> <Link to={'/register'}>Click here</Link>  </p>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Login;