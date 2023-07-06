import React, { useState } from 'react';

export default function Gallery() {
  const [selectedClub, setSelectedClub] = useState('All');

  const handleClubChange = (club) => {
    setSelectedClub(club);
  };

  const renderImages = () => {
    switch (selectedClub) {
      case 'Alfaaz':
        return (
      <>
       <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0422.jpg" alt="Imagegallery" />
      <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_6871.jpg" alt="Imagegallery" />
         <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_6896.jpg" alt="Imagegallery" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_9564.jpg" alt="Imgegallery4" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0001.jpg" alt="Imagegallery" />
       
      </>
    

        );
      case 'Alpha Productions':
        return (
          <>
          <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0659.jpg" alt="Imagegallery 4" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0667.jpg" alt="Imagegallery 4" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0674.jpg" alt="Imgallery4" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_4018.jpg" alt="Igallery 4" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_4034.jpg" alt="Imgallery4" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_4025-1.jpg" alt="Imgallery4" />
        
          </>
        );
      case 'Debsoc':
        return (
          <>
          <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_4025-1.jpg" alt="Imgallery4" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_4036.jpg" alt="Imgallery4" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_5404.jpg" alt="Imgallery4" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_6767-1.jpg" alt="Imgallery4" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0730-2.jpg" alt="Imgallery4" />
          
          </>
        );
      case 'Enarrators':
        return (
          <>
           <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0422.jpg" alt="Imagegallery" />
      <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_6871.jpg" alt="Imagegallery" />
         <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_6896.jpg" alt="Imagegallery" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_9564.jpg" alt="Imgegallery4" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0001.jpg" alt="Imagegallery" />
       
          </>
        );
      case 'Enigma':
        return (
          <>
           <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0422.jpg" alt="Imagegallery" />
      <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_6871.jpg" alt="Imagegallery" />
         <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_6896.jpg" alt="Imagegallery" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_9564.jpg" alt="Imgegallery4" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0001.jpg" alt="Imagegallery" />
       
          </>
        );
      case 'Filmski':
        return (
          <>
           <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0422.jpg" alt="Imagegallery" />
      <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_6871.jpg" alt="Imagegallery" />
         <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_6896.jpg" alt="Imagegallery" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_9564.jpg" alt="Imgegallery4" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0001.jpg" alt="Imagegallery" />
       
          </>
        );
      case 'MUN':
        return (
          <>
          <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0634.jpg" alt="Imgallery4" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0659.jpg" alt="Imagegallery 4" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0667.jpg" alt="Imagegallery 4" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0674.jpg" alt="Imgallery4" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_4018.jpg" alt="Igallery 4" />
        
          </>
        );
      default:
        return (
          <>
            <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0422.jpg" alt="Imagegallery" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_6871.jpg" alt="Imagegallery" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_6896.jpg" alt="Imagegallery" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_9564.jpg" alt="Imgegallery4" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0001.jpg" alt="Imagegallery" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0075.jpg" alt="Imagegallery4" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0534.jpg" alt="Imagegallery4" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0642.jpg" alt="Imgallery4" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0607.jpg" alt="Imgallery4" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0649.jpg" alt="Imgallery4" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0634.jpg" alt="Imgallery4" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0659.jpg" alt="Imagegallery 4" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0667.jpg" alt="Imagegallery 4" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0674.jpg" alt="Imgallery4" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_4018.jpg" alt="Igallery 4" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_4034.jpg" alt="Imgallery4" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_4025-1.jpg" alt="Imgallery4" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_4036.jpg" alt="Imgallery4" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_5404.jpg" alt="Imgallery4" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_6767-1.jpg" alt="Imgallery4" />
        <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0730-2.jpg" alt="Imgallery4" />
          </>
        );
    }
  };

  return (
    <div className="pt-20 bg-[#111011]">
      <div className="text-center text-white p-4 text-5xl font-bold">Gallery</div>
      <div className="flex justify-center mb-8 space-x-4">
        <button
          className={`text-[#0aff9d] ${
            selectedClub === 'All' ? 'bg-[#0aff9d] text-black' : 'bg-gray-600'
          } hover:bg-[#0aff9d] hover:text-black transition duration-300 ease-in-out rounded-full py-2 px-4`}
          onClick={() => handleClubChange('All')}
        >
          All
        </button>
        <button
          className={`text-[#0aff9d] ${
            selectedClub === 'Alfaaz' ? 'bg-[#0aff9d] text-black' : 'bg-gray-600'
          } hover:bg-[#0aff9d] hover:text-black transition duration-300 ease-in-out rounded-full py-2 px-4`}
          onClick={() => handleClubChange('Alfaaz')}
        >
          Alfaaz
        </button>
        <button
          className={`text-[#0aff9d] ${
            selectedClub === 'Alpha Productions' ? 'bg-[#0aff9d] text-black' : 'bg-gray-600'
          } hover:bg-[#0aff9d] hover:text-black transition duration-300 ease-in-out rounded-full py-2 px-4`}
          onClick={() => handleClubChange('Alpha Productions')}
        >
          Alpha Productions
        </button>
        <button
          className={`text-[#0aff9d] ${
            selectedClub === 'DebSoc' ? 'bg-[#0aff9d] text-black' : 'bg-gray-600'
          } hover:bg-[#0aff9d] hover:text-black transition duration-300 ease-in-out rounded-full py-2 px-4`}
          onClick={() => handleClubChange('DebSoc')}
        >
          DebSoc
        </button>
        <button
          className={`text-[#0aff9d] ${
            selectedClub === 'MUN' ? 'bg-[#0aff9d] text-black' : 'bg-gray-600'
          } hover:bg-[#0aff9d] hover:text-black transition duration-300 ease-in-out rounded-full py-2 px-4`}
          onClick={() => handleClubChange('MUN')}
        >
          MUN
        </button>
        <button
          className={`text-[#0aff9d] ${
            selectedClub === 'Enarrators' ? 'bg-[#0aff9d] text-black' : 'bg-gray-600'
          } hover:bg-[#0aff9d] hover:text-black transition duration-300 ease-in-out rounded-full py-2 px-4`}
          onClick={() => handleClubChange('Enarrators')}
        >
          Enarrators
        </button>

        <button
          className={`text-[#0aff9d] ${
            selectedClub === 'Enigma' ? 'bg-[#0aff9d] text-black' : 'bg-gray-600'
          } hover:bg-[#0aff9d] transition hover:text-black duration-300 ease-in-out rounded-full py-2 px-4`}
          onClick={() => handleClubChange('Enigma')}
        >
          Enigma
        </button>
        <button
          className={`text-[#0aff9d] ${
            selectedClub === 'Filmski' ? 'bg-[#0aff9d] text-black' : 'bg-gray-600'
          } hover:bg-[#0aff9d] hover:text-black transition duration-300 ease-in-out rounded-full py-2 px-4`}
          onClick={() => handleClubChange('Filmski')}
        >
          Filmski
        </button>
        
      </div>
      <div className="mx-auto grid lg:grid-cols-4 grid-cols-2 gap-6 px-6">
        {renderImages()}
      </div>
    </div>
  );
}
// import React from 'react'

