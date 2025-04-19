import React from 'react';
import facultyMembers from '../data/Faculty'
const Faculty: React.FC = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? facultyMembers.length - 1 : prev - 1));
    };
    const handleNext = () => {
        setCurrentIndex((prev) => (prev === facultyMembers.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="min-w-screen bg-[#0D0D0D] text-[#D9D9D9] overflow-hidd">
            <div className="h-full mx-auto px-4 py-12 grid grid-rows-1 md:grid-cols-3">
                <div className=" flex flex-col p-5 justify-between ">

                    <div className="space-y-8">
                        <h1 className="text-5xl font-kumbh">
                            {facultyMembers[currentIndex].name}
                        </h1>

                        <p className="text-neutral-300 text-sm">
                            {facultyMembers[currentIndex].description}
                        </p>
                    </div>
                    <div>
                        <div className="flex gap-4 mt-3 md:mt-8">
                            <button
                                onClick={handlePrevious}
                                className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors"
                            >
                                <span className="sr-only">Previous</span>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button
                                onClick={handleNext}
                                className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 transition-colors"
                            >
                                <span className="sr-only">Next</span>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='p-5 flex justify-center items-center'>
                    <div className="flex items-center justify-center md:top-0 ">
                        {/*bacgroundimage*/}
                        <div className="absolute -rotate-12 w-60 h-60 md:w-54 md:h-54 lg:w-80 lg:h-80">
                            <img
                                src={facultyMembers[currentIndex].imageUrl}
                                alt="Dr. Arvind Rehalia"
                                className="w-full h-full object-cover grayscale brightness-50"
                            />
                        </div>
                        {/*bacgroundimage*/}
                        <div className="rotate-0 w-60 h-60 md:w-54 md:h-54 lg:w-80 lg:h-80">
                            <img
                                src={facultyMembers[currentIndex].imageUrl}
                                alt="Dr. Arvind Rehalia"
                                className="w-full h-full object-cover grayscale"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center md:justify-end md:place-items-end bottom-0 sm:mb-3 overflow-wrap">
                    <div className="text-6xl font-[600] text-end text-white md:p-4">
                        FACULTY<br />INCHARGE
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Faculty;