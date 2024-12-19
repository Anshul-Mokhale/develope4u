import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import navlogo from "../images/lgo.png";
import { FiMenu, FiX, FiMoon, FiSun, FiLogIn } from "react-icons/fi"; // Import icons for menu and dark mode toggle

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false); // Sidebar state
    const [darkMode, setDarkMode] = useState<boolean>(false); // Dark mode state

    // Toggle sidebar
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    // Toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
        }
    };

    // Load dark mode preference from local storage
    useEffect(() => {
        const isDark = localStorage.getItem("theme") === "dark";
        if (isDark) {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    // Save dark mode preference
    useEffect(() => {
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-900 shadow-md">
            {/* Logo and Title */}
            <div className="flex items-center space-x-2">
                <img src={navlogo} className="w-14" alt="navbar logo" />
                <h3 className="text-2xl font-bold text-webred dark:text-gray-200 hidden lg:block">
                    Develope4u
                </h3>
            </div>

            {/* Navbar Links (Large screens) */}
            <ul className="hidden lg:flex items-center gap-8">
                <li>
                    <NavLink
                        to="/"
                        className="text-gray-700 dark:text-gray-300 hover:text-webred dark:hover:text-web2red transition-colors duration-300"
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className="text-gray-700 dark:text-gray-300 hover:text-webred dark:hover:text-web2red transition-colors duration-300"
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className="text-gray-700 dark:text-gray-300 hover:text-webred dark:hover:text-web2red transition-colors duration-300"
                    >
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/sign-in"
                        className="inline-flex items-center bg-webred text-white px-4 py-2 rounded-md shadow-lg hover:bg-web2red hover:shadow-xl transition-transform duration-300"
                    >
                        Login <FiLogIn className="ml-2" />
                    </NavLink>
                </li>
            </ul>

            {/* Menu Button (Small screens) */}
            <div className="flex items-center space-x-4 lg:hidden">
                <button
                    className="text-3xl text-gray-800 dark:text-gray-200"
                    onClick={toggleSidebar}
                >
                    <FiMenu />
                </button>
            </div>

            {/* Sidebar for Small Screens */}
            <div
                className={`fixed top-0 right-0 w-64 h-full bg-gray-100 dark:bg-gray-800 shadow-lg z-50 transform transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-end p-4">
                    <button
                        onClick={toggleSidebar}
                        className="text-3xl text-gray-800 dark:text-gray-200"
                    >
                        <FiX />
                    </button>
                </div>

                <ul className="flex flex-col items-center gap-6 mt-10">
                    <li>
                        <NavLink
                            to="/"
                            className="text-gray-700 dark:text-gray-300 hover:text-webred dark:hover:text-web2red"
                            onClick={toggleSidebar}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className="text-gray-700 dark:text-gray-300 hover:text-webred dark:hover:text-web2red"
                            onClick={toggleSidebar}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className="text-gray-700 dark:text-gray-300 hover:text-webred dark:hover:text-web2red"
                            onClick={toggleSidebar}
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/sign-in"
                            className="bg-webred text-white px-4 py-2 rounded-md hover:bg-web2red transition-all duration-300"
                            onClick={toggleSidebar}
                        >
                            Login
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
