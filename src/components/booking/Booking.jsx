import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { hotelDetails } from '../../Api/UserApi'


function Booking() {

    const navigate = useNavigate();

    const [hotels, setHotels] = useState([]);
    const [location, setLocation] = useState('')

    // const minDate = new Date().toISOString().split('T')[0];

    const searchHotels = async () => {
        try {
            const data = await hotelDetails()
            console.log(data)
            setHotels(data)
        } catch (error) {
            console.log(error);
        }
    }

    const handleLocation = (e) => {
        setLocation(e.target.value);
    }

    const handleClick = async () => {
        navigate('/viewHotel', { state: { city: { location } } })
    }

    useEffect(() => {
        searchHotels()
    }, [])

    return (
        <div id='deals' className="max-w-[1140px] m-auto w-full p-4">
            <form action="" className='lg:flex lg:justify-between w-full items-center'>
                <div className="flex flex-col w-auto my-2 py-2">
                    <label>Destination</label>
                    <select onChange={handleLocation} className='lg:w-[300px] md:w-full border rounded-md p-2'>
                        {hotels.map((data) => (
                            <option value={data.location}>{data.location}</option>
                            
                        ))}
                    </select>
                </div>
                {/* <div className="flex w-full">
                    <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
                        <label>CheckIn</label>
                        <input type="date" name='checkIn' min={minDate}  className='border rounded-md p-2' />
                    </div>

                    <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
                        <label>CheckOut</label>
                        <input type="date" name='checkOut' className='border rounded-md p-2' />
                    </div>

                </div> */}
                <div className="flex flex-col w-full my-2 p-2">
                    <label>Search</label>
                    <button onClick={handleClick} className='w-full'>Rate & availabilites</button>
                </div>
            </form>
        </div>
    )
}

export default Booking;