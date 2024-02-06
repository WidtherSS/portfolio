import React, { useEffect } from "react";
import { useTrail, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import figma from "../assets/figma.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import restapi from "../assets/restapi.png";
import git from "../assets/git.png";
import mongodb from "../assets/mongodb.png";
import firebase from "../assets/firebase.png";
import redux from "../assets/redux.png";
import shopify from "../assets/shopify.png";
import wordpress from "../assets/wordpress.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: node,
      title: "NodeJs",
      style: "shadow-green-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 10,
      src: figma,
      title: "Figma",
      style: "shadow-sky-400",
    },
    {
      id: 11,
      src: nextjs,
      title: "Next.js",
      style: "shadow-white",
    },
    {
      id: 12,
      src: mongodb,
      title: "Mongodb",
      style: "shadow-green-400",
    },
    {
      id: 13,
      src: restapi,
      title: "Restapi",
      style: "shadow-gray-500",
    },
    {
      id: 14,
      src: git,
      title: "Git",
      style: "shadow-orange-400",
    },
    {
      id: 15,
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-400",
    },
    {
      id: 16,
      src: shopify,
      title: "Shopify",
      style: "shadow-green-400",
    },
    {
      id: 17,
      src: wordpress,
      title: "Wordress",
      style: "shadow-blue-400",
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      // Trigger animation logic here (if needed)
    }
  }, [inView]);

  const trail = useTrail(techs.length, {
    from: { opacity: 0, transform: "translateX(-100px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { mass: 1, tension: 30, friction: 15 }, // Adjusted values for slower animation
    reset: inView,
  });

  return (
    <div ref={ref} name="experience" className="w-full h-screen experience">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold text-orange-500 ">
            Experience
          </p>
          <p className="py-6">
            These are the technologies I've worked with and used them in my
            projects.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {trail.map((props, index) => (
            <animated.div
              key={techs[index].id}
              style={{ ...props, width: "100%" }}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${
                techs[index].id === 13 ? "shadow-blue-400" : techs[index].style
              }`}
            >
              <img
                src={techs[index].src}
                alt=""
                className="w-20 mx-auto"
                style={{
                  filter:
                    techs[index].id === 13 ? "brightness(0) invert(1)" : "none",
                }}
              />
              <p className="mt-4">{techs[index].title}</p>
            </animated.div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};


export default Experience;
