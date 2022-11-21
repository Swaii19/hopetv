import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };
  return (
    <div className="flex w-full justify-between items-center h-20 absolute z-10 text-white font-bold">
      <div>
        <h1 onClick={handleNav} className={logo ? "hidden" : "block"}>
          EsperanzaTV.
        </h1>
      </div>

      <ul className="flex justify-between hidden md:flex">
        <li>Home</li>
        <li>En Vivo</li>
        <li>Quienes Somos</li>
        <li>Servicios</li>
        <li>Contactenos</li>
      </ul>

      <div className="hidden md:flex">
        <BiSearch size={20} />
        <BsPerson size={20} />
      </div>
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>

      {/*mobile menu dropdown*/}

      <div
        onClick={handleNav}
        className={nav
        ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
        : "fixed left-[-100%]"
    }
      >
        <ul>
          <h1 className="border-b">EsperanzaTV.</h1>
          <li className="border-b">Home</li>
          <li className="border-b">En Vivo</li>
          <li className="border-b">Quienes Somos</li>
          <li className="border-b">Servicios</li>
          <li className="border-b">Contactenos</li>

          <div className="flex -4 justify-center my-6">
            <FaFacebook className="icon" />
            <FaYoutube className="icon" />
            <FaInstagram className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
