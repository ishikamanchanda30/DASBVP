import React, { useEffect, useState } from 'react';

const TeamHeading: React.FC = () => {
    const [scrollPositionY, setScrollPositionY] = useState(0);


    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

            const scrollPercentageY = Math.min(window.scrollY / scrollHeight, 1);

            setScrollPositionY(scrollPercentageY);
            console.log(scrollPositionY);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className={`bg-[#0d0d0d] min-w-screen h-screen max-h-screen scroll-smooth flex justify-center text-center text-9xl md:text-5xl lg:text-9xl items-center font-bold text-white overflow-hidden`}>
            <h1 className='' style={{
                position: 'absolute',
                bottom: '50%',
                transition: '0.1s ease-in ease-out',
                overflow: 'hidden',

            }}>
                OUR TEAM
            </h1>
        </div>

    );
};

export default TeamHeading;