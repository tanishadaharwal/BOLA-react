import React from 'react';
import { useState } from 'react';

import Reveal2 from './Reveal';
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';
export default function MemberCard({name, number, image, position}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='lg:h-60 lg:w-60 h-36 w-36  border-2 border-white rounded-full items-center  bg-[#c2c8c4]'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            {!isHovered && (
                <img loading="lazy" className='hover:hidden  lg:h-60 lg:w-60 h-36 w-36   object-cover rounded-full ' alt="club-log"
                    src={require(`../ClubLogos/coreTeam/${image}`)}></img>
            )}

            {isHovered && (
                <Reveal2>
                    <div className="mx-auto z-50  lg:h-60 lg:w-60 h-36 w-36 rounded-full">
                        <h1 className="text-xs lg:text-xl font-bold text-center mt-6 lg:mt-10">{name}</h1>
                        <h2 className="text-xs lg:text-xl font-bold text-center lg:mt-4">{position}</h2>
                        <h2 className="text-xs lg:text-sm font-bold text-center lg:mt-4">{number}</h2>
                        
                        <div className="flex justify-evenly mt-4">
                            
                            <FaLinkedin size={30} />
                            <FaInstagram size={30} />
                            <FaEnvelope  size={30} />
                        </div>
                    </div>
                </Reveal2>

            )}
        </div>
    )
}
