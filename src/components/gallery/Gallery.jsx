import React from 'react'
import OutsideView from '../../assets/gallery1.jpeg'
import SeaView from '../../assets/gallery2.jpeg'
import DroneView from '../../assets/gallery3.jpeg'
import FrontView from '../../assets/gallery4.jpeg'
import InsideView from '../../assets/gallery5.jpeg'


function Gallery() {


    return (
        <div id='gallery' className="max-w-[1140px] m-auto w-full px-4 py-16">
            <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
            <div className="grid sm:grid-cols-5 gap-4">
                <div className="sm:col-span-3 col-span-2 row-span-2">
                    <img className='w-full h-full object-cover' src={OutsideView} alt="" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src={SeaView} alt="" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src={DroneView} alt="" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src={FrontView} alt="" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src={InsideView} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Gallery;