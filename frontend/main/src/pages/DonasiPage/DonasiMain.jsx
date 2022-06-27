import React from 'react';
import sekolah4 from "./images/sekolah4.png";


export default function MainDonation(){
    return(
        <div className="py-9">
            <div className="p-8">
                <h1 className="font-bold text-xl text-gray-500">
                    Sekolah Dasar
                </h1>
            </div>
            <div className="text-center px-8">
                <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <button>
                        <img className="rounded-t-lg" src={sekolah4} alt="school images" />
                    </button>
                    <div className="p-5">
                        <button>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">SD 7 Kusmangun</h5>
                        </button>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Jl.Kusmangun no.5
                        </p>
                        <button href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Donate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}