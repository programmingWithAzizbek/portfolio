import React from "react";
import hamburger from "../assets/images/hamburger-menu.svg";
import github from "../assets/images/github.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-[#1B1B1B] py-2 px-3.5 fixed w-full">
        <div className="w-full h-12 mx-auto flex justify-between items-center">
          <div className="flex items-center gap-x-3.5">
            <button className="p-1 border-none cursor-pointer">
              <img src={hamburger} alt="Menu Icon" />
            </button>
            <NavLink
              to="/"
              className="text-[22px] leading-7 font-medium text-white"
            >
              AZIZBEK<span className="text-[#39965F]">.UZ</span>
            </NavLink>
          </div>
          <nav className="flex items-center gap-x-3.5">
            <ul className="flex items-center gap-x-6 text-white text-base font-normal">
              <li>
                <NavLink to="/">Bosh sahifa</NavLink>
              </li>
              <li>
                <NavLink to="/about">Haqida</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Loyihalar</NavLink>
              </li>
              <li>
                <NavLink to="/contacts">Bog'lanish</NavLink>
              </li>
            </ul>
            <NavLink
              to="https://github.com/programmingWithAzizbek"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 inline-block"
            >
              <img src={github} alt="Github Icon" />
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
