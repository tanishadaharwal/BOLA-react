import React from 'react';

export default function MessageFA() {
  return (
    <div className='mx-36 mt-32 '>
      <h1 className='text-4xl font-bold mb-6'>Message from Faculty Advisor</h1>
      <h2 className='text-xl'>Mrs. Aparna Nandha</h2>
      <hr className="w-full border-2 border-gray-300 mt-8" />
      <div className='flex flex-row justify-between  space-x-10'>
      
        <img className=" rounded-2xl  w-56 hover:scale-110 duration-300 mt-8" alt="FA"src="FA.jpg"></img>
    
        <div className='mt-8 font-semibold text-left leading-10'>
        The Board of Literary Affairs (BOLA), IIT Ropar, provides a platform for our students to hone their literary skills and prepares the future generation to be confident communicators. It has been my privilege to work with our very talented and enthusiastic students in the capacity of FA (BOLA) since 2021. As a team, we have striven to cultivate in our students excellent spoken and written skills. We aim to build a culture of healthy debates, conversations on diverse topics and groom our students into holistic and socially responsible individuals. Our objective is to capacitate our students to be ethical, value-driven, and efficient communicators through an array of exercises and activities. We believe that with this exposure and training, our students will acquire the necessary skills to live a good life and become the leaders of a better tomorrow.

      </div>
      </div>
      
    </div>
  );
}
