import React, { useState } from "react";

const Events: React.FC = () => {
  const titles = ["ART EXHIBITION", "MUSIC CONCERT", "DANCE PERFORMANCE", "FILM SCREENING"];
// PLEASE ADD 4 IMAGES IN EVERY EVENT
  const events = [
    { id: 1, yearRange: "2023-2024", title: titles[0], description: "Contemporary art showcase" },
    { id: 2, yearRange: "2023-2024", title: titles[0], description: "Modern art exhibition" },
    { id: 3, yearRange: "2023-2024", title: titles[0], description: "Abstract art collection" },
    { id: 4, yearRange: "2023-2024", title: titles[0], description: "Digital art display" },

    { id: 5, yearRange: "2023-2024", title: titles[1], description: "Jazz night performance" },
    { id: 6, yearRange: "2023-2024", title: titles[1], description: "Classical symphony" },
    { id: 7, yearRange: "2023-2024", title: titles[1], description: "Rock festival" },
    { id: 8, yearRange: "2023-2024", title: titles[1], description: "Electronic music night" },

    { id: 9, yearRange: "2023-2024", title: titles[2], description: "Contemporary dance" },
    { id: 10, yearRange: "2023-2024", title: titles[2], description: "Ballet performance" },
    { id: 11, yearRange: "2023-2024", title: titles[2], description: "Hip-hop showcase" },
    { id: 12, yearRange: "2023-2024", title: titles[2], description: "Traditional folk dance" },

    { id: 13, yearRange: "2023-2024", title: titles[3], description: "Independent films" },
    { id: 14, yearRange: "2023-2024", title: titles[3], description: "Documentary screening" },
    { id: 15, yearRange: "2023-2024", title: titles[3], description: "Short film festival" },
    { id: 16, yearRange: "2023-2024", title: titles[3], description: "Classic cinema night" },
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
      <div className="w-[95%] flex items-end justify-start text-7xl font-bold h-[30%]">
        <p>{events[0].yearRange}</p>
      </div>

      {/* Carousel Wrapper - Full Width */}
      <div className="w-[95%] flex flex-col h-[70%] justify-evenly items-center">
        {/* Event Carousel - Full Width */}
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
        <div className="w-full flex justify-between gap-6 items-center h-[65%]">
          {visibleEvents.map((event) => (
            <div key={event.id} className="flex-1 flex items-center justify-center border rounded-xl h-[90%]">
              <div className="flex items-center justify-center rounded-md w-full ">
                <span className="text-3xl font-bold text-center">{event.title}</span>
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
            <span className="text-4xl ">{currentEventGroup}</span>
            <span className="text-lg text-gray-400 font-light">
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