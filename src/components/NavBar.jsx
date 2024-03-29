// NavBar.js
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const NavBar = ({ onTechnologiesClick }) => {
  const [nav, setNav] = useState(false);
  const [experienceVisible, setExperienceVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById("experience");
      if (experienceSection) {
        const { top } = experienceSection.getBoundingClientRect();
        setExperienceVisible(top <= window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 2,
      link: "technologies",
    },
  ];

  return (
    <div
      className={`flex justify-between items-center w-full h-20 px-4 text-white fixed z-50 transition-colors ${
        experienceVisible ? "bg-gradient-to-b from-blue-900 to-blue-800" : "bg-transparent"
      }`}
    >
      <div>
        <h1 className="text-5xl font-signature ml-2">Adam</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-white-300 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <ScrollLink to={link} smooth duration={500}>
              {link}
            </ScrollLink>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {link === "technologies" ? (
                <span onClick={onTechnologiesClick}>{link}</span>
              ) : (
                <ScrollLink
                  onClick={() => setNav(false)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </ScrollLink>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
