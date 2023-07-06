import React from 'react';
import Banner from "../components/Carousel";
import MessageFA from '../components/MessageFA';
import MessageGSBola from '../components/MessageGSBola';
import Mission from '../components/Mission';
import ClubList from '../components/ClubList';
import EventGallery from '../components/EventGallery';
import Footer from '../components/Footer';

import AboutUs from '../components/AboutUs';

export default function Home() {
  return (
    <div className='pt-20 bg-[#111011] '>
<Banner />
<AboutUs />
<MessageFA />
<MessageGSBola />
 <Mission />
<ClubList />
<EventGallery />
 <Footer />

    </div>
  )
}



