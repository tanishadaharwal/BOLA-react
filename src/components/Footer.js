import React from 'react';
import { FaEnvelope, FaInstagram, FaMapMarkedAlt, FaPhone, FaArrowRight } from 'react-icons/fa';
import Logo from "../ClubLogos/BOLA-1.png";
const Footer = () => {
  return (
    <footer className="bg-gray-400 ">
      
      <div className="container mx-auto px-36  py-8">
        <div className="flex justify-between">
        
          <div className=" ">
            <div className='flex'>
              <div>
                <img className="h-16 w-16 rounded-full"src={Logo} alt="bola logo"/>
              </div>
              <div>
              <h3 className="text-lg font-bold ml-2 my-auto">Board Of Literary Affairs</h3>
              <p className="text-lg font-bold ml-2 my-auto">IIT Ropar</p>
              </div>
            
            </div>
            <div className='mt-6 ml-5'>
            <div className='flex gap-4 p-2'>
              <FaMapMarkedAlt size={20} />
            <p className="">
              Indian Institute of Technology Ropar <br />
              Rupnagar, Punjab - 140001, India
            </p>
            </div>
            <div className='flex gap-4 p-2'>
              <FaPhone size={20} />
            <p>Phone: +91 92052 09274</p>
            </div>
           <div className='flex gap-4 p-2'>
            <FaEnvelope size={20} />
           <p>Mail us at: president.sc@iitrpr.ac.in</p>
           </div>
            <div className=''> 
              <a
                href="https://www.instagram.com/sports.iitrpr/"
                target="_blank"
                rel="noopener noreferrer"
                className=" transition duration-300 ease-in-out "
              >
                <div className='flex gap-4 p-2'>
                <FaInstagram className="text-2xl" />
                <h1>Instagram</h1>
                </div>
                
                
              </a>
            
              
              </div>
            </div>
           
          </div>
         
          

<div className="">
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <div className="flex flex-col w-40  gap-2">
  <a
    href="www.google.com"
    className="text-gray-600  pr-4 hover:text-black transition duration-300 ease-in-out"
  >
    <div className='flex gap-2  '>
      <FaArrowRight size={15} className='my-2'/>
      <h1 className=" relative my-auto hover:ml-2 transition duration-300 ease-in-out"> Official Website</h1>
    </div>
    
  </a>
  <a
    href="www.google.com"
    className="text-gray-600 pr-4 hover:text-black transition duration-300 ease-in-out"
  >
    <div className='flex gap-2 '>
      <FaArrowRight size={15} className='my-2'/>
      <h1 className="my-auto hover:ml-2 transition duration-300 ease-in-out">ISMP</h1>
    </div>
  </a>
  <a
    href="www.google.com"
    className="text-gray-600 pr-4 hover:text-black transition duration-300 ease-in-out"
  >
     <div className='flex gap-2 '>
      <FaArrowRight size={15} className='my-2'/>
      <h1 className="my-auto hover:ml-2 transition duration-300 ease-in-out">UG Academics</h1>
    </div>
  </a>
  <a
    href="www.google.com"
    className="text-gray-600 pr-4 hover:text-black transition duration-300 ease-in-out"
  >
     <div className='flex gap-2 '>
      <FaArrowRight size={15} className='my-2'/>
      <h1 className="my-auto hover:ml-2 transition duration-300 ease-in-out">PG Academics</h1>
    </div>
  </a>
  <a
    href="www.google.com"
    className="text-gray-600 pr-4 hover:text-black transition duration-300 ease-in-out"
  >
     <div className='flex gap-2 '>
      <FaArrowRight size={15} className='my-2'/>
      <h1 className="my-auto hover:ml-2 transition duration-300 ease-in-out">Moodle</h1>
    </div>
  </a>
  <a
    href="www.google.com"
    className="text-gray-600 hover:text-black transition duration-300 ease-in-out"
  >
     <div className='flex gap-2'>
      <FaArrowRight size={15} className='my-2'/>
      <h1 className="my-auto hover:ml-2 transition duration-300 ease-in-out">IRIAA</h1>
    </div>
  </a>
</div>
          </div>
          <div className="">
            <h3 className="text-lg font-bold mb-2">Social Media Handles</h3>
            <div className="flex flex-col w-52 gap-2">
  <a
    href="www.google.com"
    className="text-gray-600  pr-4 hover:text-black transition duration-300 ease-in-out"
  >
    <div className='flex gap-2  '>
      <FaArrowRight size={15} className='my-2'/>
      <h1 className=" relative my-auto hover:ml-2 transition duration-300 ease-in-out"> Alfaaz</h1>
    </div>
    
  </a>
  <a
    href="www.google.com"
    className="text-gray-600 pr-4 hover:text-black transition duration-300 ease-in-out"
  >
    <div className='flex gap-2 '>
      <FaArrowRight size={15} className='my-2'/>
      <h1 className="my-auto hover:ml-2 transition duration-300 ease-in-out">Alpha Productions</h1>
    </div>
  </a>
  <a
    href="www.google.com"
    className="text-gray-600 pr-4 hover:text-black transition duration-300 ease-in-out"
  >
     <div className='flex gap-2 '>
      <FaArrowRight size={15} className='my-2'/>
      <h1 className="my-auto hover:ml-2 transition duration-300 ease-in-out">DebSoc</h1>
    </div>
  </a>
  <a
    href="www.google.com"
    className="text-gray-600 pr-4 hover:text-black transition duration-300 ease-in-out"
  >
     <div className='flex gap-2 '>
      <FaArrowRight size={15} className='my-2'/>
      <h1 className="my-auto hover:ml-2 transition duration-300 ease-in-out">Enarrators</h1>
    </div>
  </a>
  <a
    href="www.google.com"
    className="text-gray-600 pr-4 hover:text-black transition duration-300 ease-in-out"
  >
     <div className='flex gap-2 '>
      <FaArrowRight size={15} className='my-2'/>
      <h1 className="my-auto hover:ml-2 transition duration-300 ease-in-out">Enigma</h1>
    </div>
  </a>
  <a
    href="www.google.com"
    className="text-gray-600 hover:text-black transition duration-300 ease-in-out"
  >
     <div className='flex gap-2'>
      <FaArrowRight size={15} className='my-2'/>
      <h1 className="my-auto hover:ml-2 transition duration-300 ease-in-out">Filmski</h1>
    </div>

  </a>
  <a
    href="www.google.com"
    className="text-gray-600 hover:text-black transition duration-300 ease-in-out"
  >
     <div className='flex gap-2'>
      <FaArrowRight size={15} className='my-2'/>
      <h1 className="my-auto hover:ml-2 transition duration-300 ease-in-out">MUN</h1>
    </div>
    
  </a>
</div>
          </div>

          

      
        </div>
      </div>
      <div className='bg-[#232525] py-8 px-24 h-20' >
        <div className='text-gray-500 flex justify-between'>
          <h1>Copyrights © 2022-23 Student Affairs IIT Ropar</h1>
          <h1>Website Developed by<span className='text-[#40d695]'> Tanisha Daharwal</span></h1>
          
        </div>
      </div>
    </footer>
    
  );
};

export default Footer;
