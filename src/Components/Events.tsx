import React, { useState } from "react";

import captureCampus from "../assets/Events/captureCampus.jpg"
import dComp from "../assets/Events/dComp.jpg"
import figma from "../assets/Events/figma.jpg"
import fineArt from "../assets/Events/fineArt.jpg"
import lodhi from "../assets/Events/lodhi.jpg"
import photoshop from "../assets/Events/photoshop.jpg"
import sunderNursery from "../assets/Events/sunderNursery.jpg"
import tulip from "../assets/Events/tulipFestival.jpg"
const Events: React.FC = () => {
  const titles = ["PHOTOWALKS", "WORKSHOPS & MORE"];
  const events = [
    { id: 1, yearRange: "2024-2025", title: titles[0], description: "LODHI GARDEN", image: lodhi },
    { id: 2, yearRange: "2024-2025", title: titles[0], description: "SUNDER NURSERY", image: sunderNursery },
    { id: 3, yearRange: "2024-2025", title: titles[0], description: "TULIP FESTIVAL", image: tulip },
    { id: 4, yearRange: "2024-2025", title: titles[1], description: "CAPTURE YOUR CAMPUS", image: captureCampus },

    { id: 5, yearRange: "2024-2025", title: titles[1], description: "DESIGN COMPETITION", image: dComp },
    { id: 6, yearRange: "2024-2025", title: titles[2], description: "FIGMA", image: figma },
    { id: 7, yearRange: "2024-2025", title: titles[2], description: "PHOTOSHOP", image: photoshop },
    { id: 8, yearRange: "2024-2025", title: titles[3], description: "FINE ARTS", image: fineArt },
  ];

  const slidesPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(events.length / slidesPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const startIndex = currentPage * slidesPerPage;
  const endIndex = startIndex + slidesPerPage;
  const visibleEvents = events.slice(startIndex, endIndex);
  const currentEventGroup = visibleEvents[0]?.title || "";

  return (
    <div className="w-screen h-screen bg-[#0D0D0D] text-white flex flex-col font-kumbh items-center justify-center">
      {/* Year Range */}
      <div className="w-[95%] flex items-end justify-start md:text-7xl text-5xl font-bold h-[30%]">
        <p>{events[0].yearRange}</p>
      </div>

      <div className="w-[95%] flex flex-col h-[70%] justify-evenly items-center">

        <div className="w-full flex justify-between gap-2 items-center h-[1%] rounded">
          {titles.map((title, index) => {
            const isSelected = currentEventGroup === title;

            return (
              <div
                key={index}
                className={`h-full flex-1 flex items-center justify-center ${isSelected ? "bg-white" : "bg-[#232733]"
                  }`}
              ></div>
            );
          })}
        </div>
        <div className="w-full flex md:flex-row flex-wrap justify-center md:justify-between items-center md:gap-4 gap-2 h-[70%] md:h-[65%]">
            {visibleEvents.map((event) => (
              <div
                key={event.id}
                className="w-[45%] md:w-[22.5%] flex items-center justify-center border rounded-xl h-[45%] md:aspect-auto md:h-[90%] relative overflow-hidden group"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 transition-transform duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  style={{
                    backgroundImage: `url(${event.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-40 transition-opacity duration-300 group-hover:opacity-0"></div>

                {/* Text */}
                <div className="relative z-10 flex items-center justify-center rounded-md w-full transition-opacity duration-300 group-hover:opacity-0">
                  <span className="md:text-3xl text-xl font-bold text-center">{event.description}</span>
                </div>
              </div>
            ))}
          </div>



        {/* Event Description & Buttons */}
        <div className="w-full flex justify-between items-center h-[10%]">
          <button
            className="bg-gray-900 rounded-full w-12 h-12 flex items-center justify-center text-white"
            onClick={handlePrev}
            aria-label="Previous"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex flex-col justify-center items-center">
          <span className="md:text-4xl text-xl">{currentEventGroup}</span>
          <span className="md:text-lg text-md text-gray-400 font-light">
              {visibleEvents.length > 0 ? visibleEvents[0].description : ""}
            </span>
          </div>

          <button
            className="bg-gray-900 rounded-full w-12 h-12 flex items-center justify-center text-white"
            onClick={handleNext}
            aria-label="Next"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;