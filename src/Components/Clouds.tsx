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

    const yTransform = `${(-scrollPosition) * 100}%`;
    return (

        <div className="min-w-screen  h-screen bg-[#0d0d0d] relative flex justfiy-between overflow-hidden z-10">
            <div className='absolute left-0 flex md:-bottom-40 -bottom-10' style={{
                transform: `translateY(${yTransform}) scale(1.2)`,
            }}>
                <img src={clb} alt="" className='md:w-[80%]' />
            </div>

            <div className='absolute right-0 flex justify-end md:-bottom-40 -bottom-20' style={{
                transform: `translateY(${yTransform}) scale(1.3)`,
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