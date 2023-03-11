import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { bookings } from '../../Api/UserApi'
import hotelImg from '../../assets/Topview.jpg'

export default function Mybooking() {

    const location = useLocation()
    const [booking, setBooking] = useState([])

    const user = useSelector((state) => state.user.user)
    const Id = user._id

    const getAllBookings = async (Id) => {
        const data = await bookings(Id)

        setBooking(data)
    }

    useEffect(() => {
        getAllBookings(Id)
    }, [])
    return (
        <>
            <div className="w-full ">
                <div className="bg-blue-200 px-20 py-10">
                    <h1 className="font-semibold text-2xl py-5">
                        My Bookings
                    </h1>
                </div>
            </div>

            <section className="container mx-auto px-6 flex items-start justify-center py-10 ">
                <div className="mr-12 text-xl w-full lg:text-2xl ">
                    {/* {!hotel ? ( */}

                    {/* // ) : ( */}
                    <div className="w-full">
                        <div className=" px-20 w-full ">
                            {/* {hotel?.map((hotel) => ( */}
                            <div
                                className="bg- cursor-pointer w-full"
                                onClick={() => {
                                    // navigate("/hotelInfo", {
                                    // state: { hotelId: { hotel } },
                                    // });
                                }}
                            >

                                {booking.map((book) => (

                                    <div
                                        href="#"
                                        class="flex py-4 px-2  flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:min-w-full m-5"
                                    >
                                        <img
                                            class="object-cover h-96 md:h-auto md:w-48 rounded-md"
                                            // src={hotel.images[0]}
                                            src={hotelImg}
                                        />
                                        <div class="flex flex-col justify-between  p-4 leading-normal">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-balck">
                                                Name:{book.name} {<br />}
                                                Room Id:{book.roomId}
                                            </h5>
                                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                                Price:{book.total}
                                            </p>
                                            {/* {book?.status ? (

                                                    <button className="bg-green-600">Exist</button>
                                                ) : (
                                                    <button className="">Checked Out </button>

                                                )} */}

                                            {/* <button className="bg-green-300">Available</button> */}

                                        </div>
                                    </div>
                                ))}

                            </div>
                            {/* // ))} */}
                        </div>
                    </div>
                    {/* )} */}
                </div>
            </section>
        </>
    );
}