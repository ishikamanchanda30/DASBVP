import { useEffect, useState } from "react"
import crb from "../assets/Clouds/crb.svg"
import clb from "../assets/Clouds/clb.svg"
import TeamHeading from "./TeamHeading"

const Clouds = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentageY = Math.min(window.scrollY / scrollHeight, 1);
            setScrollPosition(scrollPercentageY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    }, []);

    const yPosition = `${(scrollPosition) * 200}%`;
    return (

        <div className="min-w-screen max-w-screen h-[20%] bg-[#0d0d0d] relative flex justfiy-between overflow-hidden z-10">
            <div className='absolute bottom-0 left-0' style={{
                transform: 'translateY(0.5%)',
                bottom: yPosition,
    
                zoom: 2.1,
            }}>
                <img src={clb} alt="" className='md:w-[80%]' />
            </div>

            <div className='absolute right-0 bottom-0 flex justify-end' style={{
                transform: 'translateY(1%)',
                bottom: yPosition,
                zoom: 1.2,

            }}>
                <img src={crb} alt="" className='w-[80%]' />
            </div>
            <div className="-z-5">
                <TeamHeading />
            </div>
        </div>


    )
}

export default Clouds