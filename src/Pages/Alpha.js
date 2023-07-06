import React from 'react';
import AlphaLogo from '../ClubLogos/Alpha Productions.jpg';
import Carousel from 'react-multi-carousel';
import Reveal from '../components/Reveal';
import { useState } from "react";
import { motion } from 'framer-motion';
import MemberCard from '../components/MemberCard';
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';
export default function Alpha() {
  const [selectedYear, setSelectedYear] = useState('2023-2024');

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };
  return (
    <div className='pt-20 bg-[#111011] '>
      <div className='flex justify-center space-x-4'>
        <div className='text-center text-[#ebecf3] p-1  text-5xl font-bold'>
          Alpha Productions
        </div>
        <div><img loading="lazy" className='h-16 w-16  rounded-full p-2' alt="club-log" src={AlphaLogo}></img></div>
      </div>

      <div className='lg:flex space-x-5 '>
        <div className='lg:flex lg:flex-col  lg:w-full space-y-4'>
          <Reveal>
            <div className='lg:ml-20 mx-5'>
              <h1 className='text-4xl mt-10 text-[#ebecf3] font-bold mb-6'>About✨</h1>
              <p className='font-medium text-[#ebecf3] leading-10'>Alpha Productions, Film Making and Video Editing Club of  IIT Ropar   is an exciting and dynamic community of  students passionate about the art of filmmaking and the craft of editing. With a strong emphasis on storytelling and technical excellence, this club provides a platform for aspiring filmmakers, editors, and enthusiasts to collaborate, learn, and bring their cinematic visions to life. From script to screen, this club celebrates the power of visual storytelling and the artistry of editing in the world of film production.
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className='lg:ml-20 mx-5'>
                <h1 className='text-4xl mt-10 text-[#ebecf3] font-bold mb-6'>Vision✨</h1>
                <p className='font-medium leading-10 text-[#ebecf3]'>Our vision is to provide a platform for aspiring filmmakers and editors to explore their artistic talents, develop technical skills, and collaborate on exciting film projects.
                </p>

              </div>
            </Reveal>

          </div>
        </div>


        {/* <div className='hover:opacity-80 hover:scale-95 duration-300 my-auto'><img loading="lazy"  className='lg:h-80 lg:w-80 h-36 w-36 border-2 lg:mx-0 mx-auto border-white rounded-2xl p-2' alt="club-log" src={AlfaazLogo}></img></div> */}
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className="lg:pl-24  mt-10  lg:w-[60%]"
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
              items: 2,
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

          <div className=' '><img loading="lazy" className='lg:h-96 lg:w-96 h-36 w-36 border-2 border-white rounded-2xl p-2' alt="club-log" src={AlphaLogo}></img></div>
          <div className=' '><img loading="lazy" className='lg:h-96 lg:w-96 h-36 w-36 border-2 border-white rounded-2xl p-2' alt="club-log" src={AlphaLogo}></img></div>
          <div className=' '><img loading="lazy" className='lg:h-96 lg:w-96 h-36 w-36 border-2 border-white rounded-2xl p-2' alt="club-log" src={AlphaLogo}></img></div>
          <div className=' '><img loading="lazy" className='lg:h-96 lg:w-96 h-36 w-36 border-2 border-white rounded-2xl p-2' alt="club-log" src={AlphaLogo}></img></div>
          <div className=''><img loading="lazy" className='lg:h-96 lg:w-96 h-36 w-36 border-2 border-white rounded-2xl p-2' alt="club-log" src={AlphaLogo}></img></div>

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
              <div className='flex gap-20 justify-center'>
              <MemberCard name="Asad Alam" number="56453413345" position="Secretary" image="Asad.jpg"/>
             
              <MemberCard name="Anshul Mittal" number="56453413345" position="Representative" image="Anshul.jpg"/>
             

              </div>
              <div>
                <div className='flex justify-center gap-20'>

                <MemberCard name="Keshav Bansal" number="56453413345" position="Co-ordinator" image="Keshav.jpg"/>
                <MemberCard name="Manavditya" number="56453413345" position="Co-ordinator" image="Manavaditya.jpg"/>
                <MemberCard name="Gautham Raju" number="56453413345" position="Co-ordinator" image="gautham.jpg"/>
                <MemberCard name="Krish Soliya" number="56453413345" position="Co-ordinator" image="Krish.jpg"/>
             







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
            <div className='mt-10 flex space-y-5 flex-col'>
              <div className='flex gap-20 justify-center'>
              <MemberCard name="Anany Dhamija" number="56453413345" position="Representative" image="Anany.jpg"/>
            
             

              </div>
              <div>
                <div className='flex justify-center gap-20'>

                <MemberCard name="Asad Alam" number="56453413345" position="Co-ordinator" image="Asad.jpg"/>
             
                <MemberCard name="Shubham Choudhary" number="56453413345" position="Co-ordinator" image="Shubham_.jpg"/>
             
                <MemberCard name="Ashish Rana" number="56453413345" position="Co-ordinator" image="Ashish.jpg"/>
             









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
              Inter IIT Cult-cum- Lit- Meet


            </h1>
            <p className='leading-10 text-[#ebecf3]'>Alpha Production Secure  6th position In 51 hour Filmmaking competition among all  23 IITs</p>
          </div>
          <div>
            <h1 className='text-2xl mt-5 font-bold mb-3 text-[#0cf790]'>

              IIT Delhi Rendezvous 2018
            </h1>
            <p className='leading-10 text-[#ebecf3]'>We stood 3rd in the cultural fest of  IIT Delhi Rendezvous  in 2018</p>
          </div>

        </div>
      </div>
      <footer>
      <div className="footer-container p-2 bg-[#40d695]">
      <h1 className='text-xl font-bold text-center my-auto'>Contact Us</h1>
        <div className="social-icons mx-auto flex gap-10 justify-center">
         
          <a href="https://www.instagram.com/your_instagram_page" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} className='text-black '/>
          </a>
          <a href="https://www.linkedin.com/your_linkedin_page" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} className='text-black '/>
          </a>
          <a href="https://www.linkedin.com/your_linkedin_page" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={20} className='text-black '/>
          </a>
        </div>
      </div>
      
    </footer>
    </div>
  )
}



