/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link, useNavigate } from 'react-router-dom';
import lock from '../pages/Login/images/lock.gif';
import React from 'react';
import axios from "axios";
import { useState } from "react";


export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let request = await axios.post('https://doakan.onprogress.my.id/api/v1/login', {
                email: email,
                password: password,
            })
            console.log(request);
            localStorage.setItem('token', request.data.data.token);
            navigate('/');
        } catch (error) {
            alert("test")
        }
    }

    return (
        <section className="h-screen">
            {/* <Payment showModal={showModal} /> */}
            {/* <button onClick={() => setShowModal(true)}>
                <h1>Clik here</h1>
            </button> */}
            <div className="container px-6 py-12 h-full">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                        <img src={lock} className="w-full" alt="Phone image" />
                    </div>
                    <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                        <h1 className='text-center font-bold my-6 text-4xl'>Login</h1>
                        <form onSubmit={handleSubmit}>
                            {/* Email input */}
                            <div className="mb-6">
                                <input type="text" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email address" onChange={e => setEmail(e.target.value)} />
                            </div>
                            {/* Password input */}
                            <div className="mb-6">
                                <input type="password" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                            </div>
                            <div className="flex justify-between items-center mb-6">
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" id="exampleCheck3" defaultChecked />
                                    <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2">Remember me</label>
                                </div>
                                <button href="#!" className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out">Forgot password?</button>
                            </div>
                            {/* Submit button */}
                            <button type="submit" className="inline-block px-7 py-3 bg-darkBlue text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-purple hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full">
                                Sign in
                            </button>
                            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                                <p className="text-center font-semibold mx-4 mb-0">OR</p>
                            </div>
                            <div className='grid grid-cols-2 gap-4'>
                                <Link to='/signup'>
                                    <button className="py-4 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3" style={{ backgroundColor: '#3b5998' }}>
                                        Sign Up
                                    </button>
                                </Link>
                                <Link to='/'>
                                    <button className="py-4 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 bg-slate-500">
                                        Home
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}