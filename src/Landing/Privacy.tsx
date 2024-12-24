import React, { useState, useEffect } from "react";
import Loader from "../common/Loader";

const Privacy: React.FC = () => {
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
                            Privacy Policy
                        </h1>
                        <p className="text-lg text-white mb-8">
                            At Develope4u, we value your privacy and are committed to protecting your personal data. Please read through our privacy policy to understand how we collect, use, and safeguard your information.
                        </p>

                        <ul className="policy-text bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-start">
                            <li className="text-gray-600 dark:text-gray-300 mb-4 list-disc text-md">
                                We collect personal information such as your name, email address, and contact details during registration or purchase.
                            </li>
                            <li className="text-gray-600 dark:text-gray-300 mb-4 list-disc text-md">
                                We store students' proof of identity (e.g., student ID) for verification purposes.
                            </li>

                            <li className="text-gray-600 dark:text-gray-300 mb-4 list-disc text-md">
                                Payment details are securely processed through third-party payment gateways to ensure your data is kept safe.
                            </li>

                            <li className="text-gray-600 dark:text-gray-300 mb-4 list-disc text-md">
                                We use cookies to enhance your browsing experience and improve the functionality of our platform.
                            </li>

                            <li className="text-gray-600 dark:text-gray-300 mb-4 list-disc text-md">
                                Your data is used to deliver purchased projects, send updates, and improve our services to better meet your needs.
                            </li>

                            <li className="text-gray-600 dark:text-gray-300 mb-4 list-disc text-md">
                                We do not share your data with unauthorized third parties. We only share it with trusted services, such as payment processors, to facilitate transactions.
                            </li>

                            <li className="text-gray-600 dark:text-gray-300 mb-4 list-disc text-md">
                                You have the right to access, correct, or delete your personal information at any time. Feel free to contact us if you'd like to exercise your rights.
                            </li>

                            <li className="text-gray-600 dark:text-gray-300 mb-4 list-disc text-md">
                                You can opt-out of receiving promotional communications at any time by following the unsubscribe instructions in the emails or contacting us directly.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Privacy;