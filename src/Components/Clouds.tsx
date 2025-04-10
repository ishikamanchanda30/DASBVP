import { useEffect, useState } from "react"
import crb from "../assets/Clouds/Group 50cbr.svg"
import clb from "../assets/Clouds/Group 49clb.svg"
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

    const yPosition = `-${(scrollPosition) * 130}%`;
    const xPosition = `-${(scrollPosition) * 20}%`;
    return (

        <div className="min-h-screen min-w-screen max-w-screen bg-[#0d0d0d] relative flex justfiy-between overflow-hidden z-10">
            <div className='absolute bottom-0 left-0' style={{
                transform: 'translateY(1%)',
                bottom: yPosition,
                left: xPosition,
                zoom: 2.1,
            }}>
                <img src={clb} alt="" className='w-[80%]' />
            </div>

            <div className='absolute right-0 bottom-0 flex justify-end' style={{
                transform: 'translateY(1%)',
                bottom: yPosition,
                right: xPosition,
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