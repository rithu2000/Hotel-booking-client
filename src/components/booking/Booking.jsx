import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { hotelDetails } from '../../Api/UserApi'

function Booking() {

    const navigate = useNavigate();
    const [hotels, setHotels] = useState([]);
    const [location, setLocation] = useState('')

    const searchHotels = async () => {
        try {
            const data = await hotelDetails()
            const FilteredData = data.map((data) => data.location)
            let unique = [...new Set(FilteredData)];
            setLocation(unique[0])
            setHotels(unique)
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
                            <option key={data} value={data}>{data}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col w-full my-2 p-2">
                    <label>Search</label>
                    <button onClick={handleClick} className='w-full'>Rate & availabilites</button>
                </div>
            </form>
        </div>
    )
}
export default Booking;