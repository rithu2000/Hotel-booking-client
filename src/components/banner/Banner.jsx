import React from 'react'
import bannerImg from '../../assets/banner.jpg'

function Banner() {
    return (
        <div className="w-full h-[90vh]">
            <img src={bannerImg} alt="" className='w-full h-full object-cover' />
            <div className='max-w-[1140px] m-auto'>
                <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
                    <h1 className='font-bold text-4xl'>Find Your special hotels</h1>
                    <h2 className='text-4xl py-4 italic'>with BookMyRoom</h2>
                    <p>
                        Nothing makes you feel better than when you get into a hotel bed, and the sheets feel so good. Why shouldn't you wake up like that every day? Spend money on your mattress and bedding because these things make a difference on your sleep and, ultimately, your happiness.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Banner;