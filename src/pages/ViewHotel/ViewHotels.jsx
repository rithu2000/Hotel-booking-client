import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getByCity } from "../../Api/UserApi";

export default function ViewHotel() {

    const location = useLocation();
    const navigate = useNavigate();
    const [hotel, setHotel] = useState([]);

    const cityName = location?.state?.city;
    const city = cityName.location;

    const getHotelCity = async (city) => {
        try {

            const data = await getByCity(city);
            setHotel(data);

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getHotelCity(city);
    }, []);

    return (
        <>
            <div className="w-full ">
                <div className="bg-blue-200 px-20 w-full">
                    <h1 className="font-semibold text-2xl py-10">
                        The Popular Hotels in {city}
                    </h1>
                </div>
                <div className="">
                    {hotel?.map((hotel) => (

                        <div className='border border-gray-300 p-7 rounded flex justify-between mb-5 mx-60 my-8'>

                            <img src={hotel.images[0]} className='w-56 h-56 object-cover rounded-md' />

                            <div className="flex flex-col gap-y-2 mt-3">
                                <h1 className="siTitle font-bold text-xl text-[#0071c2]">{hotel.hotel}</h1>
                                <span className="siDistance text-xs">400 m from center</span>
                                <span className="siTexiOp text-xs bg-[#008009] text-white max-w-fit p-1 rounded px-3">Free Airport Taxi</span>
                                <span className="siSubtitle font-bold text-xs pt-2">
                                    Studio Apartment with Air conditioning
                                </span>
                                <span className="siCancelOp text-xs text-[#008009] font-bold ">Free Cancellation</span>
                                <span className="siCancelOpSubtitle  text-sm text-[#008009] ">
                                    You can cancel later, so lock this great deal now!
                                </span>
                                <span className="siCancelOp text-xs text-[red] font-bold ">Only 3 rooms left on our site</span>
                            </div>
                            <div className="flex flex-col">
                                <button className='bg-[#0071c2] text-white py-2.5 px-2.5 border-none cursor-pointer rounded mt-16'
                                    onClick={() => {
                                        navigate("/hotelInfo", { state: { hotelId: { hotel } } });
                                    }}>See availability</button>
                                <span className="siTaxOp text-xs text-gray-400 mt-2">Book your slot now</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
