import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../common/Loader";


const About: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => setLoading(false), 1000);

    }, []);
    return loading ? (
        <Loader />
    ) : (
        <div className="dark:bg-boxdark bg-bodydark1 p-4">
            <section className="px-6 md:px-12 lg:px-20 py-12 mb-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-lg">
                <div className="gap-80 items-center">
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-2xl md:text-4xl font-bold text-webred mb-6 text-center">
                            Empowering Students and Businesses with Ready-Made Projects
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                            Our Mission: "To simplify project creation for college students and
                            businesses by offering affordable, high-quality, and ready-to-use
                            solutions that save time and unlock potential."
                        </p>

                        <Link
                            to="/contact"
                            className="inline-block bg-webred text-white px-6 py-3 rounded-md shadow-lg hover:bg-web2red transition-transform duration-300"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
            <section className="px-6 md:px-12 lg:px-20 py-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 mb-4 rounded-lg">
                <div className="flex flex-col items-center text-center md:text-left md:flex-row md:items-start md:gap-10">
                    {/* Text Content */}
                    <div className="w-full">
                        <h2 className="text-2xl md:text-4xl font-bold text-webred mb-6">
                            Who We Are
                        </h2>
                        <p className=" text-gray-600 dark:text-gray-300 mb-4">
                            We are a platform dedicated to bridging the gap between ideas and
                            execution. Whether you’re a college student working on an academic
                            project or a business professional seeking practical solutions, we’re
                            here to support your journey.
                        </p>
                        <p className=" text-gray-600 dark:text-gray-300 mb-6">
                            Our extensive library of pre-built projects is designed to help you meet
                            deadlines, achieve goals, and bring innovation to life.
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <Link
                                to="/about"
                                className="inline-block bg-webred text-white px-6 py-3 rounded-md shadow-lg hover:bg-web2red transition-transform duration-300"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-6 md:px-12 lg:px-20 py-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 mb-4 rounded-lg">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-4xl font-bold text-webred">
                        What Makes Us Unique?
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300 p-6 text-center">
                        <h3 className="text-xl md:text-2xl font-semibold text-webred mb-4">
                            🤝 Collaboration Opportunities
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            A platform where students and businesses can connect and share ideas.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300 p-6 text-center">
                        <h3 className="text-xl md:text-2xl font-semibold text-webred mb-4">
                            📚 Learning and Growth
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Projects designed to help you gain practical knowledge and skills.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition duration-300 p-6 text-center">
                        <h3 className="text-xl md:text-2xl font-semibold text-webred mb-4">
                            🌍 Real-World Impact
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            From college classrooms to corporate offices, our solutions make a
                            difference.
                        </p>
                    </div>
                </div>
            </section>
            <section className="px-6 md:px-12 lg:px-20 py-16 bg-webred text-white text-center rounded-lg">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">
                        Join Our Community
                    </h2>
                    <p className="text-lg md:text-xl mb-6">
                        "Thousands of students and professionals trust us for their project needs.
                        Be part of the journey and discover how we can help you succeed."
                    </p>
                    <div>
                        <Link
                            to="/sign-up"
                            className="bg-white text-webred px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-gray-100 transition-transform duration-300"
                        >
                            Join
                        </Link>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default About;