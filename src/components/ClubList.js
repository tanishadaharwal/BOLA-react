import React from 'react'

import {Link} from "react-router-dom"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export default function ClubList() {
  return (
    <div className='px-36 pt-36  h-screen '>
    <h1 className='text-4xl text-center text-[#f9c23c] font-bold mb-6'>Clubs under BOLA</h1>
    <hr className="w-full border-2 border-gray-300 mt-8" />
    <p className='mt-8 font-semibold text-white text-center leading-10 mb-5 '>Under the auspices of the Board of Literary Affairs, we are proud to present seven distinct clubs that encompass a wide range of literary pursuits. These clubs offer a unique platform for students to engage in various forms of expression, explore their creativity, and hone their literary skills.
</p>
<Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite={false}
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={true}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
<Link to="/alfaaz" smooth duration={500}><div className='hover:opacity-80 hover:scale-95 duration-300 p-2'><img className='h-80 w-80 border-2 border-[#f9c23c] rounded-2xl p-2' alt="club-log" src="Alfaaz.jpg"></img></div></Link>
    <div className='hover:opacity-80 hover:scale-95 duration-300 p-2'><img className='h-80 w-80 border-2 border-[#f9c23c] rounded-2xl p-2' alt="club-log"src="DebSoc.png"></img></div>
    <div className='hover:opacity-80 hover:scale-95 duration-300 p-2'><img className='h-80 w-80 border-2 border-[#f9c23c] rounded-2xl p-2' alt="club-log"src="Enigma.jpeg"></img></div>
    <div className='hover:opacity-80 hover:scale-95 duration-300 p-2'><img className='h-80 w-80 border-2 border-[#f9c23c] rounded-2xl p-2' alt="club-log"src="Filmski.jpg"></img></div>
    <div className='hover:opacity-80 hover:scale-95 duration-300 p-2'><img className='h-80 w-80 border-2 border-[#f9c23c] rounded-2xl p-2' alt="club-log" src="Alpha Productions.jpg"></img></div>
    <div className='hover:opacity-80 hover:scale-95 duration-300 p-2'><img className='h-80 w-80 border-2 border-[#f9c23c] rounded-2xl p-2' alt="club-log"src="Enarrators.PNG"></img></div>
    <div className='hover:opacity-80 hover:scale-95 duration-300 p-2'><img className='h-80 w-80 border-2 border-[#f9c23c] rounded-2xl p-2' alt="club-log"src="mun_logo.jpeg"></img></div>

</Carousel>
  </div>
  )
}
