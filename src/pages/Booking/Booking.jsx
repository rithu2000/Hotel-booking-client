import "flowbite-datepicker";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { checkDate } from "../../Api/UserApi";
import { toast } from "react-hot-toast";
import Paypal from "../Payment/Paypal";
import { useSelector } from "react-redux";

export default function Booking() {
  const location = useLocation();
  const user = useSelector((state) => state.user.user)
  const userId = user._id

  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");

  const [room, setRoom] = useState("");
  const [available, setAvalable] = useState(false);
  const [adults, setAdult] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [roomDetails, setRoomDetails] = useState([]);
  const [pay, setPay] = useState(false);

  const Room = location.state.roomDetails;
  const roomId = Room._id;
  const days = checkout - checkin;

  const minDate = new Date().toISOString().split('T')[0];

  const handleCheckin = async (e) => {

    const Checkin = e.target.value;
    const string = Checkin.split("-");
    const Year = string[0];
    const month = string[1];
    const day = string[2];
    const checkinFormat = parseInt(Year + month + day)
    setCheckin(checkinFormat);

  };

  const handleCheckout = async (e) => {
    const Checkout = e.target.value;
    const string = Checkout.split("-");
    const Year = string[0];
    const month = string[1];
    const day = string[2];

    const checkoutFormat = parseInt(Year + month + day)

    if (checkoutFormat > checkin) {
      setCheckout(checkoutFormat);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let UA = [];
    let start = checkin;
    let end = checkout;

    while (start < end) {
      UA.push(start);
      start++;
    }

    const total = days + adults * room.price;

    const D = {
      UA,
      name,
      adults,
      email,
      phone,
      roomId,
      userId,
      total,
      checkin,
      checkout,
    };
    setRoomDetails(D);
    setPay(true);
  };


  const checkAvalablity = async () => {
    let UA = [];
    let start = checkin;
    let end = checkout;

    while (start < end) {
      UA.push(start);
      start++;
    }

    const Id = roomId;
    const data = await checkDate(Id, UA);
    const available = data;

    if (available === true) {
      toast.success("Its Available Continue Booking");
      setAvalable(available);
    } else {
      toast.error("Room is not available at this date");
      setAvalable("");
    }
  };

  useEffect(() => {
    if (Room) {
      setRoom(Room);
    }
  }, []);

  return (
    <>
      <div>
        <div className="bg-orange-200 px-20 w-full">
          <h1 className="font-semibold text-2xl py-10">
            Your favorite room {room.room}
          </h1>
        </div>

        <div className="w-full m-10">
          <h1 className="text-lg font-semibold ">
            Please confirm your order
          </h1>
        </div>

        <section className="container flex flex-col justify-center">

          <div className="flex justify-center w-full">

            <div className="flex w-full flex-col border rounded-lg shadow md:flex-row md:max-w-xl">
              <div className="flex flex-col justify-between p-4 leading-normal">

                <p className="text-sm font-normal">Please Check your dates</p>

                <div id="deals" className="max-w-[1140px] m-auto w-full">

                  <form className="justify-between w-full items-center">

                    <div className="flex flex-col text-sm w-full my-2 p-2">
                      <label>CheckIn Date</label>
                      <input min={minDate}
                        type="date"
                        className="border rounded-md p-2"
                        onChange={handleCheckin}
                      />
                    </div>

                    {checkin && (

                      <div className="flex text-sm flex-col w-full my-2 p-2">
                        <label>CheckOut Date</label>
                        <input
                          type="date"
                          className="border rounded-md p-2"
                          onChange={handleCheckout}
                        />
                      </div>

                    )}

                  </form>

                  {checkin & checkout && (

                    <button onClick={checkAvalablity}
                      className="w-full text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Check Availability
                    </button>

                  )}

                </div>

                <form className="space-y-4 my-5">

                  <div className="">

                    <label for="email" className="block mb-2 text-sm font-medium">
                      Number Of Adults
                    </label>

                    <select className="border rounded-md px-5 py-1 text-sm mb-5"
                      onChange={(e) => {
                        setAdult(parseInt(e.target.value));
                      }}>
                      <option></option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>

                  </div>

                  <span className="text-sm ">
                    Please enter the details of Guests
                  </span>

                  <div className="grid md:grid-cols-2 md:gap-6 mt-2">
                    <div className="relative z-0  w-full mb-6 group">
                      <label
                        for="floating_first_name"
                        className="peer-focus:font-medium absolute text-md duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="floating_first_name"
                        className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        onChange={(e) => setName(e.target.value)}
                        placeholder
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                      <label
                        for="floating_phone"
                        className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Phone
                      </label>
                      <input
                        type="number"
                        pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                        name="phone"
                        id="floating_phone"
                        className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder=" "
                        required
                      />
                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                      <label
                        for="email"
                        className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        pattern
                        id="floating_company"
                        className="block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder=" "
                        required
                      />
                    </div>

                  </div>

                  <div class="flex items-center">
                    <input
                      id="link-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2"
                      onClick={handleSubmit} />
                    <label
                      for="link-checkbox"
                      class="ml-2 text-sm font-medium">
                      I agree For payment
                    </label>
                  </div>

                  {pay && <Paypal roomDetails={roomDetails} />}

                </form>
              </div>
            </div>

            {checkin & checkout && (

              <div className="flex flex-col mx-5">
                <div className=" bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
                  <form className="space-y-4">
                    <span className="font-normal text-lg">Details</span>
                    <div>
                      <span className="text-sm font-normal">
                        Total Guests : {adults}
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-normal">
                        Total Days : {days}
                      </span>
                    </div>
                    <button type="submit" className="w-52 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                      Total Amount : ₹ {days + adults * room.price}
                    </button>
                  </form>
                </div>
              </div>

            )}

          </div>
        </section>

      </div>
    </>
  );
}
