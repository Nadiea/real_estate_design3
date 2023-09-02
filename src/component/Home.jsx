import  { useState } from "react";
import Nav from "../layout/Nav";
import image1 from "../assets/coverpic1.jpg";
import image2 from "../assets/coverpic2.jpg";
import image3 from "../assets/coverpic3.jpg";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Footer from "../layout/Footer";

export default function Home() {
  const images = [image1, image2, image3];
  const a =['  We provide a to z services of IT Solutions','You can get Logo design,Video Animation,All kind of Animation ',' Also can get Web design App Design']
  const b = ['Digital Marketing',' Get Our Service  ', 'Promote Your service by us']
  const d = ['',' and Increase your sales ', '']
  const c = [' Cisco Networking', 'packect tracker Project', ' Lab exam help for Cisco Networking']

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? a.length - 1 : prevIndex - 1));
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? b.length - 1 : prevIndex - 1));
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? c.length - 1 : prevIndex - 1));
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? d.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    setCurrentIndex((prevIndex) => (prevIndex === a.length - 1 ? 0 : prevIndex + 1));
    setCurrentIndex((prevIndex) => (prevIndex === b.length - 1 ? 0 : prevIndex + 1));
    setCurrentIndex((prevIndex) => (prevIndex === c.length - 1 ? 0 : prevIndex + 1));
    setCurrentIndex((prevIndex) => (prevIndex === d.length - 1 ? 0 : prevIndex + 1));
  };

  return (
   <> <div className="   relative h-full w-full  font-Poppins  bg-black   " >
   <img src={images[currentIndex]} className="  w-full h-[650px] object-cover  bg-opacity-[0.1]    border border-e-white  opacity-80   rounded-b-3xl  " />
   <div className="absolute top-0 w-full">
     <Nav />
   </div>
   <div className="absolute md:left-20   left-5 md:top-44 top-60 ">
     <div className="text-slate-200 text-sm  font-Oswald ">
     {a[currentIndex]}
     </div>
     <div className="text-white md:text-5xl font-Oswald text-2xl mt-6 mb-6 font-extrabold ">
     {b[currentIndex]}
       <br />
       {d[currentIndex]}
     </div>
     <div className="text-slate-200 text-xs font-Oswald">
     {c[currentIndex]}
     </div>
     <button className="mt-20 h-10 font-Oswald    text-slate-300 border border-slate-300 p-1 w-48 hover:bg-slate-500">
       Our Portfolio
     </button>
   </div>
   <div className="absolute md:top-[584px] top-[585px] w-full h-16 flex justify-between">
     <button
       className="hover:bg-slate-400 bg-slate-700 h-16 w-56 flex  bg-opacity-[0.3]  justify-between  p-5   rounded-bl-3xl text-3xl"
       onClick={handlePrevious}
     >
       <div>
         <svg
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 24 24"
           strokeWidth="1.5"
           stroke="currentColor"
           className="w-10 h-10 text-white"
         >
           <path
             strokeLinecap="round"
             strokeLinejoin="round"
             d="M15.75 19.5L8.25 12l7.5-7.5"
           />
         </svg>
       </div>
       <div className="  text-white font-Oswald mt-1  font-bold text-sm ">PREVIOUS</div>
     </button>
     <button
       className="hover:bg-slate-400 bg-slate-700 h-16 w-56 flex justify-between  p-5 bg-opacity-[0.3] rounded-br-3xl text-white text-3xl"
       onClick={handleNext}
     >
       <div className="  text-white font-Oswald font-bold mt-1 text-sm">NEXT</div>
       <div className="">
         <svg
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 24 24"
           strokeWidth="1.5"
           stroke="currentColor"
           className="w-10 h-10"
         >
           <path
             strokeLinecap="round"
             strokeLinejoin="round"
             d="M8.25 4.5l7.5 7.5-7.5 7.5"
           />
         </svg>
       </div>
     </button>
   </div>
 </div>
 <About/>
 <Gallery/>
 <Contact/>
 <Footer/>
 
 
 </>
  );
}
