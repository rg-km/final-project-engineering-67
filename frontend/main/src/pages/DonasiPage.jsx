import React from "react";
import Footer from "../components/Footer";
import { NavigationBar } from "../components/Navbar";
import HeroDonasi from "./DonasiPage/DonasiHero";
import MainDonation from "./DonasiPage/DonasiMain";



export const DonasiPage = () => {
    return(
        <div>
            <NavigationBar/>
            <HeroDonasi/>
            <MainDonation/>
            <Footer/>
        </div>
    );
}