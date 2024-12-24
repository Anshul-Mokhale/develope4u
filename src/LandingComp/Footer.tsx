import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-100 dark:bg-gray-900 py-8">
            {/* Logo Section */}
            <div className="container mx-4 lg:mx-auto lg:px-4 flex flex-col md:flex-row justify-between items-start md:items-start mb-6">
                {/* Logo */}
                <div className="mb-6 md:mb-0 text-start md:text-left">
                    <h1 className="text-2xl font-bold text-webred">Develope4u</h1>
                    <p className="text-gray-900 dark:text-gray-300">Unlock ready-made projects for your needs.</p>
                </div>

                {/* Quick Links */}
                <div className="text-start">
                    <h2 className="text-lg font-semibold text-webred mb-4">Quick Links</h2>
                    <div className="flex flex-col gap-3 text-gray-900 dark:text-gray-300">
                        <Link to="/" className="hover:underline">Home</Link>
                        <Link to="/about" className="hover:underline">About</Link>
                        <Link to="/contact" className="hover:underline">Contact</Link>
                        <Link to="/shop" className="hover:underline">Shop</Link>
                    </div>
                </div>

                {/* Legal Links */}
                <div className="text-start md:text-start">
                    <h2 className="text-lg font-semibold text-webred mb-4">Legal</h2>
                    <div className="flex flex-col gap-3 text-gray-900 dark:text-gray-300">
                        <Link to="/terms-and-conditions" className="hover:underline">Terms and Conditions</Link>
                        <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                        <Link to="/refund-policy" className="hover:underline">Refund Policy</Link>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-gray-700 pt-4 text-center">
                <p>
                    &copy; {currentYear} Designed & Developed by{" "}
                    <a
                        href="https://anshul-mokhale.netlify.app"
                        className="text-webred font-semibold hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Anshul Mokhale
                    </a>
                </p>
            </div>

        </footer>
    );
};

export default Footer;
