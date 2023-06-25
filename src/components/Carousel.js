import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
      <div className="mt-20">
        <Carousel 
        autoPlay 
        infiniteLoop = {true}
        showStatus={false} 
        showIndicators={true}
        showThumbs={false}
        interval={3000}>
            <div className="h-screen w-full mx-auto">
                <img className="h-[90%] w-full" src="IMG_0422.jpg" />
               
            </div>
            <div className="h-screen w-full mx-auto">
            <img className="h-[90%] w-full" src="IMG_9564.jpg" />
  
            </div>
            <div className="h-screen w-full mx-auto">
            <img className="h-[90%] w-full" src="IMG_6896.jpg" />
            </div>
            <div className="h-screen w-full mx-auto">
            <img className="h-[90%] w-full" src="IMG_6871.jpg" />
            </div>
        </Carousel>
        </div>
    );
}
export default Banner;