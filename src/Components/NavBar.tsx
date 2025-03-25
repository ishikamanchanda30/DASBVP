import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const NavBar: React.FC = () => {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path
            ? "text-white font-bold"
            : "text-neutral-300 hover:text-white transition-colors";
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/10 backdrop-blur-lg border-b border-neutral-700/20 h-12 flex items-center justify-between px-10 space-x-2">

            <div className="flex gap-15">
                <Link
                    to="/about-us"
                    className={`${isActive('/')}`}
                >
                    ABOUT US
                </Link>
                <Link
                    to="/events"
                    className={`${isActive('/events')}`}
                >
                    EVENTS
                </Link>
                <Link
                    to="/flagship-event"
                    className={`${isActive('/flagship-event')}`}
                >
                    FLAGSHIP EVENT
                </Link>
            </div>

            <div className="flex-shrink-0">
                <Link to="/">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-8 w-auto"
                    />
                </Link>
            </div>

            <div className="flex gap-15">
                <Link
                    to="/team"
                    className={`${isActive('/team')}`}
                >
                    TEAM
                </Link>
                <Link
                    to="/portfolio"
                    className={`${isActive('/portfolio')}`}
                >
                    PORTFOLIO
                </Link>
                <Link
                    to="/contact"
                    className={`${isActive('/contact')}`}
                >
                    CONTACT
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
