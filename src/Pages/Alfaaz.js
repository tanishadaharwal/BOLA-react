import React from 'react'
import AlfaazLogo from '../ClubLogos/Alfaaz.jpg';
import Carousel from 'react-multi-carousel';
import Reveal from '../components/Reveal';
import {useState} from "react";
import { motion } from 'framer-motion';
export default function Alfaaz() {
  const [selectedYear, setSelectedYear] = useState('2023-2024');

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };
  return (
    <div className='pt-20 bg-[#111011] '>
      <div className='flex justify-center space-x-4'>
      <div className='text-center text-[#ebecf3] p-1  text-5xl font-bold'>
      Alfaaz
    </div>
    <div><img loading="lazy"  className='h-16 w-16  rounded-full p-2' alt="club-log" src={AlfaazLogo}></img></div>
      </div>
    
    <div className='lg:flex space-x-5 '>
    <div className='lg:flex lg:flex-col  lg:w-full space-y-4'>
      <Reveal>
      <div className='lg:ml-20 mx-5'>
<h1 className='text-4xl mt-10 text-[#ebecf3] font-bold mb-6'>About✨</h1>
<p className='font-medium text-[#ebecf3] leading-10'>Alfaaz, the Poetry Club of IIT Ropar is a family of like-minded people when it comes to showing our love for reading and creative writing, and yet, who are also able to maintain their individualities apart by expressing the same thing through a ton of interesting perspectives. Got a penchant or even a slight inclination towards creative expression? Then Alfaaz is the club for you! We wholeheartedly welcome you to become a part of our family to learn and grow together in the art of words, transcending the boundaries of language and form.
</p>
</div>
      </Reveal>

<div>
  <Reveal>
  <div className='lg:ml-20 mx-5'>
<h1 className='text-4xl mt-10 text-[#ebecf3] font-bold mb-6'>Vision✨</h1>
<p className='font-medium leading-10 text-[#ebecf3]'>Celebrating literature and creativity, we are a community that shares common aspirations when it comes to creative writing, and encourages various forms of expression!
</p>

</div>
  </Reveal>

</div>
</div>


{/* <div className='hover:opacity-80 hover:scale-95 duration-300 my-auto'><img loading="lazy"  className='lg:h-80 lg:w-80 h-36 w-36 border-2 lg:mx-0 mx-auto border-[#0cf790] rounded-2xl p-2' alt="club-log" src={AlfaazLogo}></img></div> */}
<Carousel
  additionalTransfrom={0}
  arrows
  autoPlay
  autoPlaySpeed={3000}
  centerMode={false}
  className="lg:pl-24 pl-5 mt-10 lg:w-[60%] w-full"
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 3,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 1,
      partialVisibilityGutter: 30
    }
  }}
  rewind={true}
  rewindWithAnimation={true}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>

<div className='hover:opacity-80 p-3 hover:scale-95 duration-300 '><img loading="lazy"  className='lg:h-96 lg:w-96 h-36 w-36 border-2 border-[#0cf790] rounded-2xl p-2' alt="club-log" src={AlfaazLogo}></img></div>
    <div className='hover:opacity-80 hover:scale-95 duration-300 '><img loading="lazy"  className='lg:h-96 lg:w-96 h-36 w-36 border-2 border-[#0cf790] rounded-2xl p-2' alt="club-log"src={AlfaazLogo}></img></div>
    <div className='hover:opacity-80 hover:scale-95 duration-300 '><img loading="lazy"  className='lg:h-96 lg:w-96 h-36 w-36 border-2 border-[#0cf790] rounded-2xl p-2' alt="club-log"src={AlfaazLogo}></img></div>
    <div className='hover:opacity-80 hover:scale-95 duration-300 '><img loading="lazy"  className='lg:h-96 lg:w-96 h-36 w-36 border-2 border-[#0cf790] rounded-2xl p-2' alt="club-log"src={AlfaazLogo}></img></div>
    <div className='hover:opacity-80 hover:scale-95 duration-300 '><img loading="lazy"  className='lg:h-96 lg:w-96 h-36 w-36 border-2 border-[#0cf790] rounded-2xl p-2' alt="club-log"src={AlfaazLogo}></img></div>
    <div className='hover:opacity-80 hover:scale-95 duration-300 '><img loading="lazy"  className='lg:h-96 lg:w-96 h-36 w-36 border-2 border-[#0cf790] rounded-2xl p-2' alt="club-log"src={AlfaazLogo}></img></div>
    <div className='hover:opacity-80 hover:scale-95 duration-300 '><img loading="lazy"  className='lg:h-96 lg:w-96 h-36 w-36 border-2 border-[#0cf790] rounded-2xl p-2' alt="club-log"src={AlfaazLogo}></img></div>
   
