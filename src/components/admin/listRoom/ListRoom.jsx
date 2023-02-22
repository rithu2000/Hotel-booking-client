import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deletingRoom } from "../../../helper/AdminApi";
import { roomById } from "../../../helper/AdminApi";


export default function ListRoom({ room }) {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(true);

  const deleteRoom = async (RoomId) => {
    try {

      await deletingRoom(RoomId);
      setVisible(false)
    } catch (error) {
      console.log(error);
    }
  }
  const editHotel = async (RoomId) => {
    try {
      console.log(RoomId, "iiiiiiiiiiiiiiiiiiidddddddddddddd")
      const data = await roomById(RoomId)
      console.log(data, "result aaayi verunna edit hotel nte data");
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {visible && (
        <tr class="text-gray-700">
          <td className="p-3 pt-7  text-md text-white">
            <div class="flex items-center text-sm">
              <div class="relative w-8 h-8 mr-3 rounded-full">
                <img
                  class="object-cover w-full h-full rounded-full"
                  src={room.images}
                  alt="hotel"
                  loading="lazy"
                />
              </div>
              <div>
                <p class="font-semibold text-white">{room.room}</p>
              </div>
            </div>
          </td>
          <td className="p-3 pt-7  text-md text-white">{room._id}</td>
          <ul className="flex justify-center">
            <li>
              <button className="mt-4 inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
                onClick={() => {
                  navigate('/admin/editRoom', { state: { roomId: { room } } })
                }}>
                Edit
              </button>
            </li>
            <li>
              <button className="mt-4 inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-600 active:shadow-lg transition duration-150 ease-in-out"
                onClick={() => {
                  deleteRoom(room._id);
                }}>
                Delete
              </button>
            </li>
          </ul>
        </tr>
      )}
    </>
  );
}