// export default function Gallery() {
//   return (
//     <div className='pt-20 h-full bg-[#111011] w-full'>
//     <div className='text-center text-white p-4  text-5xl font-bold'>
//       Gallery
//     </div>
    // <div className='lg:ml-12 mt-10 md:ml-10 ml-4'>
    // <div className="mx-auto grid lg:grid-cols-4 grid-cols-2 gap-6">
    //     <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0422.jpg" alt="Imagegallery" />
    //     <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_6871.jpg" alt="Imagegallery" />
    //     <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_6896.jpg" alt="Imagegallery" />
    //     <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_9564.jpg" alt="Imgegallery4" />
    //     <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0001.jpg" alt="Imagegallery" />
    //     <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0075.jpg" alt="Imagegallery4" />
    //     <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0534.jpg" alt="Imagegallery4" />
    //     <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0642.jpg" alt="Imgallery4" />
    //     <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0607.jpg" alt="Imgallery4" />
    //     <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0649.jpg" alt="Imgallery4" />
    //     <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0634.jpg" alt="Imgallery4" />
    //     <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0659.jpg" alt="Imagegallery 4" />
    //     <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0667.jpg" alt="Imagegallery 4" />
    //     <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0674.jpg" alt="Imgallery4" />
    //     <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_4018.jpg" alt="Igallery 4" />
    //     <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_4034.jpg" alt="Imgallery4" />
    //     <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_4025-1.jpg" alt="Imgallery4" />
    //     <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_4036.jpg" alt="Imgallery4" />
    //     <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_5404.jpg" alt="Imgallery4" />
    //     <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_6767-1.jpg" alt="Imgallery4" />
    //     <img loading="lazy"  className='lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150' src="IMG_0730-2.jpg" alt="Imgallery4" />
    

    //     {/* Add more images as needed */}
    //   </div>

 
    // </div>
   
   
    


//     </div>
//   )
// }
