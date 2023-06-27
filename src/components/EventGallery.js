import React from 'react';
import { Link } from 'react-router-dom'
export default function EventGallery() {
  return (
    <div className=' pt-36 px-36 h-screen'>
      <h1 className='text-4xl text-white font-bold mb-6'>Event Gallery📸</h1>
      <div className="grid grid-cols-4 gap-4">
        <img className='h-60 w-80 rounded-xl border-2 border-[#f9c23c] hover:opacity-60 hover:scale-95 cursor-pointer duration-150' src="IMG_0422.jpg" alt="event-gallery" />
        <img className='h-60 w-80 rounded-xl border-2 border-[#f9c23c] hover:opacity-60 hover:scale-95 cursor-pointer duration-150' src="IMG_6871.jpg" alt="event-gallery" />
        <img className='h-60 w-80 rounded-xl border-2 border-[#f9c23c] hover:opacity-60 hover:scale-95 cursor-pointer duration-150' src="IMG_6896.jpg" alt="event-gallery" />
        <img className='h-60 w-80 rounded-xl border-2 border-[#f9c23c] hover:opacity-60 hover:scale-95 cursor-pointer duration-150' src="IMG_9564.jpg" alt="event-gallery" />
        {/* Add more images as needed */}
      </div>
      <div className='flex justify-center mt-6'>
      <Link to="/event-gallery" className='p-2 bg-white text-center rounded-xl z-50 text-black font-bold text-xl hover:bg-[#f9c23c]'>View All</Link></div> 
    </div>
  );
}
