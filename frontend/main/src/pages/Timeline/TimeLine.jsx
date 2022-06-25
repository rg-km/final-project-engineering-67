import React from "react";
import { faArrowDown, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function TimeLine(){
    return(
        <div className="w-full mx-10 px-10  my-5 py-10">
            <div className="flex">
                <div className="flex flex-col items-center mr-4">
                    <div>
                        <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                            <FontAwesomeIcon icon={faArrowDown} className=" text-gray-500" />
                        </div>
                    </div>
                    <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pb-8 ">
                    <p className="mb-2 text-xl font-bold text-gray-600">Step 1</p>
                    <p className="text-gray-700">
                        Registrasi Akun Anda
                    </p>
                </div>
            </div>
            <div className="flex">
                <div className="flex flex-col items-center mr-4">
                    <div>
                        <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                            <FontAwesomeIcon icon={faArrowDown} className=" text-gray-500" />
                        </div>
                    </div>
                    <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pb-8 ">
                    <p className="mb-2 text-xl font-bold text-gray-600">Step 2</p>
                    <p className="text-gray-700">
                        Pergi ke Halaman Donasi dan pilih sekolah yang ingin menjadi target donasi Anda.
                    </p>
                </div>
            </div>
            <div className="flex">
                <div className="flex flex-col items-center mr-4">
                    <div>
                        <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                            <FontAwesomeIcon icon={faArrowDown} className=" text-gray-500" />
                        </div>
                    </div>
                    <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pb-8 ">
                    <p className="mb-2 text-xl font-bold text-gray-600">Step 3</p>
                    <p className="text-gray-700">
                        Login atau sign in, apabila telah melakukan sign in maka Akan lanjut ke Pembayaran.
                    </p>
                </div>
            </div>
            <div className="flex">
                <div className="flex flex-col items-center mr-4">
                    <div>
                        <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                            <FontAwesomeIcon icon={faArrowDown} className=" text-gray-500" />
                        </div>
                    </div>
                    <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pb-8 ">
                    <p className="mb-2 text-xl font-bold text-gray-600">Step 4</p>
                    <p className="text-gray-700">
                        Pilih metode pembayaran yang anda Inginkan.
                    </p>
                </div>
            </div>
            <div className="flex">
                <div className="flex flex-col items-center mr-4">
                    <div>
                        <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                            <FontAwesomeIcon icon={faArrowDown} className=" text-gray-500" />
                        </div>
                    </div>
                    <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pb-8 ">
                    <p className="mb-2 text-xl font-bold text-gray-600">Step 5</p>
                    <p className="text-gray-700">
                        Apabila Anda telah mendapatkan kode reveral maka lakukan pembayaran Anda, dengan menggunakan Mobile Banking <br></br> atau ke Teler terdekat
                    </p>
                </div>
            </div>
            <div className="flex">
                <div className="flex flex-col items-center mr-4">
                    <div>
                        <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                            <FontAwesomeIcon icon={faCheck} className=" text-gray-500"/>
                        </div>
                    </div>
                </div>
                <div className="pt-1">
                    <p className="mb-2 text-lg font-bold text-gray-600">Done</p>
                </div>
            </div>
        </div>
    );
}