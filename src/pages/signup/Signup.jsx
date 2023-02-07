import React from 'react'
import signup from '../../assets/signup.jpg'
import { Toaster } from 'react-hot-toast'
import { useState } from 'react'
import { registerUser } from '../../helper/userApi'
import { useNavigate } from 'react-router-dom'


function Signup() {
    
    const [formData, setFormData] = useState([])
    const handleChange = (e) => {
        const { value, name } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await registerUser(formData)
    }
    console.log(formData, 'formData');



    return (
        <div className="min-h-screen py-40 " style={{ backgroundImage: 'linear-gradient(115deg, #181818, #5D5D5D)' }}>
            <div className="container mx-auto">
                <Toaster position='top-center' reverseOrder={false} />
                <div className="flex flex-col lg:flex-row w-10/12 lg:w-9/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                    <div className='w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${signup})` }}>
                        <h1 className='text-white text-3xl mb-3'>Welcome</h1>
                        <div>
                            <p className='text-white'>This is a new website for book the room for your own concern</p>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 py-16 px-12'>
                        <h2 className='text-3xl mb-4'>Register</h2>
                        <p className='mb-4'>
                            Create your account. It's free and only take a minute
                        </p>
                        <form>
                            <div className='grid grid-cols-2 gap-5'>
                                <input onChange={handleChange} type="text" name="firstName" placeholder='Firstname' className='border border-gray-400 py-1 px-2' />
                                <input onChange={handleChange} type="text" name="lastName" placeholder='Lastname' className='border border-gray-400 py-1 px-2' />
                            </div>
                            <div className='mt-5'>
                                <input onChange={handleChange} type="email" name="email" placeholder='Email' className='border border-gray-400 py-1 px-2 w-full' />
                            </div>
                            <div className='mt-5'>
                                <input onChange={handleChange} type="password" name="password" placeholder='Password' className='border border-gray-400 py-1 px-2 w-full' />
                            </div>
                            <div className='mt-5'>
                                <input onChange={handleChange} type="password" name="confirmPassword" placeholder='Confirm Password' className='border border-gray-400 py-1 px-2 w-full' />
                            </div>
                            <div className="mt-5">
                                <button onClick={handleSubmit} className='w-full bg-gray-800 py-3 text-center text-white'>Register Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;