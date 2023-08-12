import React from "react";
import beach from "../assets/portfolio/beach.mp4";
import youface from "../assets/portfolio/youface.mp4";
import netflix from "../assets/portfolio/netflix-clone.mp4"
import birdschool from "../assets/portfolio/birdschool.mp4"
import restaurant from "../assets/portfolio/restaurant.mp4"


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: beach,
      link: 'https://64348759669eec261c976c79--relaxed-gelato-7e58cf.netlify.app/',
      repo: 'https://github.com/WidtherSS/Travel'
    },

    {
      id: 2,
      src: youface,
      link: 'https://youface.netlify.app',
      repo: 'https://github.com/WidtherSS/youtube-clone'
    },
    {
      id: 3,
      src: netflix,
      link: 'https://netflix-clone-34d11.web.app/',
      repo: 'https://github.com/WidtherSS/Netflix-clone'
    },
    {
      id: 4,
      src: birdschool,
      link: 'https://exquisite-nasturtium-54df20.netlify.app/',
      repo: 'https://github.com/rahulkarda/NASA-APOD'
    },
    {
      id: 5,
      src: restaurant,
      link: 'https://64c272ec91fd12007d38e933--storied-praline-1e116b.netlify.app/',
      repo: 'https://github.com/rahulkarda/NASA-APOD'
    },
    {
      id: 6,
      src: youface,
      link: '',
      repo: ''
    }

  ];

  return (
    <div
      name="portfolio"
      className=" w-full text-white md:h-screen portfolio">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid rounded-md  sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <video
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
                autoPlay
                loop
                muted
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
