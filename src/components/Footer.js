import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black mt-10 flex justify-evenly text-white p-10 text-center">
      <div className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} IIT Ropar. All rights reserved.
      </div>
      <div className='text-gray-400'> Website developed by : Tanisha Daharwal😊</div>
    </footer>
  );
}
