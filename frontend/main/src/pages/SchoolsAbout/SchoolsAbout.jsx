import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


export const AboutSchool = () => {
    return(
        <div className='w-full py-[5rem] px-4 bg-[#f1f1f1]'>
            <div className="text-center mb-9 font-sans font-bold text-4xl">
                <h1>About Us</h1>
            </div>
            <div className='max-w-[860px] mx-auto grid md:grid-cols-2 gap-8 py-4'>
                <div className='w-full shadow-xl flex flex-col p-4 my-2 rounded-lg hover:scale-105 duration-300'>
                    <FontAwesomeIcon icon={faSchool} className='text-7xl'></FontAwesomeIcon>
                    <h2 className='text-2xl font-bold text-center py-5'>National Geographic Schools </h2>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam? Quis minima, beatae, accusantium impedit voluptatibus, architecto soluta vitae officia illum praesentium ab maxime ad.
                        </p>
                    </div>
                    <div className="flex flex-row mx-auto">
                        <button className='bg-[#b8b9fa] w-[50px] rounded-full mx-5 my-6 py-3 hover:bg-[#595bc9] '>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px] fill-current mx-auto" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                        </button>
                        <button className='bg-[#b8b9fa] w-[50px] rounded-full mx-5 my-6 py-3 hover:bg-[#595bc9]'>
                            <FontAwesomeIcon icon={faEnvelope} className="fa-lg"/>
                        </button>
                    </div>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-2 rounded-lg hover:scale-105 duration-300'>
                    <FontAwesomeIcon icon={faSchool} className='text-7xl'></FontAwesomeIcon>
                    <h2 className='text-2xl font-bold text-center py-5'>National Art Schools </h2>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam? Quis minima, beatae, accusantium impedit voluptatibus, architecto soluta vitae officia illum praesentium ab maxime ad.
                        </p>
                    </div>
                    <div className="flex flex-row mx-auto">
                        <button className='bg-[#b8b9fa] w-[50px] rounded-full mx-5 my-6 py-3 hover:bg-[#595bc9] '>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px] fill-current mx-auto" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                        </button>
                        <button className='bg-[#b8b9fa] w-[50px] rounded-full mx-5 my-6 py-3 hover:bg-[#595bc9]'>
                            <FontAwesomeIcon icon={faEnvelope} className="fa-lg"/>
                        </button>
                    </div>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-2 rounded-lg hover:scale-105 duration-300'>
                    <FontAwesomeIcon icon={faSchool} className='text-7xl'></FontAwesomeIcon>
                    <h2 className='text-2xl font-bold text-center py-5'>National Music Schools </h2>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam? Quis minima, beatae, accusantium impedit voluptatibus, architecto soluta vitae officia illum praesentium ab maxime ad.
                        </p>
                    </div>
                    <div className="flex flex-row mx-auto">
                        <button className='bg-[#b8b9fa] w-[50px] rounded-full mx-5 my-6 py-3 hover:bg-[#595bc9] '>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px] fill-current mx-auto" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                        </button>
                        <button className='bg-[#b8b9fa] w-[50px] rounded-full mx-5 my-6 py-3 hover:bg-[#595bc9]'>
                            <FontAwesomeIcon icon={faEnvelope} className="fa-lg"/>
                        </button>
                    </div>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-2 rounded-lg hover:scale-105 duration-300'>
                    <FontAwesomeIcon icon={faSchool} className='text-7xl'></FontAwesomeIcon>
                    <h2 className='text-2xl font-bold text-center py-5'>National Science Schools </h2>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, numquam? Quis minima, beatae, accusantium impedit voluptatibus, architecto soluta vitae officia illum praesentium ab maxime ad.
                        </p>
                    </div>
                    <div className="flex flex-row mx-auto">
                        <button className='bg-[#b8b9fa] w-[50px] rounded-full mx-5 my-6 py-3 hover:bg-[#595bc9] '>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px] fill-current mx-auto" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                        </button>
                        <button className='bg-[#b8b9fa] w-[50px] rounded-full mx-5 my-6 py-3 hover:bg-[#595bc9]'>
                            <FontAwesomeIcon icon={faEnvelope} className="fa-lg"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
