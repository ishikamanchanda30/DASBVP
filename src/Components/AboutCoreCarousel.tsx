import { useState } from 'react';
import coreTeam from '../data/Core';

export default function AboutCoreCarousel() {
  const members = coreTeam;
  const [index, setIndex] = useState(0);
  const total = members.length;

  const prev = () => setIndex((index - 1 + total) % total);
  const next = () => setIndex((index + 1) % total);

  // Current member assignments
  const leftImg = members[(index) % total];
  const mainMember = members[(index + 1) % total];
  const rightTopImg = members[(index + 2) % total];
  const rightBottomImg = members[(index + 3) % total];

  return (
    <>
      {/* Desktop/Tablet Layout */}
      <div className="hidden md:flex h-screen w-full gap-6 py-16 px-12 box-border bg-[#0d0d0d] text-white font-sans">
        {/* Column 1 - Left with vertical CORE text */}
        <div className="flex flex-col justify-between flex-1 ml-5 my-1">
          <div 
            className="text-7xl font-medium text-center self-start h-60"
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed'
            }}
          >
            CORE
          </div>
          <img
            src={leftImg.image}
            alt={leftImg.name}
            loading="lazy"
            className="w-full h-96 object-cover mt-4 pr-1 opacity-45"
          />
        </div>

        {/* Column 2 - Center main image with name and position */}
        <div className="flex flex-col items-center flex-[1.8] mt-16 ml-4 mr-4">
          <div className="flex-shrink-0 self-end py-2 text-2xl font-medium">
            {mainMember.name.toUpperCase()}
          </div>
          <img
            src={mainMember.image}
            alt={mainMember.name}
            loading="lazy"
            className="flex-1 h-110 w-full object-cover"
          />
          <div className="flex-shrink-0 self-end py-2 text-2xl font-light">
            {mainMember.position.toUpperCase()}
          </div>
        </div>

        {/* Column 3 - Right with staggered images and text */}
        <div className="flex flex-col flex-2 gap-6">
          {/* Top section with two staggered images */}
          <div className="flex flex-[3] gap-6">
            <div className="flex-1 mt-14 mr-2">
              <img
                src={rightTopImg.image}
                alt={rightTopImg.name}
                loading="lazy"
                className="w-full h-full object-cover pr-1 opacity-45"
              />
            </div>
            <div className="flex-1 mb-24">
              <img
                src={rightBottomImg.image}
                alt={rightBottomImg.name}
                loading="lazy"
                className="w-full h-full object-cover pl-1 opacity-45"
              />
            </div>
          </div>

          {/* Bottom section with description and navigation */}
          <div className="flex-1 flex flex-col justify-between items-center px-3">
            <div className="flex-[3] font-light self-start text-base leading-relaxed">
              {mainMember.desc}
            </div>
            <div className="flex-1 self-end flex items-center gap-4">
              <div className="flex-1 text-4xl font-medium mr-4 self-end">
                CORE
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="bg-[#9E9E9E] text-[#0D0D0D] border-none rounded-full w-8 h-8 pb-1 flex items-center justify-center text-2xl hover:bg-gray-500 transition-colors"
                >
                  ‹
                </button>
                <button
                  onClick={next}
                  className="bg-[#9E9E9E] text-[#0D0D0D] border-none rounded-full w-8 h-8 pb-1 flex items-center justify-center text-2xl hover:bg-gray-500 transition-colors"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col md:hidden min-h-screen w-full bg-[#0d0d0d] text-white font-sans items-center justify-center py-8 px-2">
        {/* Top row: position (left), name (right) */}
        <div className="flex w-full justify-between items-center mb-4">
          <span className="text-lg font-light uppercase text-left ml-10 flex-1">{mainMember.position}</span>
          <span className="text-lg font-medium uppercase text-right mr-10 flex-1">{mainMember.name}</span>
        </div>
        {/* Main image */}
        <div className="flex justify-center items-center w-full">
          <img
            src={mainMember.image}
            alt={mainMember.name}
            className="aspect-square w-[90vw] max-w-xs rounded-lg object-cover"
          />
        </div>
        {/* Description with arrows on left and right */}
        <div className="flex items-center justify-center w-full max-w-xs mt-6 ">
          <button
            onClick={prev}
            className="bg-[#9E9E9E] text-[#0D0D0D] border-none rounded-full w-7 h-7 flex items-center justify-center text-lg hover:bg-gray-500 transition-colors mr-4"
            aria-label="Previous"
          >
            ‹
          </button>
          <div className="text-base font-light text-center flex-1 ">
            {mainMember.desc}
          </div>
          <button
            onClick={next}
            className="bg-[#9E9E9E] text-[#0D0D0D] border-none rounded-full w-7 h-7 flex items-center justify-center text-lg hover:bg-gray-500 transition-colors ml-4"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
    </>
  );
}