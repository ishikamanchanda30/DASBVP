import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
const NavBar: React.FC = () => {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path ? "text-white" : "text-neutral-300";
    };

    return (
        <>
            <div className="w-full h-10 absolute bg-neutral-700/10 border border-neutral-700/20 backdrop-blur-lg  items-center" >
                <div className=" w-full h-10 justify-between px-10 items-center absolute flex flex-row items-center">
                    <div className='flex flex-row gap-30'>
                        <Link to="/about-us" className={`${isActive('/about-us')} text-36px font-light font-kumbh hover:text-white transition-colors`}>
                            ABOUT US
                        </Link>
                        <Link to="/events" className={`${isActive('/events')} text-36px font-light font-kumbh hover:text-white transition-colors`}>
                            EVENTS
                        </Link>
                        <Link to="/flagship-event" className={` ${isActive('/flagship-event')} text-36px font-light font-kumbh hover:text-white transition-colors`}>
                            FLAGSHIP EVENT
                        </Link>
                    </div>
                    <div className='flex flex-row gap-30'>

                        <Link to="/about-us"> <img src={logo} alt="logo" className='w-12 h-5' /></Link>
                    </div>
                    <div className='flex flex-row gap-30'>
                        <Link to="/team" className={` ${isActive('/team')} text-36px font-light font-kumbh hover:text-white transition-colors`}>
                            TEAM
                        </Link>

                        <Link to="/portfolio" className={` ${isActive('/portfolio')} text-36px font-light font-kumbh hover:text-white transition-colors`}>
                            PORTFOLIO
                        </Link>
                        <Link to="/contact" className={`${isActive('/contact')} text-36px font-light font-kumbh hover:text-white transition-colors`}>
                            CONTACT
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
};

export default NavBar;
