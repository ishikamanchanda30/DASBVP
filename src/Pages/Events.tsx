import React, { useState } from "react";

const Events: React.FC = () => {
  // Sample data for the carousel - Adjusted to match new design with titles instead of images
  const events = [
    {
      id: 1,
      yearRange: "2023-2024",
      title: "ART EXHIBITION",
      description: "yet another event",
      image: "", // No image needed for this design
    },
    {
      id: 2,
      yearRange: "2023-2024",
      title: "MUSIC CONCERT",
      description: "another event",
      image: "",
    },
    {
      id: 3,
      yearRange: "2023-2024",
      title: "DANCE PERFORMANCE",
      description: "a dance event",
      image: "",
    },
    {
      id: 4,
      yearRange: "2023-2024",
      title: "FILM SCREENING",
      description: "another film event",
      image: "",
    },
  ];

  const slidesPerPage = 4; // Show 2 items at a time
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, Math.ceil(events.length / slidesPerPage) - 1)
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const visibleEvents = events.slice(
    currentIndex * slidesPerPage,
    (currentIndex + 1) * slidesPerPage
  );

  return (
    <div className="w-screen h-screen bg-black text-white flex flex-col justify-start items-center py-20 px-21 font-kumbh">
  
      <div className="text-left w-full mb-10 "> 
        <p className="text-4xl font-bold">{events[0].yearRange}</p>
      </div>

      <div className="relative w-full h-full ">
        <button className="absolute top-1/2 right-[-30px] transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
          onClick={handleNext}
          aria-label="Next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <div className="flex justify-center gap-2">
          {visibleEvents.map((event) => (
            <div
              key={event.id}
              className="w-1/2 max-w-md" // Adjust max-w if needed
            >

              <div className="bg-[#232733] py-24 flex items-center justify-center rounded-md">
                <p className="text-xl font-bold text-center">{event.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <h2 className="text-3xl font-bold mb-3">{events[currentIndex * slidesPerPage]?.title || ' '}</h2>
          <p className="text-lg text-gray-400">{events[currentIndex * slidesPerPage]?.description || ' '}</p>
        </div>
      </div>
    </div>
  );
};

export default Events;