import React, { useState } from "react";

const Events: React.FC = () => {
  const events = [
    { id: 1, yearRange: "2023-2024", title: "ART EXHIBITION", description: "Yet another event" },
    { id: 2, yearRange: "2023-2024", title: "MUSIC CONCERT", description: "Another event" },
    { id: 3, yearRange: "2023-2024", title: "DANCE PERFORMANCE", description: "A dance event" },
    { id: 4, yearRange: "2023-2024", title: "FILM SCREENING", description: "Another film event" },
  ];

  const slidesPerPage = 2;
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
      <div className="w-[95%] flex-grow flex flex-col h-[70%] justify-around items-center">
        {/* Event Carousel - Full Width */}
        <div className="w-full flex justify-between gap-2 items-center h-[10px] rounded">
          {events.map((_, index) => {
            const isSelected = index >= currentIndex * slidesPerPage && index < (currentIndex + 1) * slidesPerPage;
            
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
        <div className="flex-grow w-full flex justify-between gap-2 items-center">
          {visibleEvents.map((event) => (
            <div key={event.id} className="flex-1 flex items-center justify-center bg-[#232733] h-[60%]">
              <div className="flex items-center justify-center rounded-md w-full ">
                <span className="text-3xl font-bold text-center">{event.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Event Description & Buttons */}
        <div className="w-full flex justify-between items-center">
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
