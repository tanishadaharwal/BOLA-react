import React from 'react';
import Reveal from './Reveal';
export default function MessageGSBola() {
  return (
    <Reveal>
        <div className='lg:px-36 px-5 pt-36  '>
      <h1 className='text-4xl text-[#0aff9d] font-bold mb-6'>Message from GS Bola</h1>
      
      <hr className="w-full border-2 border-gray-300 mt-8" />
      <div className='lg:flex flex-row justify-between  space-x-10'>
      
       
    
        <div className='mt-8 h-1/2 lg:w-[70%] px-5 lg:text-xl text-sm text-[#ebecf3] font-semibold text-left leading-10'>
        It is my utmost pleasure to extend a heartfelt welcome to all of you at our prestigious institution, which is enriched by a vibrant literary culture. We firmly believe that literature holds the power to transform the world. Here, at our college, we have a variety of clubs dedicated to fostering this spirit. I invite you to explore the diverse literary clubs and events offered by the Board of Literary Affairs. Embrace the opportunity to broaden your knowledge, nurture personal growth, and create cherished memories within our captivating environment. Once again, I warmly welcome you to IIT Ropar, where the journey of literary exploration begins.

      </div>
      <div>
      <img className="rounded-xl mx-auto lg:w-72 lg:h-80 w-40 h-72  hover:scale-110 duration-300 mt-8" alt="GS-BOLA"src="GS_BOLA.jpg"></img>
      <h2 className='text-lg mt-3 text-center mx-auto text-[#ebecf3]'>Mr. Swaran Pratap Singh</h2>
      </div>
      
      </div>
      
    </div>
    </Reveal>
    
  );
}
