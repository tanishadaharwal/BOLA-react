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
    <div name="/" className="flex justify-between items-center w-full h-20 px-4 text-white  top-0 bg-[#2B2730] bg-opacity-75 fixed">
      <div className="flex gap-5">
        <div>
          <img className="h-20 w-20 my-1 rounded-full" src="BOLA-1.png" alt="Logo" />
        </div>

        <div className="my-auto">
          <h3 className="font-semibold text-xl">Board of Literary Affairs</h3>
          <h2 className="font-medium">IIT Ropar</h2>
        </div>
      </div>

      <div className="hidden md:flex">
        <div className="flex gap-2 px-4 cursor-pointer  capitalize font-medium hover:text-[#f9c23c] hover:font-semibold duration-200" >
    
         <FaHome className="" size={20}/>
         <div>
         <Link to="/" smooth duration={500}>Home</Link>
         
         </div>
        
        </div>

        <div className="flex gap-2 px-4 cursor-pointer capitalize font-medium hover:text-[#f9c23c]  duration-200" 
         onMouseEnter={handleClubHover}
         onMouseLeave={handleClubLeave}>
    
         <FaLayerGroup className="" size={20}/>
         
         <Link to="" smooth duration={500}>Clubs</Link>
         {showClubs && (
            <div className="absolute w-36 border-t-4  hover:text-[#f9c23c] items-center bg-zinc-600 rounded-md shadow-md mt-6 -ml-4 p-2">
              <ul>
                <li className="py-2 cursor-pointer hover:scale-105 hover:text-white hover:font-semibold hover:rounded-md"><Link to="/clubs/Alfaaz">Alfaaz</Link></li>
                <li className="py-2 cursor-pointer hover:scale-105 hover:text-white hover:font-semibold hover:rounded-md"><Link to="/clubs/Alpha">Alpha Productions</Link></li>
                <li className="py-2 cursor-pointer hover:scale-105 hover:text-white hover:font-semibold hover:rounded-md"><Link to="/clubs/DebSoc">Debsoc</Link></li>
                <li className="py-2 cursor-pointer hover:scale-105 hover:text-white hover:font-semibold hover:rounded-md"><Link to="/clubs/Ennarators">Ennarators</Link></li>
                <li className="py-2 cursor-pointer hover:scale-105 hover:text-white hover:font-semibold hover:rounded-md"><Link to="/clubs/Enigma">Enigma</Link></li>
                <li className="py-2 cursor-pointer hover:scale-105 hover:text-white hover:font-semibold hover:rounded-md"><Link to="/clubs/Filmski">Filmski</Link></li>
                <li className="py-2 cursor-pointer hover:scale-105 hover:text-white hover:font-semibold hover:rounded-md"><Link to="/clubs/MUN">MUN</Link></li>
                {/* Add more clubs as needed */}
              </ul>
            </div>
          )}
        </div>


        <div className="flex gap-2 px-4 cursor-pointer capitalize font-medium hover:text-[#f9c23c]  duration-200" 
        onMouseEnter={handleLinkHover}
        onMouseLeave={handleLinkLeave}>
    
         <FaLink className="" size={20}/>
         <Link to="" smooth duration={500}>Important Links</Link>
         {showLinks && (
            <div className="absolute w-40 border-t-4  items-center bg-zinc-600 rounded-md shadow-md mt-6 ml-4 p-2">
              <ul>
                <Link to="/event-gallery"><li className="py-2 cursor-pointer hover:scale-105 hover:text-white hover:font-semibold  hover:rounded-md">BOLA Gallery</li></Link>
                <Link to="https://www.iitrpr.ac.in/"><li className="py-2 cursor-pointer hover:scale-105 hover:text-white hover:font-semibold  hover:rounded-md">IIT Ropar Website</li>
                </Link>
                {/* Add more clubs as needed */}
              </ul>
            </div>
          )}
        </div>

        <div className="flex gap-2 px-4 cursor-pointer capitalize font-medium hover:text-[#f9c23c] duration-200" >
    
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
