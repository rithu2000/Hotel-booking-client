import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { getRoomData } from "../../Api/UserApi";

export default function Gridcards({ hotel }) {

    const navigate = useNavigate();
    const location = useLocation();
    const [room, setRoom] = useState([]);
    const data = location?.state?.hotelId;
    const Id = data.hotel._id;

    const getRooms = async (Id) => {
        try {
            const data = await getRoomData(Id);
            setRoom(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getRooms(Id);
    }, []);

    return (
        <>
            <div className="w-full flex flex-col items-center my-5">
                <h1 className="items-start text-2xl my-5">Available Rooms</h1>
                {room?.map((room) => (
                    <div className="container border-2 rounded-md mt-10">
                        <div className="flex flex-col md:flex-row w-full rounded-lg bg-white shadow-lg">
                            <img className="w-96 h-80 object-cover rounded-md m-3 " src={room.images[0]} />

                            <div className="p-6 flex flex-col ml-20">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">{room.room}</h5>
                                <p className="text-gray-700 text-base mb-4">
                                    {room.description}
                                </p>
                                <p className="text-gray-600 text-xs">Max people : 2</p>
                                <p className="text-gray-700 text-base mb-4">
                                    ₹{room.price}
                                </p>
                            </div>
                            <div className="items-center w-full px-3 flex justify-end ">
                                <button className="border-none px-2 py-2 bg-[#0071c2] text-white cursor-pointer rounded"
                                    onClick={() => {
                                        navigate("/booking", {
                                            state: { roomDetails: room },
                                        });
                                    }}>Book Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}