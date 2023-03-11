import React from "react";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { deletingHotel } from "../../../Api/AdminApi";

export default function ListHotel({ hotel }) {

  const navigate = useNavigate()

  const deletehotel = async (HotelId) => {

    try {
      await deletingHotel(HotelId);
    } catch (error) {
      console.log(error);
    }

  }
  
  const DeleteButton = async () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deletehotel(hotel._id);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  return (
    <>
        <tr class="text-gray-700">
          <td className="p-3 pt-7  text-md text-white">
            <div class="flex items-center text-sm">
              <div class="relative w-8 h-8 mr-3 rounded-full">
                <img
                  class="object-cover w-full h-full rounded-full"
                  src={hotel.images[0]}
                  alt="hotel"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="font-semibold text-white">{hotel.hotel}</p>
              </div>
            </div>
          </td>
          <td className="p-3 pt-7  text-md text-white">{hotel.location}</td>
          <ul className="flex justify-center">
            <li>
              <button className="mt-4 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-600 active:shadow-lg transition duration-150 ease-in-out"
                onClick={() => {
                  navigate('/admin/addRoom', { state: { hotelId: { hotel } } })
                }}>
                Add Room
              </button>
            </li>
            <li>
              <button className="mt-4 inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
                onClick={() => {
                  navigate('/admin/editHotel', { state: { hotelId: { hotel } } })
                }}>
                Edit
              </button>
            </li>
            <li>
              <button
                className=" mt-4 inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-600 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"
                onClick={DeleteButton}>
                Delete
              </button>
            </li>
          </ul>
        </tr>
    </>
  );
}
