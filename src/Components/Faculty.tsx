import React from 'react';
import facultyMembers from '../data/Faculty'
const Faculty: React.FC = () => {

    return (
        <div className="min-w-screen bg-[#0D0D0D] text-[#D9D9D9] overflow-hidden">
            <div className="h-full mx-auto px-4 py-12 grid grid-rows-1 md:grid-cols-3">
                <div className=" flex flex-col p-5 justify-between mb-[7%] md:m-0 ">

                    <div className="space-y-8">
                        <h1 className="text-5xl font-kumbh">
                            {facultyMembers[0].name}
                        </h1>

                        <p className="text-neutral-300 text-sm">
                            {facultyMembers[0].description}
                        </p>
                    </div>
                </div>
                <div className='p-5 flex justify-center items-center'>
                    <div className="flex items-center justify-center md:top-0 ">
                        {/*bacgroundimage*/}
                        <div className="absolute -rotate-12 w-60 h-60 md:w-54 md:h-54 lg:w-80 lg:h-80">
                            <img
                                src={facultyMembers[0].imageUrl}
                                alt="Dr. Arvind Rehalia"
                                className="w-full h-full object-cover grayscale brightness-50"
                            />
                        </div>
                        {/*bacgroundimage*/}
                        <div className="rotate-0 w-60 h-60 md:w-54 md:h-54 lg:w-80 lg:h-80">
                            <img
                                src={facultyMembers[0].imageUrl}
                                alt="Dr. Arvind Rehalia"
                                className="w-full h-full object-cover grayscale"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end mr-[4%] mt-[7%] md:m-0 items-end md:justify-end md:place-items-end bottom-0 sm:mb-3 overflow-wrap ">
                    <div className="md:text-6xl text-5xl font-[600] text-end text-white md:p-4 ">
                        FACULTY<br />INCHARGE
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Faculty;