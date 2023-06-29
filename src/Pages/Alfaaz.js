import React from 'react'
import AlfaazLogo from '../ClubLogos/Alfaaz.jpg';

import Reveal from '../components/Reveal';
import {useState} from "react";
import { motion } from 'framer-motion';
export default function Alfaaz() {
  const [selectedYear, setSelectedYear] = useState('2023-2024');

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };
  return (
    <div className='pt-20 bg-[#111011] w-full'>
      
    <div className='text-center text-[#ebecf3] p-4 mx-20 text-5xl font-bold'>
      Alfaaz
    </div>
    <div className='flex flex-row space-x-5'>
    <div className='flex flex-col w-2/3 space-y-4'>
      <Reveal>
      <div className='mx-36'>
<h1 className='text-4xl mt-10 text-[#ebecf3] font-bold mb-6'>About✨</h1>
<p className='font-medium text-[#ebecf3] leading-10'>Alfaaz, the Poetry Club of IIT Ropar is a family of like-minded people when it comes to showing our love for reading and creative writing, and yet, who are also able to maintain their individualities apart by expressing the same thing through a ton of interesting perspectives. Got a penchant or even a slight inclination towards creative expression? Then Alfaaz is the club for you! We wholeheartedly welcome you to become a part of our family to learn and grow together in the art of words, transcending the boundaries of language and form.
</p>
</div>
      </Reveal>

<div>
  <Reveal>
  <div className='mx-36'>
<h1 className='text-4xl mt-10 text-[#ebecf3] font-bold mb-6'>Vision✨</h1>
<p className='font-medium leading-10 text-[#ebecf3]'>Celebrating literature and creativity, we are a community that shares common aspirations when it comes to creative writing, and encourages various forms of expression!
</p>

</div>
  </Reveal>

</div>
</div>


<div className='hover:opacity-80 hover:scale-95 duration-300 my-auto'><img className='lg:h-80 lg:w-80 h-52 w-52 border-2 border-[#0cf790] rounded-2xl p-2' alt="club-log" src={AlfaazLogo}></img></div>
    </div>
    <hr className=" border-2 mx-36 border-gray-300 mt-6" />

   



    <div className='mx-36 '>
      <div>
        <h1 className='text-5xl mt-10 text-center text-[#ebecf3] font-bold mb-6'>Core Team</h1>
      </div>

      <div className='flex justify-center gap-1 items-center'>
        <motion.button
          className={`bg-white text-black px-4 text-2xl font-bold rounded-s-md ${
            selectedYear === '2023-2024' ? 'bg-[#0cf790]' : ''
          }`}
          onClick={() => handleYearChange('2023-2024')} 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          2023-2024
        </motion.button>
        <motion.button
          className={`bg-white text-black px-4 text-2xl font-bold rounded-e-md ${
            selectedYear === '2022-2023' ? 'bg-[#0cf790]' : ''
          }`}
          onClick={() => handleYearChange('2022-2023')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          2022-2023
        </motion.button>
      </div>

      {/* Render the pictures based on the selected year */}
      {selectedYear === '2023-2024' && (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
          <div className='mt-10 flex space-y-5 flex-col'>
            <div className='flex space-x-10 justify-center'>
                <div>
                <img className='lg:h-80 lg:w-80 h-52 w-52 border-2 border-[#0cf790] rounded-2xl p-2' alt="club-log" src={AlfaazLogo}></img>
                </div>
                <div>
                <img className='lg:h-80 lg:w-80 h-52 w-52 border-2 border-[#0cf790] rounded-2xl p-2' alt="club-log" src={AlfaazLogo}></img>
                </div>
            

          </div>
          <div>
          <div className='flex space-x-10 justify-center'>
                <div>
                <img className='lg:h-80 lg:w-80 h-52 w-52 border-2 object-cover border-[#0cf790] rounded-2xl p-2' alt="club-log" src="https://drive.google.com/uc?export=view&id=1SSWXz_C2FarlFUyRiSfVE1QRGPjXR3I0"></img>
                </div>
                <div>
                <img className='lg:h-80 lg:w-80 h-52 w-52 border-2 object-cover border-[#0cf790] rounded-2xl p-2' alt="club-log" src="https://drive.google.com/uc?export=view&id=16DIApbMZrQVczDaUHHZWH-9v8u3kApwN"></img>
                </div>
                <div>
                <img className='lg:h-80 lg:w-80 h-52 w-52 border-2 border-[#0cf790] rounded-2xl p-2' alt="club-log" src={AlfaazLogo}></img>
                </div>
                <div>
                <img className='lg:h-80 lg:w-80 h-52 w-52 border-2 border-[#0cf790] rounded-2xl p-2' alt="club-log" src={AlfaazLogo}></img>
                </div>
            

          </div>
          </div>
          
        </div>
       </motion.div>
      )}

      {selectedYear === '2022-2023' && (
         <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.5 }}
       >
        <div>
          <div className='mt-10 flex space-y-5 flex-col'>
            <div className='flex space-x-10 justify-center'>
                <div>
                <img className='lg:h-80 lg:w-80 h-52 w-52 border-2 border-[#0cf790] rounded-2xl p-2' alt="club-log" src={AlfaazLogo}></img>
                </div>
                <div>
                <img className='lg:h-80 lg:w-80 h-52 w-52 border-2 border-[#0cf790] rounded-2xl p-2' alt="club-log" src={AlfaazLogo}></img>
                </div>
            

          </div>
          <div>
          <div className='flex space-x-10 justify-center'>
                <div>
                <img className='lg:h-80 lg:w-80 h-52 w-52 border-2 border-[#0cf790] rounded-2xl p-2' alt="club-log" src={AlfaazLogo}></img>
                </div>
                <div>
                <img className='lg:h-80 lg:w-80 h-52 w-52 border-2 border-[#0cf790] rounded-2xl p-2' alt="club-log" src={AlfaazLogo}></img>
                </div>
                <div>
                <img className='lg:h-80 lg:w-80 h-52 w-52 border-2 border-[#0cf790] rounded-2xl p-2' alt="club-log" src={AlfaazLogo}></img>
                </div>
                <div>
                <img className='lg:h-80 lg:w-80 h-52 w-52 border-2 border-[#0cf790] rounded-2xl p-2' alt="club-log" src={AlfaazLogo}></img>
                </div>
                <div>
                <img className='lg:h-80 lg:w-80 h-52 w-52 border-2 border-[#0cf790] rounded-2xl p-2' alt="club-log" src={AlfaazLogo}></img>
                </div>
            

          </div>
          </div>
          
        </div>
        </div>
        </motion.div>
      )}
    </div>

<hr className=" border-2 mx-36 border-gray-300 mt-8" />
<div className='mx-36'>
  <h1 className='text-4xl mt-10 font-bold mb-6 text-[#ebecf3]'>Achievements🏆</h1>

  <p>Heading</p>
  <p>Context</p>
</div>

    </div>
  )
}