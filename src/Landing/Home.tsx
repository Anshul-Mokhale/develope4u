import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Typewriter from "typewriter-effect";
const Home: React.FC = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            {/* Hero Section */}
            <section className="flex flex-col  items-center justify-center text-center px-4 py-16 md:py-24 lg:py-32">
                <h1 className="flex flex-col md:flex-row text-3xl md:text-5xl lg:text-6xl font-bold text-webred mb-6 leading-tight">
                    Welcome to {" "}
                    <span className="text-web2red text-4xl">
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

                <p className="text-base md:text-lg lg:text-xl mb-8 max-w-xl lg:max-w-3xl text-gray-600 dark:text-gray-300">
                    Building high-quality, responsive, and user-friendly solutions to grow your
                    business. Let's achieve your goals together.
                </p>
                <Link
                    to="/about"
                    className="inline-flex items-center bg-webred text-white px-5 py-3 rounded-md shadow-lg hover:bg-web2red hover:translate-y-1 hover:shadow-xl active:translate-y-0 transition-transform duration-300"
                >
                    Learn More <FiArrowRight className="ml-2" />
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
        </div>
    );
}

export default Home;