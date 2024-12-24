import React, { useState, useEffect } from "react";
import Loader from "../common/Loader";

const Refund: React.FC = () => {
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
                    <div className="policy-content text-center lg:text-left w-full">
                        <h1 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                            Refund Policy
                        </h1>
                        <p className="text-lg text-white mb-8">
                            At Develope4u, we want to ensure that you are completely satisfied with your purchase. However, please note that all sales are final, and we do not offer refunds.
                        </p>

                        <ul className="policy-text bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-start">
                            <li className="text-gray-600 dark:text-gray-300 mb-4 list-disc text-md">
                                All sales are final due to the nature of digital products.
                            </li>

                            <li className="text-gray-600 dark:text-gray-300 mb-4 list-disc text-md">
                                If the project delivered has any issues, such as errors or problems with the file, we will work to resolve them promptly.
                            </li>

                            <li className="text-gray-600 dark:text-gray-300 mb-4 list-disc text-md">
                                Users must contact support within 7 days of receiving the project and provide details about the issue (e.g., screenshots or error logs).
                            </li>

                            <li className="text-gray-600 dark:text-gray-300 mb-4 list-disc text-md">
                                While no refunds are given, we will make every effort to correct any problems with the project to ensure it meets the described functionality.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Refund;