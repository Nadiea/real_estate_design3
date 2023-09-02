

import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for React Router

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="grid font-DM Serif Display grid-cols-12 justify-center items-center md:p-4 p-10  text-white  relative">
      <div className="col-span-3 justify-center items-center grid">
        <h2 className="md:text-3xl text-xl font-extrabold font-DMSerifDisplay">I.TECHNOLOGY</h2>
        <p className="font-bold text-sm">a to z IT solution</p>
      </div>

      <div className="hidden md:block col-span-2 justify-center font-bold text-xs items-center grid hover:underline">
        <Link to="/">HOME</Link> {/* Use Link to navigate to the home page */}
      </div>

      <div className="hidden md:block col-span-2 text-xs font-bold justify-center items-center grid hover:underline">
        <Link to="/about">ABOUT US</Link> {/* Use Link to navigate to the about page */}
      </div>
      
      <div className="hidden md:block col-span-2 text-xs font-bold justify-center items-center grid hover:underline">
        <Link to="/gallery">Gallery</Link> {/* Use Link to navigate to the services page */}
      </div>

      <div className="hidden md:block col-span-3 justify-center font-bold items-center grid">
        <div className="flex gap-2">
          <div>
                     <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 mt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </div>
          <div>+01902708736</div>
        </div>
        <div className="flex gap-2">
          <div>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 mt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </div>
          <div>32, mirpur road, Dhanmundi</div>
        </div>
      </div>

      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="md:hidden ml-48 p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-expanded={isMobileMenuOpen}
        onClick={toggleMobileMenu}
      >
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>

      {isMobileMenuOpen && (
        <div className="md:hidden w-full md:w-auto absolute left-0 top-[88px] bg-white p-4 border border-gray-100 rounded-lg bg-gray-50 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <ul className="font-medium flex flex-col space-y-1">
            <li>
              <Link
                to="/"
                className="block py-1 pr-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-1 pr-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block py-1 pr-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

























































