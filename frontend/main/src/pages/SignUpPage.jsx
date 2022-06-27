import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import qs from 'querystring';


export default function SignUp(){
    return(
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center font-bold">Sign up</h1>
                    <input type="text" className="block border border-grey-light w-full p-3 rounded mb-4" name="fullname" placeholder="Full Name" />
                    <input type="text" className="block border border-grey-light w-full p-3 rounded mb-4" name="email" placeholder="Email" />
                    <input type="password" className="block border border-grey-light w-full p-3 rounded mb-4" name="password" placeholder="Password" />
                    <input type="password" className="block border border-grey-light w-full p-3 rounded mb-4" name="confirm_password" placeholder="Confirm Password" />
                    <button type="submit" className="w-full text-center py-3 rounded bg-purple text-veryLightGray hover:bg-darkBlue ease-in-out duration-300 focus:outline-none my-1">Create Account</button>
                    <div className="text-center text-sm text-grey-dark mt-4">
                    By signing up, you agree to the 
                    <button className="no-underline border-b border-grey-dark text-darkSkiesBlue">
                        Terms of Service
                    </button> and 
                    <button className="no-underline border-b border-grey-dark text-darkSkiesBlue">
                        Privacy Policy
                    </button>
                    </div>
                </div>
                <div className="text-grey-dark mt-6 text-center">
                    <p>Already have an account?</p> 
                    <div>
                        <Link to="/login">
                            <button className="no-underline border-b border-blue text-blue">
                            Log in
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}