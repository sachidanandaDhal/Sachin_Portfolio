import pic from "../assets/bubuPs.png";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 h-16 md:px-20 shadow-md fixed top-0 left-0 right-0 bg-white z-50">
      <div className="flex justify-between items-center h-16">
        {/* Logo and Title */}
        <div className="flex space-x-2 items-center">
          <img src={pic} className="h-12 w-12 rounded-full" alt="Developer Profile" />
          <div>
            <h1 className="font-semibold text-xl cursor-pointer">
              Sachida<span className="text-green-500 text-2xl">nanda</span>
            </h1>
            <p className="text-sm">Web Developer</p>
          </div>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex space-x-8">
          {navItems.map(({ id, text }) => (
            <li className="list-none hover:scale-105 duration-200 cursor-pointer" key={id}>
            <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
            </li>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden cursor-pointer" onClick={() => setMenu(!menu)}>
          {menu ? <IoCloseSharp size={24} /> : <IoMenu size={24} />}
        </div>
      </div>

      {/* Mobile Navbar */}
      {menu && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
          <ul className="flex flex-col items-center space-y-6 py-6 text-xl">
            {navItems.map(({ id, text }) => (
              <li
                className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                key={id}
                onClick={() => setMenu(false)} // Close menu on selection
              >
                <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
