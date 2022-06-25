import React from "react";
import Footer from "../components/Footer";
import { NavigationBar } from "../components/Navbar";
import TimeWrap from "./Timeline/wrapperTimeLine";


export default function TutorialPage(){
    return(
        <div>
            <NavigationBar/>
            <TimeWrap/>
            <Footer/>
        </div>
    );
}