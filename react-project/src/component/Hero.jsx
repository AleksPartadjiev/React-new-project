import React from 'react'
import mainPhoto from '../assets/images/main-page-photo1.png';
const Hero = () => {
    return (
        <div className="bg-neutral-200 lg:py-20  h-full " >
            <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5 mt-12">
                <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
                    <p className="text-4xl font-bold md:text-7xl text-orange-600">25% OFF</p>
                    <p className="text-4xl font-bold md:text-7xl">SUMMER SALE</p>
                    <p className="mt-2 text-sm md:text-lg">For limited time only!</p>
                    <button className="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800">Shop Now</button>
                </div>
                <div className="order-1 lg:order-2">
                    <img className="h-100 w-100 object-cover lg:w-[90%] lg:h-[100%]" src={mainPhoto} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero