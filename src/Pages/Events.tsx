import React, { useState } from "react";

const Events: React.FC = () => {
  const titles = ["ART EXHIBITION", "MUSIC CONCERT", "DANCE PERFORMANCE", "FILM SCREENING"];

  // PLEASE ADD 4 IMAGES IN EVERY EVENT


  const events = [
    { id: 1, yearRange: "2023-2024", title: titles[0], description: "Yet another event" },
    { id: 2, yearRange: "2023-2024", title: titles[0], description: "Yet another event" },
    { id: 3, yearRange: "2023-2024", title: titles[0], description: "Yet another event" },
    { id: 4, yearRange: "2023-2024", title: titles[0], description: "Yet another event" },

    { id: 5, yearRange: "2023-2024", title: titles[1], description: "Another event" },
    { id: 6, yearRange: "2023-2024", title: titles[1], description: "Another event" },
    { id: 7, yearRange: "2023-2024", title: titles[1], description: "Another event" },
    { id: 8, yearRange: "2023-2024", title: titles[1], description: "Another event" },

    { id: 9, yearRange: "2023-2024", title: titles[2], description: "A dance event" },
    { id: 10, yearRange: "2023-2024", title: titles[2], description: "A dance event" },
    { id: 11, yearRange: "2023-2024", title: titles[2], description: "A dance event" },
    { id: 12, yearRange: "2023-2024", title: titles[2], description: "A dance event" },

    { id: 13, yearRange: "2023-2024", title: titles[3], description: "Another film event" },
    { id: 14, yearRange: "2023-2024", title: titles[3], description: "Another film event" },
    { id: 15, yearRange: "2023-2024", title: titles[3], description: "Another film event" },
    { id: 16, yearRange: "2023-2024", title: titles[3], description: "Another film event" },
  ];

  const slidesPerPage = 4;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, Math.ceil(events.length / slidesPerPage) - 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const visibleEvents = events.slice(currentIndex * slidesPerPage, (currentIndex + 1) * slidesPerPage);

  return (
    <div className="w-screen h-screen bg-[#0D0D0D] text-white flex flex-col font-kumbh items-center justify-center">
      {/* Year Range */}
      <div className="w-[95%] flex items-end justify-start text-7xl font-bold h-[30%]">
        <p>{events[0].yearRange}</p>
      </div>

      {/* Carousel Wrapper - Full Width */}
      <div className="w-[95%] flex flex-col h-[70%] justify-evenly items-center">
        {/* Event Carousel - Full Width */}
        <div className="w-full flex justify-between gap-2 items-center h-[1%] rounded">
          {titles.map((title, index) => {
            const isSelected = visibleEvents.some(event => event.title === title);
            
            return (
              <div
                key={index}
                className={`h-full flex-1 flex items-center justify-center ${
                  isSelected ? "bg-white" : "bg-[#232733]"
                }`}
              ></div>
            );
          })}
        </div>  
        <div className="w-full flex justify-between gap-2 items-center h-[65%]">
          {visibleEvents.map((event) => (
            <div key={event.id} className="flex-1 flex items-center justify-center bg-[#232733] h-[90%]">
              <div className="flex items-center justify-center rounded-md w-full ">
                <span className="text-3xl font-bold text-center">{event.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Event Description & Buttons */}
        <div className="w-full flex justify-between items-center h-[10%]">
          {/* Event Details */}

          <button
            className="rounded-full w-12 h-12 flex items-center justify-center text-white"
            onClick={handlePrev}
            aria-label="Previous"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>


          <div className="flex flex-col justify-center items-center">
            <span className="text-4xl ">{events[currentIndex * slidesPerPage]?.title || " "}</span>
            <span className="text-lg text-gray-400 font-light">{events[currentIndex * slidesPerPage]?.description || " "}</span>
          </div>
                      
          <button
            className="rounded-full w-12 h-12 flex items-center justify-center text-white"
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
