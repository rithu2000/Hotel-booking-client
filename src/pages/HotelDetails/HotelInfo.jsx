import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getHotelData } from "../../Api/UserApi";
import "tw-elements";

import OutsideView from '../../assets/gallery1.jpeg'
import SeaView from '../../assets/gallery2.jpeg'
import DroneView from '../../assets/gallery3.jpeg'
import FrontView from '../../assets/gallery4.jpeg'
import InsideView from '../../assets/gallery5.jpeg'

// import Modal from "../components/Modal";
import Gridcards from "../../components/gridCards/GridCards";

export default function HotelInfo() {
  const [hotel, setHotel] = useState("");
  console.log(hotel, "hhhhhhhhhhhhh");
  const location = useLocation();
  const data = location?.state?.hotelId;
  const Id = data.hotel._id;

  const getHotel = async (Id) => {
    try {
      console.log(Id, "same Id");
      const data = await getHotelData(Id);
      console.log(data, "ppppppppppp");
      setHotel(data);
    } catch (err) {
      console.log(err);
    }
  };






  const id = location.pathname.split('/')[2]

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);












  const handleOpen = (i) => {
    setSlideNumber(i)
    setOpen(true)
  }

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === 'l') {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1

    }
    setSlideNumber(newSlideNumber)
  }





  useEffect(() => {
    getHotel(Id);
  }, []);
  return (
    <>

      <h1 className="text-3xl text-center my-4">Hotel Details</h1>
      {hotel && (
        <div className='hotelContainer flex items-center mt-5 flex-col px-2'>
          {open && <div className="slider sticky top-0 left-0 w-full h-full bg-transparent z-50 flex items-center">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='close text-gray-500 w-10 h-10 cursor-pointer absolute top-5 right-5' onClick={() => setOpen(false)}>
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='letarrow w-10 w-10 text-gray-500 cursor-pointer' onClick={() => handleMove("l")}>
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clipRule="evenodd" />
            </svg>

            <div className="sliderWrapper w-full h-full flex justify-center items-center">
              <img src={data.photos[slideNumber]} alt="" className="sliderImg  w-[80%] h-[80vh]" />
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='letarrow w-10 w-10 text-gray-500 cursor-pointer' onClick={() => handleMove("r")}>
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
            </svg>

          </div>}
          <div className="hotelWrapper w-full container flex flex-col gap-2.5 relative">

            <div className="hotelImages flex flex-wrap justify-between	">
              {hotel.images?.map((photos, i) => (
                <div className="hotelImageWrapper w-[33%]  ">
                  <img onClick={() => handleOpen(i)} src={photos} alt="" className="hotelImg w-full object-cover pb-1.5 h-72" />
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
  );
}