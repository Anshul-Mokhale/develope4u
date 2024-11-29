import { useEffect, useState } from 'react';
import image1 from "../images/home1.png"
import image2 from "../images/ecommercewebsite.png"
import image3 from "../images/collegeproject.png"
import image4 from "../images/messageapk.png"
import image5 from "../images/Maintenance.png"
import { Link } from "react-router-dom";
import { FaGoogle, FaFigma, FaDropbox, FaFacebook } from "react-icons/fa";
import "./home.css";

const Home: React.FC = () => {
    const [isVisibleHome3, setIsVisibleHome3] = useState(false);
    const [isVisibleHome4, setIsVisibleHome4] = useState(false);
    const [isVisibleHome5, setIsVisibleHome5] = useState(false);
    const [isVisibleHome6, setIsVisibleHome6] = useState(false);
    useEffect(() => {
        const observerHome3 = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisibleHome3(true);  // Trigger animation for home-3
                    }
                });
            },
            { threshold: 0.2 }
        );

        const observerHome4 = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisibleHome4(true);  // Trigger animation for home-4
                    }
                });
            },
            { threshold: 0.2 }
        );
        const observerHome5 = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisibleHome5(true);  // Trigger animation for home-3
                    }
                });
            },
            { threshold: 0.2 }
        );
        const observerHome6 = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisibleHome6(true);  // Trigger animation for home-3
                    }
                });
            },
            { threshold: 0.2 }
        );

        const elementHome3 = document.querySelector('.home-3');
        const elementHome4 = document.querySelector('.home-4');
        const elementHome5 = document.querySelector('.home-5');
        const elementHome6 = document.querySelector('.home-6');
        if (elementHome3) observerHome3.observe(elementHome3);
        if (elementHome4) observerHome4.observe(elementHome4);
        if (elementHome5) observerHome5.observe(elementHome5);
        if (elementHome6) observerHome6.observe(elementHome6);

        return () => {
            if (elementHome3) observerHome3.unobserve(elementHome3); // Clean up observer for home-3
            if (elementHome4) observerHome4.unobserve(elementHome4); // Clean up observer for home-4
            if (elementHome5) observerHome5.unobserve(elementHome5);
            if (elementHome6) observerHome6.unobserve(elementHome6);
        };
    }, []);
    return (
        <div className="dark:bg-boxdark pt-16 px-4 pb-4">
            <div className="home-1 flex flex-col-reverse md:flex-row items-center justify-between p-4 bg-white dark:bg-boxdark-2">
                <div className="home-1-left flex flex-col gap-4 w-full md:w-1/2 text-center md:text-start">
                    <h1 className="text-2xl md:text-6xl text-webred font-bold">From Concept to Code, We've Got You Covered</h1>
                    <p className="text-black-2 dark:text-white">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur exercitationem cumque, praesentium nobis quia quaerat incidunt ipsam aut reiciendis aliquam non, minima soluta voluptas molestiae rem magni aliquid odit. Et?
                    </p>
                    <div>
                        <Link to='/' className="border-2 px-2 py-1 border-webred bg-webred hover:bg-web2red hover:border-web2red rounded-md text-white">
                            Get Now
                        </Link>
                    </div>
                </div>

                <div className="home-1-right w-full md:w-1/2">
                    <img src={image1} alt="Home 1" />
                </div>
            </div>


            <div className="home-2 bg-white mt-4 p-4 dark:bg-boxdark-2">
                <h1 className="text-xl text-center font-bold text-webred">We Work with customer brands and startups</h1>
                <div className="flex flex-col md:flex-row pt-8 gap-8 md:items-center items-center justify-around">
                    <li className="list-none text-black dark:text-white icon-slide" style={{ animationDelay: '0.2s' }}>
                        <FaFacebook style={{ fontSize: '50px' }} />
                    </li>
                    <li className="list-none text-black dark:text-white icon-slide" style={{ animationDelay: '0.4s' }}>
                        <FaGoogle style={{ fontSize: '50px' }} />
                    </li>
                    <li className="list-none text-black dark:text-white icon-slide" style={{ animationDelay: '0.6s' }}>
                        <FaFigma style={{ fontSize: '50px' }} />
                    </li>
                    <li className="list-none text-black dark:text-white icon-slide" style={{ animationDelay: '0.8s' }}>
                        <FaDropbox style={{ fontSize: '50px' }} />
                    </li>
                </div>
            </div>

            <div
                className={`home-3 flex flex-col md:flex-row items-center justify-between bg-white mt-4 p-4 dark:bg-boxdark-2 ${isVisibleHome3 ? 'animate-fade-in' : ''}`}
            >
                <div className="home3-left w-full md:w-1/2">
                    <h1 className="text-webred font-bold text-3xl text-center md:text-start">
                        We help design an ecommerce business shop
                    </h1>
                    <p className="text-justify pt-2 text-black dark:text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sequi deserunt atque corporis sint expedita? At ex et, cum, obcaecati hic nisi dolor sapiente molestiae vel numquam odio veniam ea.
                    </p>
                </div>
                <div className="home3-right flex justify-end w-full md:w-1/2">
                    <img src={image2} alt="Ecommerce Business" className="w-full max-w-lg h-auto object-contain" />
                </div>
            </div>

            <div
                className={`home-4 flex flex-col md:flex-row items-center justify-between bg-white mt-4 p-4 dark:bg-boxdark-2 ${isVisibleHome4 ? 'animate-fade-in' : ''}`}
            >
                <div className="home4-left flex justify-start w-full md:w-1/2">
                    <img src={image3} alt="Ecommerce Business" className="w-full max-w-lg h-auto object-contain" />
                </div>
                <div className="home4-right w-full md:w-1/2">
                    <h1 className="text-webred font-bold text-3xl text-center md:text-start">
                        We create innovative projects tailored for college students
                    </h1>
                    <p className="text-justify pt-2 text-black dark:text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sequi deserunt atque corporis sint expedita? At ex et, cum, obcaecati hic nisi dolor sapiente molestiae vel numquam odio veniam ea.
                    </p>
                </div>
            </div>

            <div
                className={`home-5 flex flex-col md:flex-row items-center justify-between bg-white mt-4 p-4 dark:bg-boxdark-2 ${isVisibleHome5 ? 'animate-fade-in' : ''}`}
            >
                <div className="home5-left w-full md:w-1/2">
                    <h1 className="text-webred font-bold text-3xl text-center md:text-start">
                        We help design messages app for communication
                    </h1>
                    <p className="text-justify pt-2 text-black dark:text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sequi deserunt atque corporis sint expedita? At ex et, cum, obcaecati hic nisi dolor sapiente molestiae vel numquam odio veniam ea.
                    </p>
                </div>
                <div className="home5-right flex justify-end w-full md:w-1/2">
                    <img src={image4} alt="Ecommerce Business" className="w-full max-w-lg h-auto object-contain" />
                </div>
            </div>

            <div
                className={`home-6 flex flex-col md:flex-row items-center justify-between bg-white mt-4 p-4 dark:bg-boxdark-2 ${isVisibleHome6 ? 'animate-fade-in' : ''}`}
            >
                <div className="home6-left flex justify-start w-full md:w-1/2">
                    <img src={image5} alt="Ecommerce Business" className="w-full max-w-lg h-auto object-contain" />
                </div>
                <div className="home6-right w-full md:w-1/2">
                    <h1 className="text-webred font-bold text-3xl text-center md:text-start">
                        We help maintenance support for customers
                    </h1>
                    <p className="text-justify pt-2 text-black dark:text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sequi deserunt atque corporis sint expedita? At ex et, cum, obcaecati hic nisi dolor sapiente molestiae vel numquam odio veniam ea.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Home;