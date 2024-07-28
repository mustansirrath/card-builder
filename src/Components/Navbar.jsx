import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Card Builder
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <ul
          className={`md:flex md:items-center md:space-x-4 absolute md:static bg-[#007AFF] transition-all md:bg-transparent w-full md:w-auto left-0 md:left-auto top-16 md:top-auto transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link to="/" className="text-white hover:text-gray-400 block px-2 py-1">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-400 block px-2 py-1">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-400 block px-2 py-1">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
