
import { useState } from "react";
import image1 from "/src/assets/coverpic1.jpg";
import image2 from "/src/assets/coverpic2.jpg";
import image3 from "/src/assets/coverpic3.jpg";
import image4 from "/src/assets/coverpic4.jpg";


import Nav from "../layout/Nav";
import Footer from "../layout/Footer";

export default function Gallery() {


    const [isZoomed1, setIsZoomed1] = useState(false);
    const [isZoomed2, setIsZoomed2] = useState(false);
    const [isZoomed3, setIsZoomed3] = useState(false);
    const [isZoomed4, setIsZoomed4] = useState(false);
    const handleImageClick1 = () => {
      setIsZoomed1(!isZoomed1);
    };
    const handleImageClick2 = () => {
        setIsZoomed2(!isZoomed2);
      };
      const handleImageClick3 = () => {
        setIsZoomed3(!isZoomed3);
      };
      const handleImageClick4 = () => {
        setIsZoomed4(!isZoomed4);
      };
  return (
   <>
   <div className=" bg-black top-0 w-full">
   {location.pathname === "/gallery" && <Nav/> }
   </div>
    <div className="md:grid grid-cols-12  bg-black">
       

<div className="col-span-3 md:h-[600px] h-96 relative">
      <img
        src={image1}
        className={`h-full relative object-cover opacity-70 transition-opacity duration-300 hover:opacity-100 ${isZoomed1 ? 'scale-110' : 'scale-100'} cursor-pointer`}
        alt="Image 1"
        onClick={handleImageClick1}
      />
      <div className="absolute left-6 top-9 text-white font-Poppins font-bold md:text-sm text-xs">
        <p className="md:text-xl text-sm">0 1</p>
        <p className="mt-2">Dhanmundi/Dhaka:1205</p>
      </div>
      {isZoomed1 && (
        <div className="flex h-16 w-16 absolute md:left-28 left-32  md:top-60 top-48  bg-opacity-[0.6] rounded-full items-center bg-gray-900 justify-center">
          <svg
            className="h-8 w-8 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="11" y1="8" x2="11" y2="14" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
        </div>
      )}
    </div>








     <div className="col-span-3 md:h-[600px] h-96 relative">
      <img
        src={image2}
        className={`h-full relative object-cover opacity-70 transition-opacity duration-300 hover:opacity-100 ${isZoomed2 ? 'scale-110' : 'scale-100'} cursor-pointer`}
        alt="Image 1"
        onClick={handleImageClick2}
      />
       <div className=" absolute  left-6 top-9 text-white   font-Poppins font-bold md:text-sm text-xs">
            <p className=" md:text-xl text-sm">0 2</p>
            <p className=" mt-2">Dhanmundi/Dhaka:1205</p>
        </div>
      {isZoomed2 && (
        <div className="flex h-16 w-16 absolute md:left-28 left-32  md:top-60 top-48 bg-opacity-[0.6] rounded-full items-center bg-gray-900 justify-center">
          <svg
            className="h-8 w-8 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="11" y1="8" x2="11" y2="14" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
        </div>
      )}
    </div>

    <div className="col-span-3 md:h-[600px] h-96 relative">
      <img
        src={image3}
        className={`h-full relative object-cover opacity-70 transition-opacity duration-300 hover:opacity-100 ${isZoomed3 ? 'scale-110' : 'scale-100'} cursor-pointer`}
        alt="Image 1"
        onClick={handleImageClick3}
      />
       <div className=" absolute  left-6 top-9 text-white   font-Poppins font-bold md:text-sm text-xs">
            <p className=" md:text-xl text-sm">0 3</p>
            <p className=" mt-2">Dhanmundi/Dhaka:1205</p>
        </div>
      {isZoomed3 && (
        <div className="flex h-16 w-16 absolute md:left-28 left-32  md:top-60 top-48 bg-opacity-[0.6] rounded-full items-center bg-gray-900 justify-center">
          <svg
            className="h-8 w-8 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="11" y1="8" x2="11" y2="14" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
        </div>
      )}
    </div>

    <div className="col-span-3 md:h-[600px] h-96 relative">
      <img
        src={image4}
        className={`h-full relative object-cover opacity-70 transition-opacity duration-300 hover:opacity-100 ${isZoomed4 ? ' scale-110 ' : 'scale-100'} cursor-pointer`}
        alt="Image 1"
        onClick={handleImageClick4}
      />
       <div className=" absolute  left-6 top-9 text-white   font-Poppins font-bold md:text-sm text-xs">
            <p className=" md:text-xl text-sm">0 4</p>
            <p className=" mt-2">Dhanmundi/Dhaka:1205</p>
        </div>
      {isZoomed4 && (
        <div className="flex  h-16 w-16 absolute md:left-28 left-32  md:top-60 top-48 bg-opacity-[0.6] rounded-full items-center bg-gray-900 justify-center">
          <svg
            className="h-8 w-8 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="11" y1="8" x2="11" y2="14" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
        </div>
      )}
    </div>

    </div>
    {location.pathname === "/gallery" && <Footer/>}</>
  );
}
