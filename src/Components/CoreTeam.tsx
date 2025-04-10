import { useState, useEffect, useCallback, useRef } from "react";
import coreTeam from "../data/Core";
import { ChevronLeft, ChevronRight } from "lucide-react";
interface SlideData {
  name: string;
  position: string;
  desc: string;
  image: string;
}

const Slide = ({
  slide,
  isSelected,
  isLeft,
  isRight,
  onClick
}: {
  slide: SlideData;
  isSelected: boolean;
  isLeft?: boolean;
  isRight?: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`relative h-full transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]
        ${isSelected ? "w-[45%] scale-105 z-10" : "w-[35%] scale-85 z-0"}`}
    >
      <div
        className={`relative h-full rounded overflow-hidden cursor-pointer
          ${isSelected ? "h-[80%]" : "h-[50%]"}`}
        onClick={onClick}
      >
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt={slide.name}
          src={slide.image}
        />

   
        {isLeft && (
          <div className="absolute inset-0">
           
            <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-black/60 to-transparent" />
       
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-black/60 to-transparent" />
    
            <div className="absolute inset-0 bg-black/60" />
          </div>
        )}

  
        {isRight && (
          <div className="absolute inset-0">
          
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-black/60 to-transparent" />
      
            <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-black/60 to-transparent" />
         
            <div className="absolute inset-0 bg-black/60" />
          </div>
        )}


   
        {isSelected && (
          <div className="absolute inset-0 bg-black/30" />
        )}
      </div>
    </div>
  );
};

const Carousel = ({ slides }: { slides: SlideData[] }) => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayRef = useRef<number | null>(null);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === current) return;

    setIsTransitioning(true);
    setCurrent(index);

    setTimeout(() => setIsTransitioning(false), 500);
  }, [current, isTransitioning]);

  const goToNext = useCallback(() => {
    goToSlide((current + 1) % slides.length);
  }, [current, goToSlide, slides.length]);

  const goToPrev = useCallback(() => {
    goToSlide((current - 1 + slides.length) % slides.length);
  }, [current, goToSlide, slides.length]);

  useEffect(() => {
    autoPlayRef.current = window.setInterval(goToNext, 5000);
  
    return () => {
      if (autoPlayRef.current !== null) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [goToNext]);
  
  const getVisibleSlides = () => {
    const prevIndex = (current - 1 + slides.length) % slides.length;
    const nextIndex = (current + 1) % slides.length;

    return [
      { slide: slides[prevIndex], isLeft: true },
      { slide: slides[current], isSelected: true },
      { slide: slides[nextIndex], isRight: true }
    ];
  };

  return (
    <div className="text-white w-[100vw] h-[95vh] flex flex-col pt-15 items-center">
      {/* Title */}
      <div className="flex flex-row w-[85%] justify-between items-center text-[#D3D3D3] text-6xl mb-5 h-[15%]">
        <span className='pr-4'>CORE </span>
        <span className='flex w-[90%] border-1 border-[#D3D3D3]'></span>
        <span className='pl-4'>DAS</span>
      </div>


      <div className="relative w-[85%] h-[70%] flex items-center">
      
        <button
          className="absolute left-[2%] z-20 p-2 text-white hover:scale-110 transition-transform"
          onClick={(e) => {
            e.stopPropagation();
            goToPrev();
          }}
        >
          <ChevronLeft size={40} />
        </button>

        <button
          className="absolute right-[2%] z-20 p-2 text-white hover:scale-110 transition-transform"
          onClick={(e) => {
            e.stopPropagation();
            goToNext();
          }}
        >
          <ChevronRight size={40} />
        </button>

        <div className="flex w-full h-full items-center justify-center">
          {getVisibleSlides().map(({ slide, isSelected, isLeft, isRight }, i) => (
            <Slide
              key={`${slide.name}-${i}`}
              slide={slide}
              isSelected={!!isSelected}
              isLeft={isLeft}
              isRight={isRight}
              onClick={() => goToSlide(slides.indexOf(slide))}
            />
          ))}
        </div>
      </div>

      {/* Info Section - no divider */}
      <div className="w-[82%] mt-14 flex flex-col md:flex-row justify-between h-[12%] ">
        <div className="w-[20%]">
          <h2 className="text-2xl text-white font-bold uppercase tracking-wider">
            {slides[current].name}
          </h2>
          <p className="text-xl text-gray-400 uppercase font-light">
            {slides[current].position}
          </p>
        </div>
        <p className="text-l text-gray-300 w-[71%] border-l border-white/50] pl-5 box-border">
          {slides[current].desc}
        </p>
      </div>
    </div>
  );
};

const CoreTeam = () => {

  return <Carousel slides={coreTeam} />;
};

export default CoreTeam;