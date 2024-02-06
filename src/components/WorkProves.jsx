import React, { useEffect } from "react";
import { useTrail, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import "./WorkProves.css";

const WorkProves = () => {
  const workData = [
    {
      company: "Freelancer",
      role: "Front-end Developer",
      period: "Jun 2023 - Present",
      description:
        "creating Websites for clients with (Wordpress, Shopify, React.js, Next.js)",
    },
    {
      company: "RTS",
      role: "Frontend Developer",
      period: "Dec 2022 - March 2023",
      description:
        "Intern: Contributed to React component creation and styling using Tailwind CSS, ensuring seamless integration and consistent UI aesthetics",
    },
    {
      company: "Nordic Waves Group",
      role: "Fullstack Developer",
      period: "Sep 2023 - Dec 2023",
      description:
        "Brief yet impactful internship, where I played a crucial role in data analysis, handled front-end and back-end tasks, and contributed to UX/UI design.",
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

  const trail = useTrail(workData.length, {
    from: { opacity: 0, transform: "translateX(-100px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { mass: 1, tension: 30, friction: 15 }, // Adjusted values for slower animation
    reset: inView,
  });

  return (
    <div ref={ref} className="container mx-auto mt-20 p-8 rounded-lg flex flex-col justify-center text-center shadow-lg max-w-2xl">
      <h2 className="text-4xl font-bold mb-6 text-center">
        My Work Experience
      </h2>

      {trail.map((props, index) => (
        <animated.div
          key={index}
          style={{ ...props, width: "100%" }}
          className="mb-8 flex flex-col text-center justify-center items-center animate-left"
        >
          <h3 className="text-2xl font-semibold">{workData[index].company}</h3>
          <div className="flex items-center mt-2">
            <p className="text-gray-600">{workData[index].role}</p>
            <div className="flex-shrink-0 mx-2 h-5 border-l border-gray-500"></div>
            <p className="text-gray-600">{workData[index].period}</p>
          </div>
          <p className="mt-2">{workData[index].description}</p>
          {index !== workData.length - 1 && (
            <div className="p-[1px] bg-gray-400 h-32 mt-5"></div>
          )}
        </animated.div>
      ))}
    </div>
  );
};

export default WorkProves;