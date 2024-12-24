import React, { useState, useEffect } from "react";
import Loader from "../common/Loader";

const Terms: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
        window.scrollTo(0, 0);
    }, []);
    return loading ? (
        <Loader />
    ) : (
        <>
            <div className="Privacy-Policy bg-webred py-12">
                <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 md:px-6">
                    <div className="policy-content text-center lg:text-left">
                        <h1 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                            Terms and Conditions
                        </h1>
                        <p className="text-lg text-white mb-8">
                            At Develope4u, we strive to provide a seamless and enjoyable experience for all our users. Please read through our Terms and Conditions carefully to understand the rules and guidelines that govern your use of our platform, services, and projects.
                        </p>

                        <ul className="policy-text bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-start">
                            <li className="text-gray-600 dark:text-gray-300 mb-4 list-disc text-md">
                                By using the platform, you agree to provide accurate information during registration and not engage in unauthorized access or misuse of content.
                            </li>

                            <li className="text-gray-600 dark:text-gray-300 mb-4 list-disc text-md">
                                Projects purchased are non-refundable and are delivered "as-is" based on their description.
                            </li>

                            <li className="text-gray-600 dark:text-gray-300 mb-4 list-disc text-md">
                                You receive a non-exclusive license to use the projects for personal or business purposes.
                            </li>

                            <li className="text-gray-600 dark:text-gray-300 mb-4 list-disc text-md">
                                Redistribution or resale of projects is strictly prohibited.
                            </li>

                            <li className="text-gray-600 dark:text-gray-300 mb-4 list-disc text-md">
                                The freelancer is not liable for any misuse, unintended outcomes, or issues arising from the use of the projects.
                            </li>

                            <li className="text-gray-600 dark:text-gray-300 mb-4 list-disc text-md">
                                Projects may require further customization based on specific needs.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Terms;