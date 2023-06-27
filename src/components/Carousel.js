
import {Link} from "react-router-dom"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows : true,
    indicators : true
  };
  return (
    <div className="mt-20 w-full">
      <Carousel
  additionalTransfrom={0}
  arrows
  autoPlay
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
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
<div>
      <img className='h-[570px] w-full object-fill' src="B1.jpg" alt="Imgallery4" />
      </div>
      <div>
      <img className='h-[570px] w-full object-fill' src="B2.jpg" alt="event-gallery" />
      </div>
      <div>
      <img className='h-[570px] w-full object-fill' src="B3.jpg" alt="Imagegallery4" />
      </div>
      <div>
      <img className='h-[570px] w-full object-fill' src="B4.jpg" alt="Imagegallery 4" />
      </div>
      <div>
      <img className='h-[570px] w-full object-fill' src="B5.jpg" alt="Imagegallery 4" />
      </div>
      <div>
      <img className='h-[570px] w-full object-fill' src="B6.jpg" alt="Imagegallery 4" />
      </div>
      <div>
      <img className='h-[570px] w-full object-fill' src="B7.jpg" alt="Imagegallery 4" />
      </div>
      
      </Carousel>
     
      <div className="flex my-3 ml-[43%] gap-5 text-white">
        <div className=" ">
          <img className="h-14 w-14 my-2 rounded-full" src="BOLA-1.png" alt="Logo" />
        </div>

        <div className="my-auto ">
          <h3 className="font-semibold text-xl">Board of Literary Affairs</h3>
          
        </div>
      </div>
    </div>

       
      
    
  );
}