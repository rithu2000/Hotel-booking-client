import SignupImg from '../../assets/signup.jpg'
import toast from 'react-hot-toast'
import { useState } from 'react'
import { registerUser } from '../../Api/UserApi'
import { useNavigate } from 'react-router-dom'
import validator from 'validator'

export default function Signup() {

    const navigate = useNavigate()
    const [signupData, setSignupData] = useState({})
    const [isFirstName, setIsFirstName] = useState(false)
    const [isLastName, setIsLastName] = useState(false)
    const [isEmail, setIsEmail] = useState(false)
    const [isPassword, setIsPassword] = useState(false)
    const [submit, setSubmit] = useState(false)

    const handleChange = (e) => {

        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })
        setIsFirstName(signupData?.firstName?.length > 2)
        setIsLastName(signupData?.lastName?.length >= 1)
        setIsEmail(validator.isEmail(signupData?.email))
        setIsPassword(signupData?.password?.length > 3)

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmit(true)

        if (isEmail && isFirstName && isLastName && isPassword) {
            const response = await registerUser(signupData)
            if(response.message) {
                toast.error(response.message)
            } else {
                navigate('/')
            }
        }
    }

    return (
        <div className="min-h-screen py-40 " style={{ backgroundImage: 'linear-gradient(115deg, #181818, #5D5D5D)' }}>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row w-10/12 lg:w-9/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                    <div className='w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${SignupImg})` }}>
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
                            <div className='grid grid-cols-2 gap-5'>
                                <div>
                                    {!signupData.firstName && submit ? <small className='text-red-500'>*Please enter first name</small> : null}
                                    {!isFirstName && signupData.firstName ? <small className='text-red-500'>Please enter a valid name</small> : null}
                                </div>
                                <div>
                                    {!signupData.lastName && submit ? <small className='text-red-500'>*Please enter last name</small> : null}
                                    {!isLastName && signupData.lastName ? <small className=' text-red-500'>Please enter a valid name</small> : null}
                                </div>
                            </div>
                            <div className='mt-5'>
                                <input onChange={handleChange} type="email" name="email" placeholder='Email' className='border border-gray-400 py-1 px-2 w-full' />
                            </div>
                            <div>
                                {!signupData.email && submit ? <small className='text-red-500'>*Please enter an email</small> : null}
                                {!isEmail && signupData.email ? <small className='text-red-500'>Please enter a valid email</small> : null}
                            </div>
                            <div className='mt-5'>
                                <input onChange={handleChange} type="password" name="password" placeholder='Password' className='border border-gray-400 py-1 px-2 w-full' />
                            </div>
                            <div>
                                {!signupData.password && submit ? <small className='text-red-500'>*Please enter password</small> : null}
                                {!isPassword && signupData.password ? <small className='text-red-500'>Make password stronger</small> : null}
                            </div>
                            <div className='mt-5'>
                                <input onChange={handleChange} type="password" name="confirmPassword" placeholder='Confirm Password' className='border border-gray-400 py-1 px-2 w-full' />
                            </div>
                            <div>
                                {!signupData.confirmPassword && submit ? <small className='text-red-500'>*Please confirm password</small> : null}
                            </div>

                            <div className="mt-5">
                                <button onClick={handleSubmit}  className='w-full bg-gray-800 py-3 text-center text-white'>Register Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};