</Carousel></div>
    <hr className=" border-2  mx-5 border-gray-300 mt-10" />

   



    <div className='ml:mx-36 mx-5 '>
      <div>
        <h1 className='text-5xl mt-10 text-center text-[#ebecf3] font-bold mb-6'>Core Team</h1>
      </div>

      <div className='flex justify-center gap-1 '>
      <button
          className={` text-black px-4 text-2xl font-bold hover:scale-105 rounded-s-md ${selectedYear === '2023-2024' ? 'bg-gray-400' : 'bg-white'}`}
          onClick={() => handleYearChange('2023-2024')}
        >
          2023-2024
        </button>
        <button
          className={` text-black px-4 text-2xl font-bold hover:scale-105 rounded-e-md ${selectedYear === '2022-2023' ? 'bg-gray-400' : 'bg-white'}`}
          onClick={() => handleYearChange('2022-2023')}
        >
          2022-2023
        </button>
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
                <img loading="lazy" className='lg:h-80 lg:w-80 h-36 w-36 border-2 border-[#0cf790] object-cover rounded-2xl p-2' alt="club-log" 
                src={require('../ClubLogos/coreTeam/Sakshi Bhagdikar .jpg')}></img>
                </div>
                <div>
                <img loading="lazy"  className='lg:h-80 lg:w-80 h-36 w-36 border-2 border-[#0cf790] object-cover rounded-2xl p-2' alt="club-log" 
                src={require('../ClubLogos/coreTeam/Prerna Singh.jpg')}></img>
                </div>
            

          </div>
          <div>
          <div className='grid lg:grid-cols-4 lg:ml-0 ml-3 grid-cols-2 gap-6 '>
                <div>
                <img loading="lazy"  className='lg:h-80 lg:w-80 h-36 w-36 border-2 border-[#0cf790] object-cover rounded-2xl p-2' alt="club-log" 
                src={require('../ClubLogos/coreTeam/Abhishek Kumar .jpg')}></img>
                </div>

                <div>
                <img loading="lazy"  className='lg:h-80 lg:w-80 h-36 w-36 border-2 object-center border-[#0cf790] rounded-2xl p-2' alt="club-log" 
                src={require('../ClubLogos/coreTeam/Amitoj.jpg')}></img>
                </div>

                <div className="">
                <img loading="lazy"  className='lg:h-80 lg:w-80 h-36 w-36 border-2 object-cover border-[#0cf790] rounded-2xl p-2' alt="club-log" 
                src={require('../ClubLogos/coreTeam/Sunny.jpg')}></img>
                </div>

                <div>
                <img loading="lazy"  className='lg:h-80 lg:w-80 h-36 w-36  border-2   border-[#0cf790] rounded-2xl p-2' alt="club-log" 
                src={require('../ClubLogos/coreTeam/Hitesh.jpg')}></img>
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
                <img loading="lazy"  className='lg:h-80 lg:w-80 h-36 w-36 border-2 object-cover border-[#0cf790] rounded-2xl p-2' alt="club-log" 
                src={require('../ClubLogos/coreTeam/Aneeket.jpg')}></img>
                </div>
                <div>
                <img loading="lazy"  className='lg:h-80 lg:w-80 h-36 w-36 border-2 object-cover border-[#0cf790] rounded-2xl p-2' alt="club-log" 
                src={require('../ClubLogos/coreTeam/Jashandeep Singh .jpg')}></img>
                </div>
                
            

          </div>
          <div>
          <div className='grid lg:grid-cols-4  ml-3 grid-cols-2 lg:ml-[20%] gap-6'>
          <div>
          
                <img loading="lazy"  className='lg:h-80 lg:w-80 h-36 w-36 border-2 object-cover border-[#0cf790] rounded-2xl p-2' alt="club-log" 
                src={require('../ClubLogos/coreTeam/Sakshi Bhagdikar .jpg')}></img>
                </div>
                <div>
                <img loading="lazy"  className='lg:h-80 lg:w-80 h-36 w-36 border-2 object-cover border-[#0cf790] rounded-2xl p-2' alt="club-log" 
                src={require('../ClubLogos/coreTeam/Pratham.jpg')}></img>
                </div>
                <div>
                <img loading="lazy"  className='lg:h-80 lg:w-80 h-36 w-36 border-2 object-cover border-[#0cf790] rounded-2xl p-2' alt="club-log" 
                src={require('../ClubLogos/coreTeam/Swaran.jpg')}></img>
                </div>
                
            

          </div>
          </div>
          
        </div>
        </div>
        </motion.div>
      )}
    </div>

