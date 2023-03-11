import { useState, useEffect } from 'react'
import { getAllBookings } from '../../../Api/AdminApi'
import ListBooking from '../../../components/admin/listBooking/ListBooking'

export default function BookingManage() {
  const [booking, setBooking] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = booking.slice(indexOfFirstItem, indexOfLastItem);


  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(booking.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(number => {
    return (
      <li key={number}>
        <button onClick={() => setCurrentPage(number)}>
          {number}
        </button>
      </li>
    );
  });

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };


  const allBookings = async () => {
    const data = await getAllBookings()

    setBooking(data)
  }

  useEffect(() => {
    allBookings()
  }, [])

  return (
    <>
      <div className="">
        <div className="container mx-auto bg-[#FFFFFF] max-md:pl-16 ">
          <div className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
            <h1 className="text-white text-center font-semibold text-xl">Booking Management</h1>
            <table className="w-full mt-5">
              <thead className="bg-gray-50 border-b-2 border-stone-700 ">
                <tr>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    No
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Guest Name
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    CheckIn Date
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    CheckOut Date
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Amount
                  </th>
                  {/* <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Details
                  </th> */}
                </tr>
              </thead>
              <tbody>
                {currentItems?.map((booking, index) => {
                  return (
                    <ListBooking Item={booking} index={index} />
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className="max-w-4xl mt-2 mx-auto flex flex-row justify-end">
            <button onClick={handlePrevClick}>previous</button>
            <input className="text-center w-16 border ml-2 mr-2" disabled value={currentPage} />
            <button className="pl-7 pr-7" onClick={handleNextClick}>next</button>
          </div>
        </div>
      </div>
    </>
  )
}
