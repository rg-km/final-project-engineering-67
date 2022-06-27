import React from "react";
import { NavigationBar } from "../components/Navbar";
import ProfileComponent from "./Profile/ProfileComp";


export default function Profile(){
    return(
       <div>
            <NavigationBar/>
            <ProfileComponent/>
       </div>
    );
}