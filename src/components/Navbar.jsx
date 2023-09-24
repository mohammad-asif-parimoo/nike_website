import React, { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <Link to="/">
          <img
            src={headerLogo}
            alt="logo"
            width={150}
            height={40}
            className="m-0 w-[150px] h-[40px]"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </Link>
        <ul
          className={`flex-1 flex flex-row justify-center items-center gap-16
        ${isMenuOpen ? 'max-md:flex flex-col gap-12 absolute top-20 right-0 text-center w-[40vw] h-[50vh] bg-slate-gray' : 'max-md:hidden'}`}>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray max-md:text-white'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-md:block' onClick={toggleMenu}>
          {
            isMenuOpen ?
              <h3 className="text-[25px] mr-1" onClick={toggleMenu}>X</h3> :
              <img src={hamburger} alt='hamburger icon' width={25} height={25} />
          }
        </div>
      </nav>
    </header>
  );
};

export default Navbar;