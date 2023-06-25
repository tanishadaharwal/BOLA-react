import { useState } from "react";
import React from "react";
import {FaBars, FaHome, FaIdCard, FaLayerGroup, FaLink, FaTimes } from "react-icons/fa";
import { Link as LinkRoll} from "react-scroll";
import {Link} from "react-router-dom"

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [showClubs, setShowClubs] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const handleClubHover = () => {
    setShowClubs(true);
  };

  const handleClubLeave = () => {
    setShowClubs(false);
  };

  const handleLinkHover = () => {
    setShowLinks(true);
  }

  const handleLinkLeave = () => {
    setShowLinks(false);
  }
  return (
    <div name="/" className="flex justify-between items-center w-full h-20 px-4 text-black z-20 top-0 bg-white fixed">
      <div className="flex gap-5">
        <div>
          <img className="h-20 w-20 my-1" src="BOLA-1.png" alt="Logo" />
        </div>

        <div className="my-auto">
          <h3 className="font-semibold text-xl">Board of Literary Affairs</h3>
          <h2 className="font-medium">IIT Ropar</h2>
        </div>
      </div>

      <div className="hidden md:flex">
        <div className="flex gap-2 px-4 cursor-pointer  capitalize font-medium hover:scale-105 hover:text-violet-600 hover:font-semibold duration-200" >
    
         <FaHome className="" size={20}/>
         <div>
         <Link to="/" smooth duration={500}>Home</Link>
         
         </div>
        
        </div>

        <div className="flex gap-2 px-4 cursor-pointer capitalize font-medium hover:text-violet-600 hover:scale-105 duration-200" 
         onMouseEnter={handleClubHover}
         onMouseLeave={handleClubLeave}>
    
         <FaLayerGroup className="" size={20}/>
         
         <Link to="" smooth duration={500}>Clubs</Link>
         {showClubs && (
            <div className="absolute w-36 border-t-4 border-violet-600 items-center bg-white rounded-md shadow-md mt-6 -ml-4 p-2">
              <ul>
                <li className="py-2 cursor-pointer hover:scale-105 hover:text-black hover:font-semibold hover:bg-gray-200 hover:rounded-md"><Link to="/alfaaz">Alfaaz</Link></li>
                <li className="py-2 cursor-pointer hover:scale-105 hover:text-black hover:font-semibold hover:bg-gray-200 hover:rounded-md">Alpha Productions</li>
                <li className="py-2 cursor-pointer hover:scale-105 hover:text-black hover:font-semibold hover:bg-gray-200 hover:rounded-md">Debsoc</li>
                <li className="py-2 cursor-pointer hover:scale-105 hover:text-black hover:font-semibold hover:bg-gray-200 hover:rounded-md">Ennarators</li>
                <li className="py-2 cursor-pointer hover:scale-105 hover:text-black hover:font-semibold hover:bg-gray-200 hover:rounded-md">Enigma</li>
                <li className="py-2 cursor-pointer hover:scale-105 hover:text-black hover:font-semibold hover:bg-gray-200 hover:rounded-md">Filmski</li>
                <li className="py-2 cursor-pointer hover:scale-105 hover:text-black hover:font-semibold hover:bg-gray-200 hover:rounded-md">MUN</li>
                {/* Add more clubs as needed */}
              </ul>
            </div>
          )}
        </div>


        <div className="flex gap-2 px-4 cursor-pointer capitalize font-medium hover:text-violet-600 hover:scale-105 duration-200" 
        onMouseEnter={handleLinkHover}
        onMouseLeave={handleLinkLeave}>
    
         <FaLink className="" size={20}/>
         <Link to="" smooth duration={500}>Important Links</Link>
         {showLinks && (
            <div className="absolute w-40 border-t-4 border-violet-600 items-center bg-white rounded-md shadow-md mt-6 ml-4 p-2">
              <ul>
                <li className="py-2 cursor-pointer hover:scale-105 hover:text-black hover:font-semibold hover:bg-gray-200 hover:rounded-md">BOLA Gallery</li>
                <li className="py-2 cursor-pointer hover:scale-105 hover:text-black hover:font-semibold hover:bg-gray-200 hover:rounded-md">IIT Ropar Website</li>
                
                {/* Add more clubs as needed */}
              </ul>
            </div>
          )}
        </div>

        <div className="flex gap-2 px-4 cursor-pointer capitalize font-medium hover:text-violet-600 hover:scale-105 duration-200" >
    
         <FaIdCard className="" size={20}/>
         <LinkRoll to="aboutUs" smooth duration={500}>About</LinkRoll>
       
        </div>
       
        </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
          <div className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <Link onClick={() => setNav(!nav)} to="home" smooth duration={500}>
              Home
            </Link>
          </div>
          <div className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <Link onClick={() => setNav(!nav)} to="about" smooth duration={500}>
              About
            </Link>
          </div>
          <div className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <Link onClick={() => setNav(!nav)} to="projects" smooth duration={500}>
              Projects
            </Link>
          </div>
          <div className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <Link onClick={() => setNav(!nav)} to="experience" smooth duration={500}>
              Experience
            </Link>
          </div>
          <div className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <Link onClick={() => setNav(!nav)} to="contact" smooth duration={500}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
