import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import options from '../assets/options.svg';

const NavbarMobile: React.FC = () => {
    const location = useLocation();
    const [nav, setNav] = useState(false);

    const isActive = (path: string) => {
        return location.pathname === path
            ? "text-white font-bold"
            : "text-neutral-300 hover:text-white transition-colors";
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/10 backdrop-blur-lg border-b border-neutral-700/20 h-12 flex items-center justify-between px-10 space-x-2">

            <div className="flex-shrink-0">
                <Link to="/">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-8 w-auto"
                    />
                </Link>
            </div>

            <div className='flex-shrink-0'>
                    <img
                        src={options}
                        alt="Logo"
                        className="h-6 w-auto"
                        onClick={()=>setNav(!nav)}
                    />
            </div>

            <div
             className='fixed top-12 left-[10%] w-[80%] flex flex-col bg-[#0D0D0D]/95 backdrop-blur-lg  z-100 border border-t-0 border-neutral-700 rounded-xl'
             style={{display: nav? "" : 'none'}}
             onClick={()=>setNav(false)}
            >
              <Link
                    to="/about-us"
                    className={`${isActive('/')} flex items-center justify-center w-full h-20`}
                >
                    ABOUT US
                </Link>
                <Link
                    to="/events"
                    className={`${isActive('/events')} flex items-center justify-center w-full h-20`}
                >
                    EVENTS
                </Link>
                <Link
                    to="/flagship-event"
                    className={`${isActive('/flagship-event')} flex items-center justify-center w-full h-20`}
                >
                    FLAGSHIP EVENT
                </Link>
                <Link
                    to="/team"
                    className={`${isActive('/team')} flex items-center justify-center w-full h-20`}
                >
                    TEAM
                </Link>
                <Link
                    to="/portfolio"
                    className={`${isActive('/portfolio')} flex items-center justify-center w-full h-20`}
                >
                    PORTFOLIO
                </Link>
                <Link
                    to="/contact"
                    className={`${isActive('/contact')} flex items-center justify-center w-full h-20`}
                >
                    CONTACT
                </Link>
            </div>

        </nav>
    );
};

export default NavbarMobile;
