import React from "react";
import Footer from "../components/Footer";
import { NavigationBar } from "../components/Navbar";
import HeroDonasi from "./DonasiPage/DonasiHero";



export const DonasiPage = () => {
    return(
        <div>
            <NavigationBar/>
            <HeroDonasi/>
            <Footer/>
        </div>
    );
}