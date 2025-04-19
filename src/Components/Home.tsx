import { useState, useEffect } from "react";
function Home() {
    const [rotation, setRotation] = useState(0);
    const minRotation = -12;
    const maxRotation = 12;

    useEffect(() => {
        const handleScroll = () => {
            const newRotation = minRotation + (1 * (maxRotation - minRotation));
            setRotation(newRotation);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <div className="w-screen h-screen bg-[#0D0D0D] text-white font-kumbh relative overflow-hidden">

            <div className={`absolute w-[50%] h-[40%] top-[30%] left-[25%] leading-[1.4] tracking-tighter font-semibold flex justify-center items-center z-5 `} style={{
                transform: `rotate(-${rotation}deg)`,
                transition: 'transform 0.5s ease-in'
            }}>
                <span className='flex items-center justify-center h-full'>
                    <span className='lg:text-[27rem] translate-y-[-4%] md:text-[24rem] text-[16rem]'>D</span>
                    <span className='lg:text-[18rem] flex items-center md:text-[15rem] text-[10rem]'>A</span>
                    <span className='lg:text-[27rem] translate-y-[-3%] md:text-[24rem] text-[16rem]'>S</span>
                </span>
            </div>
            <div
                className={`absolute lg:w-[38%] md:h-[36%] md:top-[32%] lg:left-[31%]
                    lg:text-[22rem] leading-[1.4]  font-semibold flex justify-center items-center 
                    bg-[#0D0D0D] text-white overflow-hidden
                    [box-shadow:inset_0_0_20px_5px_rgba(255,255,255,0.3)] z-6 md:text-[16rem]
                    md:w-[46%] md:left-[29%] text-[10rem] w-[56%] left-[22%] h-[26%] top-[37%]`}
                style={{
                    transform: `rotate(-${rotation /4}deg)`,
                    transition: 'transform 0.5s ease-in'
                }}
            >
                <span className='rotate-5 translate-x-[-5%]'>DAS</span>
            </div>
            <div
                className='absolute lg:w-[20%] md:h-[25%] md:top-[37.5%] lg:left-[40%] rotate-1
                    lg:text-[13rem] leading-[1.4] tracking-tighter font-semibold flex justify-center items-center 
                    bg-[#0D0D0D] text-white overflow-hidden
                    [box-shadow:inset_0_0_20px_5px_rgba(255,255,255,0.3)] z-6 md:text-[10rem] md:w-[26%]
                     md:left-[37%] text-[7rem] w-[34%] left-[33%] h-[16%] top-[42%]'
                style={{
                    transform: `rotate(${(rotation / 3)}deg)`,
                    transition: 'transform 0.5s ease-in'
                }}
            >
                <span className='rotate-4 translate-x-[-2%]'>DAS</span>
            </div>

            <div className="hidden md:block absolute top-20 right-12 w-20 h-[2px] bg-white"></div>
            <div className="hidden md:block absolute top-20 right-12 w-[2px] h-2 bg-white translate-x-[calc(100%-2px)]"></div>

            <div className="hidden md:block absolute bottom-20 left-12 w-20 h-[2px] bg-white"></div>
            <div className="hidden md:block absolute bottom-20 left-12 w-[2px] h-2 bg-white"></div>

            <div className="absolute top-20 left-5 right-5  max-w-sm text-lg md:text-m text-left leading-5">
                Welcome to the art society of BVCOE. We shoot, sketch, design, and create — one frame, one pixel, one idea at a time.
            </div>

            <div className="absolute bottom-20 right-5 max-w-sm text-lg md:text-m text-right leading-5">
                We don’t just create visuals — we craft experiences.
                Every frame is a story waiting to unfold.
            </div>

            <div className="hidden md:block absolute bottom-32 left-1/2 transform -translate-x-1/2 text-center text-sm text-gray-400">
                SINCE 2017
            </div>

        </div>
    );
}

export default Home;
