import React, { useState } from 'react';
import Footer from '../components/Footer';
export default function Gallery() {
  const [selectedClub, setSelectedClub] = useState('All');

  const handleClubChange = (club) => {
    setSelectedClub(club);
  };
  const imagesAll = [];
  const imagesAlfaaz = [];
const imagesFilmski = [];

for (let i = 1; i <= 24; i++) {
  imagesAlfaaz.push(i.toString());
 
  imagesAll.push(`Alfaaz/${i.toString()}.jpg`);
}
console.log(imagesAlfaaz);
const imagesEnarrators = [];
const imagesAlpha = [];
for (let i = 1; i <= 11; i++) {
  imagesAlpha.push(i.toString());
  imagesAll.push(`Alpha Productions/${i.toString()}.png`);
  if(i <= 9)
  {
    imagesFilmski.push(i.toString());
    imagesAll.push(`Filmski/${i.toString()}.jpg`);
  }
}

const imagesDebSoc = [];
for (let i = 1; i <= 18; i ++)
{if(i<=5)
  {
    imagesDebSoc.push(i.toString());
    imagesAll.push(`Debsoc/${i.toString()}.png`);
  }
  
  imagesEnarrators.push(i.toString());
  
  imagesAll.push(`Enarrators/${i.toString()}.jpg`);
}
const imagesMUN = [];
const imagesEnigma = [];
for (let i = 1; i <= 10; i ++)
{
  imagesEnigma.push(i.toString());
  imagesAll.push(`Enigma/${i.toString()}.jpg`);
  if(i <= 4)
  {
    imagesMUN.push(i.toString());
    imagesAll.push(`MUN/${i.toString()}.png`);
  }
 
}

  const renderImages = () => {

    switch (selectedClub) {
      case 'Alfaaz':
        return imagesAlfaaz.map((image, index) => (
          <img
            key={index}
            src={require(`../Alfaaz/${image}.jpg`)}
            alt={`gallery of filmski ${index + 1}`}
            className="lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150"
          />
        ));
        

      case 'Alpha Productions':
        return imagesAlpha.map((image, index) => (
            <img
              key={index}
              src={require(`../Alpha Productions/${image}.png`)}
              alt={`gallery of alpha ${index + 1}`}
              className="lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150"
            />
          ));
      case 'DebSoc':
        return imagesDebSoc.map((image, index) => (
          <img
            key={index}
            src={require(`../Debsoc/${image}.png`)}
            alt={`gallery of debsoc ${index + 1}`}
            className="lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150"
          />
        ));
      case 'Enarrators':
        return imagesEnarrators.map((image, index) => (
          <img
            key={index}
            src={require(`../Enarrators/${image}.jpg`)}
            alt={`gallery of enarrators ${index + 1}`}
            className="lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150"
          />
        ));
      case 'Enigma':
        return  imagesEnigma.map((image, index) => (
          <img
            key={index}
            src={require(`../Enigma/${image}.jpg`)}
            alt={`gallery of enigma ${index + 1}`}
            className="lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150"
          />
        ));
      case 'Filmski':
        return imagesFilmski.map((image, index) => (
          <img
            key={index}
            src={require(`../Filmski/${image}.jpg`)}
            alt={`gallery of filmski ${index + 1}`}
            className="lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150"
          />
        ));
      case 'MUN':
        return imagesMUN.map((image, index) => (
          <img
            key={index}
            src={require(`../MUN/${image}.png`)}
            alt={`gallery of MUN ${index + 1}`}
            className="lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150"
          />
        ));
        default:
          return imagesAll.map((image, index) => (
            <img
              key={index}
              src={require(`../${image}`)}
              alt={`gallery of MUN ${index + 1}`}
              className="lg:h-60 lg:w-80 h-36 w-36 rounded-md hover:opacity-60 object-cover hover:scale-95 border-2 border-white cursor-pointer duration-150"
            />
          ));
        
      
    }
  };

  return (
    <div className="pt-20  bg-[#111011]">
      <div className="text-center text-white p-4 text-5xl font-bold">Gallery</div>
      <div className="lg:flex justify-center mb-8 space-x-4">
        <button
          className={`text-[#0aff9d] lg:ml-0 ml-4 lg:mb-0 mb-2 ${
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
          className={`text-[#0aff9d] mb-2 lg:mb-0 ${
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
      <div className='flex flex-col space-y-10'>
      
      <div className="mx-auto grid bg-[#111011] lg:grid-cols-4 grid-cols-2 gap-6 px-6 ">
        {renderImages()}
        
      </div>
      <Footer />
      </div>
      
     
    </div>
  );
}

