import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getHotelData } from "../../Api/UserApi";
import Gridcards from "../../components/gridCards/GridCards";

export default function HotelInfo() {

  const location = useLocation();
  const [hotel, setHotel] = useState("");
  const data = location?.state?.hotelId;
  const Id = data.hotel._id;

  const getHotel = async (Id) => {
    try {
      const data = await getHotelData(Id);
      setHotel(data);
    } catch (err) {
      console.log(err);
    }
  };



  useEffect(() => {
    getHotel(Id);
  }, []);
  return (

    <>

      <h1 className="text-3xl text-center my-4">Hotel Details</h1>
      {hotel && (
        <div className='hotelContainer flex items-center mt-5 flex-col px-2'>
          <div className="hotelWrapper w-full container flex flex-col gap-2.5 relative">

            <div className="hotelImages flex flex-wrap justify-between	">
              {hotel.images?.map((photos) => (
                <div className="hotelImageWrapper w-[33%]  ">
                  <img src={photos} className="hotelImg w-full object-cover pb-1.5 h-72" />
                </div>
              ))}
            </div>

            <h1 className="hotelTitle text-2xl font-bold">{hotel.hotel}</h1>
            <div className="hotelAddress text-sm flex items-center gap-2.5 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span>{hotel.location}</span>
            </div>
            <span className="hotelDistance text-[#0071c2] font-medium">
              Excellent location - 400m from Airport
            </span>
            <span className="hotelPrceHighlight text-[#008009] font-medium">
              Book a stay over $cheap price at this property and get a free airport taxi
            </span>

            <div className="">
              <h1 className="text-lg">About the Hotel</h1>
              <p className='hotelDesc text-sm mt-2 '>
                {hotel.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {hotel && <Gridcards hotel={hotel} />}

    </>
  )
}