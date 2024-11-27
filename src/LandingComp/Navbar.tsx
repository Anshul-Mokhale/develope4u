import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navlogo from "../images/lgo.png";
import { FiMenu, FiX } from "react-icons/fi";  // Import icons from react-icons

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);  // Sidebar state

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="nave flex items-center justify-between px-4 py-2 fixed w-full z-99999 bg-white dark:bg-boxdark-2 text-black-2 dark:text-bodydark1">
            {/* Logo and Title */}
            <div className="nave-1 flex items-center">
                <img src={navlogo} className="w-14" alt="navbar logo" />
                <h3 className="text-xl text-webred font-bold hidden lg:block">Develope4u</h3>
            </div>

            {/* Menu Icon (Visible only on small screens) */}
            <button className="lg:hidden text-3xl" onClick={toggleSidebar}>
                <FiMenu />
            </button>

            {/* Navbar Links (Hidden on small screens, visible on large screens) */}
            <ul className="hidden lg:flex gap-4">
                <li className="list-none"><NavLink to="/">Home</NavLink></li>
                <li className="list-none"><NavLink to="/about">About</NavLink></li>
                <li className="list-none"><NavLink to="/contact">Contact</NavLink></li>
                <li className="list-none"><NavLink className="border-2 px-2 py-1 border-webred bg-webred hover:bg-web2red hover:border-web2red rounded-md text-white" to="/sign-in">Login</NavLink></li>
            </ul>

            {/* Sidebar (for small screens) */}
            <div className={`fixed top-0 right-0 w-64 h-full bg-white dark:bg-boxdark-2 shadow-lg z-50 transform transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex justify-end p-4">
                    <button onClick={toggleSidebar} className="text-3xl">
                        <FiX />
                    </button>
                </div>
                <ul className="flex flex-col items-center gap-6 mt-10">
                    <li className="list-none"><NavLink to="/" onClick={toggleSidebar}>Home</NavLink></li>
                    <li className="list-none"><NavLink to="/about" onClick={toggleSidebar}>About</NavLink></li>
                    <li className="list-none"><NavLink to="/contact" onClick={toggleSidebar}>Contact</NavLink></li>
                    <li className="list-none"><NavLink to="/sign-in" onClick={toggleSidebar}>Login</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
