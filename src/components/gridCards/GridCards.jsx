import React, { useEffect, useState } from "react";
import './GridCards.css'
import { useLocation, useNavigate } from "react-router-dom";

import { checkDate, getRoomData } from "../../Api/UserApi";

export default function Gridcards({ hotel }) {
    const [room, setRoom] = useState([]);
    const navigate = useNavigate();

    console.log(room, "Rooms");

    const location = useLocation();
    const data = location?.state?.hotelId;
    const Id = data.hotel._id;
    // const Id = hotel._id;
    console.log(Id, "id of hotel in grid");
    // console.log(data.hotel.images[0],"lllllllllllllll")

    const getRooms = async (Id) => {
        try {
            console.log(Id, "Hotel Id in grid");
            const data = await getRoomData(Id);
            setRoom(data);
            console.log(data, "ppppppppppp");
            setRoom(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getRooms(Id);
    }, []);

    console.log(hotel, ",,,,,,,,,,,,,,,,,,");
    return (
        <>

            <div className="w-full flex flex-col items-center my-5">
                <h1 className="items-start text-2xl my-5">Available Rooms</h1>
                {room?.map((room) => (

                    <div className="container border-2 rounded-md mt-10">
                        <div className="flex flex-col md:flex-row w-full rounded-lg bg-white shadow-lg">
                            <img className="w-80 h-60 object-cover rounded-md m-3 " src={room.images[0]} alt="" />

                            <div className="p-6 flex flex-col ml-20">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">{room.room}</h5>
                                <p className="text-gray-700 text-base mb-4">
                                    description
                                </p>
                                <p className="text-gray-600 text-xs">Max people : 2</p>
                                <p className="text-gray-700 text-base mb-4">
                                &#8377;{room.price}
                                </p>
                            </div>
                            <div className="items-center w-full px-3 flex justify-end ">
                                <button className="border-none px-2 py-2 bg-[#0071c2] text-white cursor-pointer rounded">Book Now</button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>



            {/* {hotel && */}
            <section className="container mx-auto px-6 flex items-start justify-center py-10">
                <div className="w-full py-10">
                    <div className="container mx-auto px-6 flex items-start justify-center">
                        <div className="w-full">
                            {/* Card is full width. Use in 12 col grid for best view. */}
                            <h1 className="mr-12 text-xl lg:text-2xl mb-3 text-gray-800 dark:text-gray-100 font-bold lg:w-1/2 ">
                                Available Rooms
                            </h1>
                            {room?.map((room) => (
                                <div className="mx-auto w-full p-5 lg:p-10 border-2 mb-1 shadow rounded">
                                    <div className="flex flex-col lg:flex-row items-start lg:items-center mb-8">
                                        <h1 className="mr-12 text-xl lg:text-2xl font-bold lg:w-1/2 ">
                                            {room.room}
                                        </h1>
                                    </div>
                                    <div className="flex flex-col lg:flex-row items-start lg:items-center">
                                        <div className="w-full lg:w-1/2 pr-0 lg:pr-48">

                                            <div
                                                id="carouselExampleCaptions"
                                                class="carousel slide relative"
                                                data-bs-ride="carousel"
                                            >
                                                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                                                    <button
                                                        type="button"
                                                        data-bs-target="#carouselExampleCaptions"
                                                        data-bs-slide-to="0"
                                                        className="active"
                                                        aria-current="true"
                                                        aria-label="Slide 1"
                                                    ></button>
                                                    <button
                                                        type="button"
                                                        data-bs-target="#carouselExampleCaptions"
                                                        data-bs-slide-to="1"
                                                        aria-label="Slide 2"
                                                    ></button>
                                                    <button
                                                        type="button"
                                                        data-bs-target="#carouselExampleCaptions"
                                                        data-bs-slide-to="2"
                                                        aria-label="Slide 3"
                                                    ></button>
                                                </div>
                                                <div className="carousel-inner relative w-full overflow-hidden">
                                                    {/* {room?.map((room)=>( */}

                                                    <div className="carousel-item active relative float-left w-full">
                                                        <img
                                                            src={room.images[0]}
                                                            className="block w-full image"
                                                            alt="..."
                                                        />
                                                        <div className="carousel-caption hidden md:block absolute text-center">
                                                            <h5 className="text-xl">
                                                                {/* First slide label */}
                                                            </h5>
                                                            <p>
                                                                {/* Some representative placeholder content for the
                              first slide. */}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    {/* ))} */}
                                                    <div className="carousel-item relative float-left w-full">
                                                        <img
                                                            src={room.images[1]}
                                                            className="block w-full image"
                                                            alt="..."
                                                        />
                                                        <div className="carousel-caption hidden md:block absolute text-center">
                                                            <h5 className="text-xl">
                                                                {/* Second slide label */}
                                                            </h5>
                                                            <p>
                                                                {/* Some representative placeholder content for the
                              second slide. */}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="carousel-item relative float-left w-full">
                                                        <img
                                                            src={room.images[2]}
                                                            className="block w-full image"
                                                            alt="..."
                                                        />
                                                        <div className="carousel-caption hidden md:block absolute text-center">
                                                            <h5 className="text-xl">
                                                                {/* Third slide label */}
                                                            </h5>
                                                            <p>
                                                                {/* Some representative placeholder content for the
                              third slide. */}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button
                                                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                                                    type="button"
                                                    data-bs-target="#carouselExampleCaptions"
                                                    data-bs-slide="prev"
                                                >
                                                    <span
                                                        className="carousel-control-prev-icon inline-block bg-no-repeat"
                                                        aria-hidden="true"
                                                    ></span>
                                                    <span className="visually-hidden">Previous</span>
                                                </button>
                                                <button
                                                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                                                    type="button"
                                                    data-bs-target="#carouselExampleCaptions"
                                                    data-bs-slide="next"
                                                >
                                                    <span
                                                        className="carousel-control-next-icon inline-block bg-no-repeat"
                                                        aria-hidden="true"
                                                    ></span>
                                                    <span className="visually-hidden">Next</span>
                                                </button>
                                            </div>
                                            {/* ////////////////////////// */}
                                        </div>
                                        <div className="lg:pl-8 w-full lg:w-1/2 flex flex-col lg:flex-row items-start lg:items-center">
                                            <div className="mr-12 flex lg:block items-center lg:mr-6 xl:mr-12 mt-5 lg:mt-0">
                                                <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl lg:text-2xl mb-2 leading-6  lg:text-center">
                                                    Description
                                                </h2>
                                                <p className="ml-2 lg:ml-0 text-gray-800 dark:text-gray-100 text-xl leading-5 text">
                                                    {room.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <hr className="mt-8 mb-8 lg:mb-10 h-1 rounded bg-gray-200" />
                                        {/* <hr className="absolute top-0 h-1 w-2/3 rounded bg-indigo-400" /> */}
                                    </div>
                                    <div className="flex flex-col lg:flex-row items-start lg:items-center">
                                        <div className="flex flex-col lg:flex-row w-full lg:w-2/3 items-start lg:items-center mb-8 lg:mb-0">
                                            <div className="mr-24 flex lg:block  items-center mb-4 lg:mb-0">
                                                <h3 className="text-indigo-700 dark:text-indigo-600 leading-6 text-lg">
                                                    {/* Features */}
                                                </h3>
                                                <h2 className="mr-2 lg:mr-0 text-gray-600 dark:text-gray-400 text-xl lg:text-2xl font-bold">
                                                    {/* ₹{room.price} */}
                                                    Features :
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="flex items-center w-full lg:w-1/3 justify-start lg:justify-end">
                                            <div className="mr-24 flex lg:block  items-center mb-4 lg:mb-0">
                                                <h3 className="text-indigo-700 dark:text-indigo-600 leading-6 text-lg">
                                                    Per Day
                                                </h3>
                                                <h2 className="mr-2 lg:mr-0 text-gray-600 dark:text-gray-400 text-xl lg:text-2xl font-bold">
                                                    ₹{room.price}
                                                </h2>
                                            </div>
                                            <button
                                                className="bg-blue-100 p-2 rounded-xl ml-2"
                                                onClick={() => {
                                                    navigate("/booking", {
                                                        state: { roomDetails: room },
                                                    });
                                                }}>
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
