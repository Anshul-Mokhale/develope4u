import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Typewriter from "typewriter-effect";
import "./home.css";
import { motion } from "framer-motion";
import Loader from "../common/Loader";
import astrologyImg from "../images/astrodiary.png";
import portfolioImg from "../images/portfolio.png";
import realestateImg from "../images/daksh.png";
import dashboardImg from "../images/Regenapk.png";
import Testimonials from "./Testimonials";

const Home: React.FC = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const projects = [
        { name: "Astrology Landing Page", img: astrologyImg },
        { name: "Portfolio Website", img: portfolioImg },
        { name: "Real Estate Website", img: realestateImg },
        { name: "Admin Dashboard Website", img: dashboardImg },
    ];

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);
    return loading ? (
        <Loader />
    ) : (
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            {/* Hero Section */}
            <section className="home1 flex flex-col  items-center justify-center text-center px-4 py-16 md:py-24 lg:py-32">
                <h1 className="flex flex-col md:flex-row text-3xl md:text-5xl lg:text-6xl font-bold md:gap-4 text-webred mb-6 leading-tight">
                    Welcome to {" "}
                    <span className="text-web2red text-4xl md:text-6xl">
                        <Typewriter
                            options={{
                                strings: ["Develope4u"],
                                autoStart: true,
                                loop: true,
                                cursor: "|",
                            }}
                        />
                    </span>
                </h1>

                <p className="text-base md:text-lg lg:text-xl mb-8 max-w-xl lg:max-w-3xl text-gray-300">
                    Unlock Ready-Made Projects for All Your Needs
                    Explore, Download, and Customize Projects for Academic, Business, and Professional Goals.
                </p>
                <Link
                    to="/about"
                    className="inline-flex items-center bg-webred text-white px-5 py-3 rounded-md shadow-lg hover:bg-web2red hover:translate-y-1 hover:shadow-xl active:translate-y-0 transition-transform duration-300"
                >
                    Explore Now <FiArrowRight className="ml-2" />
                </Link>
            </section>

            {/* Features Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12 lg:px-20 py-12 bg-gray-50 dark:bg-gray-800">
                <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <h2 className="text-xl md:text-2xl font-semibold text-webred mb-3">
                        🚀 Fast Development
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        We deliver projects quickly without compromising quality using agile
                        practices.
                    </p>
                </div>

                <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <h2 className="text-xl md:text-2xl font-semibold text-webred mb-3">
                        📱 Responsive Design
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        Designs that look stunning on all devices – desktops, tablets, and mobile.
                    </p>
                </div>

                <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    <h2 className="text-xl md:text-2xl font-semibold text-webred mb-3">
                        🌐 24/7 Support
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        Our dedicated team is available to assist you anytime, anywhere.
                    </p>
                </div>
            </section>
            {/* Trending Projects Section */}
            <section className="px-6 md:px-12 lg:px-20 py-12 bg-gray-100 dark:bg-gray-900">
                <h2 className="text-2xl md:text-4xl font-bold text-center text-webred mb-8">
                    Trending Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg overflow-hidden transition duration-300"
                        >
                            <div className="w-full h-auto flex items-center justify-center bg-gray-200 dark:bg-gray-800">
                                <img
                                    src={project.img}
                                    alt={project.name}
                                    className="w-full max-h-80 object-contain"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-webred mb-4">
                                    {project.name}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    Discover the amazing features and design of the {project.name}.
                                </p>
                                <Link
                                    to={`/projects/${project.name.toLowerCase().replace(/ /g, "-")}`}
                                    className="inline-block bg-webred text-white px-4 py-2 rounded-md shadow hover:bg-web2red transition-transform duration-300"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="flex flex-col items-center text-center px-4 py-16 bg-webred text-white">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                    Ready to take your business to the next level?
                </h2>
                <p className="text-lg mb-6">
                    Contact us today and let's start building something amazing together.
                </p>
                <Link
                    to="/contact"
                    className="bg-white text-webred px-6 py-3 rounded-md font-semibold hover:bg-gray-100 hover:translate-y-1 transition-transform duration-300"
                >
                    Get In Touch
                </Link>
            </section>
            <section className="px-6 md:px-12 lg:px-20 py-12 bg-gray-50 dark:bg-gray-800">
                <h2 className="text-2xl md:text-4xl font-bold text-center text-webred mb-8">
                    Why Choose Us?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: "Quality-Assured Projects", icon: "🔧", description: "We focus on delivering high-quality projects that adhere to industry standards." },
                        { title: "Affordable Pricing", icon: "💰", description: "Our pricing is transparent and competitive, offering great value for the quality of work provided." },
                        { title: "Wide Technology Stack", icon: "🌐", description: "We leverage a wide range of modern technologies to build versatile and scalable solutions." },
                        { title: "Instant Downloads", icon: "⚡", description: "No waiting around! We offer instant access to download the projects you need, so you can get started immediately without any delays." },
                        { title: "Easy Customization", icon: "🔄", description: "Our projects are designed with customization in mind, making it simple for you to adapt and modify them to fit your unique requirements." },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300 p-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.3, duration: 0.6 }}
                        >
                            <h3 className="text-2xl font-semibold text-webred mb-4">
                                <span className="text-3xl">{item.icon}</span> {item.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>
            <section>
                <Testimonials />
            </section>
        </div >
    );
}

export default Home;