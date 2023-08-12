import React from "react";

const About = () => {
  return (
    <div className="flex justify-center text-center items-center ">
      <div className="w-full max-w-screen-lg p-4 flex flex-col justify-center bg-black text-white rounded-lg hover:scale-105 hover:shadow-lg transition transform duration-300 ease-in-out">
        <div className="pb-8">
          <p className="text-4xl font-bold inline">About</p>
        </div>

        <p className="text-xl mt-5">
          Hello! I'm a Junior Front-End Developer with a passion for creating
          beautiful, functional websites and applications.
        </p>

        <br />

        <p className="text-xl">
          With a robust command over HTML, CSS, and JavaScript, I am poised to
          embrace novel challenges and engage in synergistic ventures to
          manifest conceptualizations into reality. My proclivity for the
          artistic facets of technology has perpetually magnetized me, igniting
          a passion for the intricacies of crafting interfaces that seamlessly
          blend aesthetics with usability. My professional journey encompasses
          both autonomous and collaborative project undertakings, incubating and
          enhancing my adeptness in interpersonal communication and team
          cooperation. Beyond my technical prowess, I am an avid acquirer of
          knowledge, readily immersing myself in uncharted frameworks and
          projects to augment my proficiencies. Away from the code editor, I am
          an enthusiastic fitness enthusiast, dedicating substantial time to my
          physical well-being. Enthusiastically, I extend my capabilities and
          ardor to your team, with a commitment to enriching user experiences
          through seamless amalgamations of technology and design.
        </p>
      </div>
    </div>
  );
};

export default About;
