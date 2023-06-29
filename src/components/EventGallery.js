import React from 'react';
import { Link } from 'react-router-dom'
import Reveal from './Reveal2';
export default function EventGallery() {
  return (
    <Reveal>
    <div className=' pt-36 pb-5  lg:px-36 px-5 '>
      <h1 className='text-4xl text-white  font-bold mb-6'>Event Gallery📸</h1>
      
      <div className="pl-16 sm:pl-0 grid md:grid-cols-2 sm:grid-cols-1 items-center lg:grid-cols-4 gap-4">
        <img className='lg:h-60 lg:w-80 h-44 w-72 rounded-xl border-2 object-cover border-[#0cf790] hover:opacity-60 hover:scale-95 cursor-pointer duration-150' src="IMG_0422.jpg" alt="event-gallery" />
        <img className='lg:h-60 lg:w-80 h-44 w-72 rounded-xl border-2 object-cover border-[#0cf790] hover:opacity-60 hover:scale-95 cursor-pointer duration-150' src="IMG_6871.jpg" alt="event-gallery" />
        <img className='lg:h-60 lg:w-80 h-44 w-72 rounded-xl border-2 object-cover border-[#0cf790] hover:opacity-60 hover:scale-95 cursor-pointer duration-150' src="IMG_6896.jpg" alt="event-gallery" />
        <img className='lg:h-60 lg:w-80 h-44 w-72 rounded-xl border-2 object-cover border-[#0cf790] hover:opacity-60 hover:scale-95 cursor-pointer duration-150' src="IMG_9564.jpg" alt="event-gallery" />
        {/* Add more images as needed */}
      </div>
     
     
      <div className='flex pl-16 sm:pl-0 justify-center mt-6'>
      <Link to="/event-gallery" className='p-2 bg-white text-center rounded-xl z-50 text-black font-bold text-xl  hover:scale-105 hover:bg-[#0cf790]'>View All</Link></div> 
    </div>
    </Reveal>
  );
}
