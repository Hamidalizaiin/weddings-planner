import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);

  return (
  <>
{/* Mobile Menu */}
  <div className="md:hidden">       
          {/* Overlay */}
          <div
              className={`fixed flex flex-col justify-between top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
          >
              {/* Close button */}
              <div className="flex justify-end p-4">
                  <button onClick={() => setIsOpen(false)} className="text-xl">
                      <FontAwesomeIcon icon={faTimes} />
                  </button>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col space-y-4 px-6">
                  <a href="#home" className="text-lg font-semibold">Home</a>
                  <a href="#about" className="text-lg font-semibold">Browse Vendors</a>
                  <a href="#services" className="text-lg font-semibold">How It Works</a>
                  <a href="#contact" className="text-lg font-semibold">Contact</a>
              </nav>

              {/* Sign Up & profile icons */}
              <div className="flex flex-col space-y-4 px-6">
                    <button className="w-full mb-3 bg-[var(--color-primary)] text-white font-bold py-2 px-4 rounded-md hover:bg-[var(--color-primary-dark)] transition ease-in-out duration-300">
                        Sign Up
                    </button>   
              </div>
          </div>

          {/* Optional backdrop */}
          {isOpen && (
              <div
                  className="fixed inset-0 bg-black opacity-20 z-40"
                  onClick={() => setIsOpen(false)} />
          )}
      </div>
      
      <header className=" fixed w-full  ">
              <nav className="py-6 flex justify-between items-center p-4 bg-[var(--color-primary)] text-white">
                  <div className="text-2xl ">Wedding Planner</div>
                  <div>
                      <ul className="hidden gap-6 lg:gap-12 items-center md:flex">
                          <li className="twxt-sm lg:text-lg cursor-pointer hover:text-gray-200 transition ease-in-out duration-300">Home</li>
                          <li className="twxt-sm lg:text-lg cursor-pointer hover:text-gray-200 transition ease-in-out duration-300">Browse Vendors</li>
                          <li className="twxt-sm lg:text-lg cursor-pointer hover:text-gray-200 transition ease-in-out duration-300">How It Works</li>
                          <li className="twxt-sm lg:text-lg cursor-pointer hover:text-gray-200 transition ease-in-out duration-300">Contact Us</li>
                          <button className="w-[120px] bg-white hover:bg-[var(--color-primary)]  border-2 border-white hover:text-white text-black font-bold py-2 px-4 rounded-md cursor-pointer transition ease-in-out duration-300">
                              Sign Up
                          </button>
                      </ul>

                      <p className="text-2xl md:hidden cursor-pointer " onClick={() => setIsOpen(!isOpen)}>
                          <FontAwesomeIcon icon={faBars} />
                      </p>

                  </div>
              </nav>
          </header></>
  );
};

export default Navbar;
