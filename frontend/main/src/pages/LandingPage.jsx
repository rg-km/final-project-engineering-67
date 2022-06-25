import React from "react"
import Footer from "../components/Footer"
import { NavigationBar } from "../components/Navbar"
import { InsiderCarousel } from "./Carousel/Insider"
import { CompanyBuild } from "./Company/CompanyPage"
import SuperHero from "./LandingPageComp/Hero"
import { AboutSchool } from "./SchoolsAbout/SchoolsAbout"



export default function LandingPage(){
    return (
        <div>
            <NavigationBar/>
            <SuperHero/>
            <CompanyBuild/>
            <AboutSchool/>
            <InsiderCarousel/>
            <Footer/>
        </div>
    )
}