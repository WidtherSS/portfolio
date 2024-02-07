import React from "react";
import videoHero from "../assets/videoHero.mp4";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full flex">
      <div className="flex-1 flex justify-center items-center ">
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="pl-[80px]">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              I'm a <span className="text-[#18d49c]">Front-end</span> Developer
            </h2>
            <p className="text-gray-400 py-4 max-w-md">
              With three years of combined experience, including two years of
              focused study in web development and software design, along with
              one year of successful freelancing. My expertise centers on
              crafting dynamic web applications, leveraging state-of-the-art
              technologies
            </p>
          </div>

          <div className="portfolio-btn">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group ml-[80px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r text-white bg-gradient-to-b from-blue-900 to-blue-800 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center hidden md:flex">
        <video autoPlay loop muted className="h-full w-full object-cover">
          <source src={videoHero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Home;
