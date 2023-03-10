import { useState } from "react"
import { Link } from "react-router-dom"

function Header() {
    const [existUser, setExistUser] = useState(localStorage.getItem("token"))
    const logOut = () => {
        localStorage.clear()
        setExistUser(null)
    }

    return (
            <div className='flex justify-between items-center px-4 py-2'>
            <div className='flex items-center'>
                <h1 className='text-xl font-bold text-gray-700'>BookMyRoom</h1>
            </div>
            <div>
                {existUser ? (
                    <div className="flex">
                        <p className="m-2">Hi, Welcome</p>
                        <button onClick={logOut} className='mr-3'>Logout</button>
                    </div>
                ) : (
                    <>
                        <Link to={'/register'}><button className='mr-3' oo>Register</button></Link>
                        <Link to={'login'}><button className='mr-3'>Login</button></Link>
                    </>
                )}
            </div>
        </div>
    )
}

export default Header;