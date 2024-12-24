import React, { useState, useEffect } from "react";
import Loader from "../common/Loader";

const Contact: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
        window.scrollTo(0, 0);
    }, []);
    return loading ? (
        <Loader />
    ) : (
        <section className="bg-gradient-to-r from-webred via-web2red to-gray-900 text-gray-100 min-h-screen py-12 flex items-center">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
                        Contact Us
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                        We’d love to hear from you! Whether you have questions, feedback, or need support,
                        feel free to reach out.
                    </p>
                </div>

                {/* Form and Contact Info */}
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Contact Form */}
                    <div className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 flex-1">
                        <form>
                            <div className="mb-6">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 border dark:border-gray-600 rounded-lg dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-webred focus:border-webred focus:outline-none"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 border dark:border-gray-600 rounded-lg dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-webred focus:border-webred focus:outline-none"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full px-4 py-3 border dark:border-gray-600 rounded-lg dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-webred focus:border-webred focus:outline-none"
                                    placeholder="Write your message"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-webred to-web2red text-white py-3 rounded-lg shadow-md hover:from-web2red hover:to-webred transition-transform duration-300 font-bold"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="flex-1">
                        <div className="bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-300 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
                            <h2 className="text-2xl font-bold text-webred mb-4">
                                Get in Touch
                            </h2>
                            <p className="mb-6">
                                Our team is here to assist you. Reach out to us using the details below.
                            </p>
                            <div className="space-y-6">
                                <p className="flex items-center">
                                    <span className="text-webred text-2xl mr-4">📍</span>
                                    <span>Amravati, Maharashtra, India. 444 607</span>
                                </p>
                                <p className="flex items-center">
                                    <span className="text-webred text-2xl mr-4">📞</span>
                                    <span>+91 8766865573</span>
                                </p>
                                <p className="flex items-center">
                                    <span className="text-webred text-2xl mr-4">✉️</span>
                                    <span>contact@develope4u.site</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
