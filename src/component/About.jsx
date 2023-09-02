import { useEffect, useState } from "react";
import image from "/src/assets/coverpic4.jpg";
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";

export default function About() {
  
    const [counters, setCounters] = useState({
        service: 0,
        order: 0,
        com_order: 0,
      });
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCounters((prevCounters) => {
            const newService = prevCounters.service + 2;
            const newOrder = prevCounters.order + 5;
            const newComOrder = prevCounters.com_order + 8;
    
            if (newService >= 200 || newOrder >= 300 || newComOrder >= 100) {
              clearInterval(interval);
            }
    
            return {
              service: newService,
              order: newOrder,
              com_order: newComOrder,
            };
          });
        }, 100);
    
        return () => clearInterval(interval);
      }, []);



  return (
   <> <section id="about" className="  bg-zinc-900  text-gray-300    font-Poppins pb-5    ">
   <div className="absolute top-0 w-full">
<Nav/>
</div>
   <div className=" md:flex justify-center items-center pt-20 md:gap-7 w-full  mx-auto  p-0 " >
     <div className="  md:w-[500px] w-[300px] md:p-0 p-3 ">
       <h1 className="  font-Oswald  md:text-5xl text-3xl font-extrabold  mb-8">
         About Us
       </h1>
       <p className="    font-Oswald   text-xs text-slate-300  leading-7 ">
         We provide a to z services of IT Solutions</p>
         <div className="  font-Oswald  text-xs text-slate-300 leading-7 mb-5  ">
           You can get any kind  IT services
         </div>{" "}
       
        <p className=" font-Oswald text-xs text-slate-300 leading-7"> Banner ads/ cover loop slideshow for web created by our team.
         if you want to make
         your business banner then contact us now
         
         Stay connected with us
       </p>
         <p className=" font-Oswald   text-xs text-slate-300 leading-7"> Banner ads/ cover loop slideshow for  web created by our team.
         if you want to make
         your business  banner then contact us now
       
         Stay connected with us ,connect with us by facebook page
       </p>
       <button className="mt-5 h-8 text-slate-300 text-xs border border-slate-300  w-28 hover:bg-slate-500">
         Our Portfolio
       </button>
     </div>
     <div className="  md:mt-20     mt-0 ">
         <div className=" flex justify-end items-end gap-4 mb-3 md:p-0 p-2">

         <svg className="h-5 w-5 text-slate-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
         <svg className="h-5 w-5 text-slate-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="4" />  <circle cx="12" cy="12" r="3" />  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg>
         <svg className="h-5 w-5 text-slate-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" /></svg>
         </div>
       <img src={image} className=" w-[500px] object-cover " />
     </div>
  
   </div>
   <div className=" flex  justify-center items-center  pb-10  md:gap-36 ml-4 gap-10 mt-20   font-Poppins">
     <div className=" flex gap-2">
<div className=" md:text-5xl font-bold  font-Oswald text-2xl">  {counters.service.toLocaleString()}</div>
<div className="  md:text-sm text-xs font-Oswald   mt-1">
 <p>All</p>
 <p>Service</p>
</div>
     </div>
     <div className=" flex gap-2">
<div className=" md:text-5xl font-bold  font-Oswald  text-2xl">{counters.order.toLocaleString()}</div>
<div className=" md:text-sm text-xs font-Oswald  mt-1">
 <p>All</p>
 <p>Order</p>
</div>
     </div>
     <div className=" flex gap-2">
<div className=" md:text-5xl  font-bold font-Oswald text-2xl">{counters.com_order.toLocaleString()}</div>
<div className=" md:text-sm text-xs font-Oswald  mt-1">
 <p>All</p>
 <p>Complited Order</p>
</div>
     </div>
   </div>

 
 </section>

 {location.pathname === "/about" && <Footer />}</>
  );
}



