import React from "react";
import image1 from "../images/home1.png"
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    return (
        <div className="dark:bg-boxdark pt-16 px-4 pb-4">
            <div className="home-1 flex flex-col-reverse md:flex-row items-center justify-between p-4 bg-white dark:bg-boxdark-2">
                <div className="home-1-left flex flex-col gap-4 w-full md:w-1/2 text-center md:text-start">
                    <h1 className="text-2xl md:text-6xl text-webred font-bold">From Concept to Code, We've Got You Covered</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur exercitationem cumque, praesentium nobis quia quaerat incidunt ipsam aut reiciendis aliquam non, minima soluta voluptas molestiae rem magni aliquid odit. Et?</p>
                    <div>
                        <Link to='/' className="border-2 px-2 py-1 border-webred bg-webred hover:bg-web2red hover:border-web2red rounded-md text-white">Get Now</Link>
                    </div>
                </div>
                <div className="home-1-right w-full md:w-1/2">
                    <img src={image1} alt="Home 1" />
                </div>
            </div>
        </div>
    )
}

export default Home;