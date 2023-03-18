import PostDetailChart from "../../../components/admin/Charts/PostDetailChart";
import Bchart from "../../../components/admin/Charts/Bchart";
import { useEffect, useState } from "react";
import { getBookingTotal, revenueTotal, userTotal } from "../../../Api/AdminApi";
import rev from '../../../assets/revenue.jpg'
import book from '../../../assets/booking.png'
import user from '../../../assets/users.jpg'

function Dashboard() {
  const [totalUsers, setTotalUsers] = useState("");
  const [totalBookings, setTotalBookings] = useState("");
  const [totalRevenue, setTotalRevenue] = useState("");
  console.log(totalUsers, "totalUsers")
  console.log(totalBookings, "totalBookings")
  console.log(totalRevenue, "totalRevenue")

  const getTotalBookings = async () => {
    const data = await getBookingTotal();
    console.log(data, "TOTALUSERS");
    setTotalBookings(data);
  };
  const getTotalRevenue = async () => {
    const data = await revenueTotal()
    setTotalRevenue(data)
  }
  const getTotalUsers = async () => {
    const data = await userTotal()
    setTotalUsers(data)

  }

  useEffect(() => {
    getTotalUsers()
    getTotalRevenue()
    getTotalBookings();
  }, []);

  return (
    <>
      <div className="w-full ">
        <div className="container mx-auto flex items-start justify-center ">
          <div class="w-full p-10  py-6 flex flex-col justify-center sm:py-12">
            <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-4">
              <div class="bg-gray-100 border-indigo-600 dark:bg-blue-300 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                <img
                  class="w-20 h-20 p-1 border shadow-xl  shadow-gray-800 rounded-2xl object-cover"
                  src={rev}
                  alt=""
                />
                <div class="flex flex-col justify-center">
                  <p class="text-gray-900 dark:text-gray-900 font-semibold">
                    Total Revenue
                  </p>
                  <p class="text-black dark:text-gray-900 text-justify font-semibold">
                    ₹ {totalRevenue}
                  </p>
                </div>
              </div>

              <div class="bg-gray-100 border-red-600 dark:bg-blue-300 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-green-400 dark:hover:bg-green-600 hover:border-transparent | transition-colors duration-500">
                <img
                  class="w-20 p-1 h-20 border shadow-xl  shadow-gray-800 rounded-2xl object-cover"
                  src={book}
                  alt=""
                />
                <div class="flex flex-col justify-center">
                  <p class="text-gray-900 dark:text-gray-900 font-semibold">
                    Total Bookings
                  </p>
                  <p class="text-black dark:text-gray-900 text-justify font-semibold">
                    {totalBookings}
                  </p>
                </div>
              </div>

              <div class="bg-gray-100 border-yellow-600 dark:bg-blue-300 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-yellow-400 dark:hover:bg-yellow-600 hover:border-transparent | transition-colors duration-500">
                <img
                  class="w-20 p-1 h-20 border shadow-xl  shadow-gray-800 rounded-2xl object-cover"
                  src={user}
                  alt=""
                />
                <div class="flex flex-col justify-center">
                  <p class="text-gray-900  font-semibold">
                    Total Users
                  </p>
                  <p class="text-black dark:text-gray-900 text-justify font-semibold">
                    {totalUsers}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex items-start justify-center ">
          <div className="lg:flex  md:w-full sm:w-full px-20 mx-auto items-start justify-center py-10 ">
            <PostDetailChart />
            <Bchart />
          </div>
        </div>
      </div>
    </>

  )
}

export default Dashboard;