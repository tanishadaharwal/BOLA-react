import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
      <div className="mt-20">
        <Carousel 
        autoPlay 
        infiniteLoop 
        showStatus={false} 
        showIndicators={false}
        showThumbs={false}
        interval={4000}>
            <div className="h-screen w-full mx-auto">
                <img className="" src="image1.jpg" />
               
            </div>
            <div className="h-screen w-full mx-auto">
            <img className="" src="image1.jpg" />
  
            </div>
            <div className="h-screen w-full mx-auto">
            <img className="" src="image1.jpg" />
            </div>
        </Carousel>
        </div>
    );
}
export default Banner;