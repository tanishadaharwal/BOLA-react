import React from 'react';

export default function EventGallery() {
  return (
    <div className='mx-36 mt-32'>
      <h1 className='text-4xl font-bold mb-6'>Event Gallery📸</h1>
      <div className="grid grid-cols-4 gap-4">
        <img className='h-60 w-80 rounded-xl hover:opacity-60 hover:scale-95 cursor-pointer duration-150' src="IMG_0422.jpg" alt="Image 1" />
        <img className='h-60 w-80 rounded-xl hover:opacity-60 hover:scale-95 cursor-pointer duration-150' src="IMG_6871.jpg" alt="Image 2" />
        <img className='h-60 w-80 rounded-xl hover:opacity-60 hover:scale-95 cursor-pointer duration-150' src="IMG_6896.jpg" alt="Image 3" />
        <img className='h-60 w-80 rounded-xl hover:opacity-60 hover:scale-95 cursor-pointer duration-150' src="IMG_9564.jpg" alt="Image 4" />
        {/* Add more images as needed */}
      </div>
      <div className='flex justify-center mt-6'>
        <button className='p-4 text-center rounded-xl text-black font-bold text-xl bg-violet-300'>View All</button>
      </div>
    </div>
  );
}
