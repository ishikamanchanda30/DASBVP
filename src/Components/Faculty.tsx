import React from 'react';
import faculty from '../assets/faculty.jpg';
interface FacultyMember {
    name: string;
    description: string;
    role: string;
    imageUrl: string;
}

const Faculty: React.FC = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const facultyMembers: FacultyMember[] = [
        {
            name: "DR. ARVIND REHALIA",
            description: "Lorem ipsum dolor sit amet consectetur. Enim est sit gravida tempus urna ut mi eget sagittis. Posuere enim velit vel a molestie eu penatibus sed blandit. Magna mi dui vulputate pellentesque hendrerit elit.",
            role: "DAS MEMBER",
            imageUrl: faculty 
        },
        {
            name: "DR. ARVIND REHALIA",
            description: "Lorem ipsum dolor sit amet consectetur. Enim est sit gravida tempus urna ut mi eget sagittis. Posuere enim velit vel a molestie eu penatibus sed blandit. Magna mi dui vulputate pellentesque hendrerit elit.",
            role: "DAS MEMBER",
            imageUrl: faculty
        },

    ];

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? facultyMembers.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === facultyMembers.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="w-screen h-screen bg-[#0D0D0D] text-[#D9D9D9]">

            <div className="h-full mx-auto px-4 py-12 relative grid grid-cols-1 md:grid-cols-3">
                <div className=" flex flex-col p-5 justify-between">
            
                    <div className="space-y-8">
                        <h1 className="text-5xl font-kumbh">
                            {facultyMembers[currentIndex].name}
                        </h1>

                        <p className="text-neutral-300">
                            {facultyMembers[currentIndex].description}
                        </p>
                    </div>
                    <div>
                  
                        <div className="flex gap-4 mt-8">
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
               
                    <div className="relative flex ">
                        <div className="relative w-70 transform rotate-6 overflow-hidden rounded-lg aspect-square ">
                            <img
                                src={facultyMembers[currentIndex].imageUrl}
                                alt={facultyMembers[currentIndex].name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
         
                <div className="relative">
                    <div className="absolute bottom-5 right-5 text-6xl md:text-8xl font-[600] text-white p-4">
                        FACULTY<br />INCHARGE
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Faculty;