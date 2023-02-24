import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getByCity } from "../../Api/UserApi";
import { hideLoading, showLoading } from "../../redux/AlertSlice";

export default function ViewHotel() {

    const Dispatch = useDispatch();
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
                    <div className=" px-20 w-full ">
                        {hotel?.map((hotel) => (

                            <div className=" cursor-pointer w-full"
                                onClick={() => {
                                    navigate("/hotelInfo", { state: { hotelId: { hotel } } });
                                }}>
                                <div className="flex py-4 items-center border border-gray-300 rounded-lg shadow md:flex-row md:min-w-full m-5">
                                    <div className="flex">
                                        <img
                                            class="object-cover ml-5 rounded-md"
                                            src={hotel.images[0]}
                                            style={{ width: '400px', height: '300px' }} />
                                    </div>
                                    <div class="p-4 leading-normal">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {hotel.hotel}
                                        </h5>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                            {hotel.description}
                                        </p>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
              
            </div>
        </>
    );
}
