import left from '../assets/left.png'
import right from '../assets/right.png'
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
    const yPosition = `${(scrollPositionY) * 130}%`;
    const fontSize = `${5 + (scrollPositionY * 4)}rem`;

    return (
        <div className='bg-[#0D0D0D] min-w-screen scroll-smooth h-[100vh] flex justify-center text-center items-center font-bold text-white '>
            <h1 className='' style={{
                position: 'absolute',
                fontSize: fontSize,
                transform: 'translateY(1%)',
                bottom: yPosition,
                transition: 'font-size 0.1s ease-in ease-out',
        
            }}>
                OUR TEAM
            </h1>
        </div>

    );
};

export default TeamHeading;