<hr className=" border-2 mx-5 border-gray-300 mt-8" />
<div className='lg:mx-36 mx-5'>
  <h1 className='text-4xl mt-10 font-bold mb-6 text-[#ebecf3]'>Achievements🏆</h1>
      <div className='gird gird-cols-1 pb-10 '>
        <div>
          <h1 className='text-2xl mt-5 font-bold mb-3 text-[#0cf790]'>
          Aaveg, IIT Bhubaneswar

          </h1>
          <p className='leading-10 text-[#ebecf3]'>5 participants cleared the preliminary online round of Aaveg, the poetry competition in IIT Bhubaneshwar’s literary fest, LitSpree. Mr. Aneeket Mangal bagged the first prize in the finals.
</p>
        </div>
        <div>
          <h1 className='text-2xl mt-5 font-bold mb-3 text-[#0cf790]'>
          Inter IIT Cult-cum- Lit- Meet


          </h1>
          <p className='leading-10 text-[#ebecf3]'>Alfaaz was represented in the Slam Poetry and creative story writing event. Tiya Jain and Sakshi Bhagdikar bagged the fourth position among participants from 23 IITs in the Hindi creative writing event.
</p>
        </div>
        <div>
          <h1 className='text-2xl mt-5 font-bold mb-3 text-[#0cf790]'>
          Hindi Cell Poetry Event:

          </h1>
          <p className='leading-10 text-[#ebecf3]'>Alfaaz members, Ganesh Gurjar, Amit Kumar, and Shalini bagged the top three positions in the Poetry Recitation Competition organized by Hindi Cell, IIT Ropar.
</p>
        </div>
        <div>
          <h1 className='text-2xl mt-5 font-bold mb-3 text-[#0cf790]'>
          Avittri : Kavi Sammelan by the greatest contemporary poets

          </h1>
          <p className='leading-10 text-[#ebecf3]'>Graced by the finest poets of modern India, such as Aman Akshar, Azhar Iqbal, Khushbir Singh Shaad, Shashikant Yadav, Abhay Nirbheek and Aayushi Rakhecha, the event was a huge success, with the participation and appreciation of an audience of over 1000, comprising of almost all members of the IIT Ropar fraternity.

</p>
        </div>
      </div>
</div>

    </div>
  )
}



