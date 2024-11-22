import React from "react";
import { Outlet } from 'react-router-dom';
import Navbar from "../LandingComp/Navbar";
import Footer from "../LandingComp/Footer";

const LandingLayout: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default LandingLayout;