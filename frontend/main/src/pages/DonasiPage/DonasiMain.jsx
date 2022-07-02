import React, { useEffect } from 'react';
import sekolah4 from "./images/sekolah4.png";
import axios from "axios";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";


export default function MainDonation() {
    const [data, setData] = useState([]);
    const [dataSD, setDataSD] = useState([]);
    const [dataMAN, setDataMAN] = useState([]);
    const [dataSMK, setDataSMK] = useState([]);


    const showPrev = async () => {
        try {
            let req = await axios.get('http://doakan.onprogress.my.id/api/v1/donasi')
            setData(req.data.data)

            console.log(data)
        } catch (error) {
            alert("error")
        }
    }


    const [dataDonasi, setDataDonasi] = useState({
        nama: "",
        deskripsi_singkat: "",
        deskripsi: "",
        goal_amount: 0,
        perks: ""
    });
    const handleChange = (e) => {
        // eslint-disable-next-line eqeqeq
        if (e.target.name == "goal_amount") {
            setDataDonasi({ ...dataDonasi, [e.target.name]: parseInt(e.target.value) });
        } else {
            setDataDonasi({
                ...dataDonasi,
                [e.target.name]: e.target.value
            })
        }
        console.log(dataDonasi)
    }
    let validToken = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }
    const onSubmitDonasi = async (e) => {
        e.preventDefault()
        try {
            let req = await axios.post('https://doakan.onprogress.my.id/api/v1/donasi', dataDonasi, validToken)
            console.log(req.data)
            toast.success("Berhasil menambahkan data")
            setTimeout(() => {
                window.location.reload()
            }, 1000);
        } catch (error) {
            toast.error("Gagal menambahkan data")
            console.log("error ", error)
        }
    }


    useEffect(() => {
        showPrev();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        let resultSd = data.filter(obj => obj.nama.includes("SD"))
        let resultMAN = data.filter(obj => obj.nama.includes("MAN") || obj.nama.includes("SMP"))
        let resultSMK = data.filter(obj => obj.nama.includes("SMK") || obj.nama.includes("SMA"))
        setDataSD(resultSd)
        setDataMAN(resultMAN)
        setDataSMK(resultSMK)
        let otherData = data.filter(obj => !obj.nama.includes("SD") || !obj.nama.includes("MAN") || !obj.nama.includes("SMP") || !obj.nama.includes("SMK") || !obj.nama.includes("SMA"))

        console.log("other data ", otherData)
    }, [data])


    return (
        <div className="py-9">
            <ToastContainer />
            <div className="grid grid-cols-1 gap-2 ml-10">
                <div>
                    <label htmlFor="my-modal-6" className="btn modal-button ms-5">Buat Donasi</label>

                </div>
            </div>
            <div className="p-8">
                <h1 className="font-bold text-xl text-gray-500">
                    Sekolah Dasar
                </h1>
            </div>
            <div>
                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">

                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Buat Donasi</h3>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Nama Sekolah</span>
                            </label>
                            <input onChange={handleChange} type="text" name='nama' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text">Deskripsi Singkat</span>
                            </label>
                            <input onChange={handleChange} type="text" name='deskripsi_singkat' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text">Deskripsi</span>
                            </label>
                            <input onChange={handleChange} type="text" name='deskripsi' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text">Target</span>
                            </label>
                            <input onChange={handleChange} type="number" name='goal_amount' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text">Keuntungan</span>
                            </label>
                            <input onChange={handleChange} type="text" name='perks' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="modal-action">
                            <button className="btn btn-primary" onClick={onSubmitDonasi}>Tambahkan Data</button>
                            <label for="my-modal-6" class="btn">Batalkan</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-6 sm:grid-cols-12">

                {dataSD.map((item, index) => {
                    return (
                        <div className="text-center px-8" key={index}>
                            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <button>
                                    <img className="rounded-t-lg object-cover h-48 w-96" onError={(e) => {
                                        e.target.onerror = null; e.target.src = sekolah4;
                                    }} src={`https://doakan.onprogress.my.id/${item.image_url}`} alt="school images" />
                                </button>
                                <div className="p-5">
                                    <button>
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.nama}</h5>
                                    </button>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        {item.deskripsi_singkat}
                                    </p>
                                    <Link to={`/donasi/detail/${item.id}`}>
                                        <button href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Donate
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="p-8">
                <h1 className="font-bold text-xl text-gray-500">
                    SMP/MAN
                </h1>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-6 sm:grid-cols-12">
                {dataMAN.map((item, index) => {
                    return (
                        <div className="text-center px-8" key={index}>
                            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <button>
                                    <img className="rounded-t-lg object-cover h-48 w-96" onError={(e) => {
                                        e.target.onerror = null; e.target.src = sekolah4;
                                    }} src={`https://doakan.onprogress.my.id/${item.image_url}`} alt="school images" />
                                </button>
                                <div className="p-5">
                                    <button>
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.nama}</h5>
                                    </button>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        {item.deskripsi_singkat}
                                    </p>
                                    <Link to={`/donasi/detail/${item.id}`}>
                                        <button href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Donate
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="p-8">
                <h1 className="font-bold text-xl text-gray-500">
                    SMA/SMK
                </h1>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-6 sm:grid-cols-12">
                {dataSMK.map((item, index) => {
                    return (
                        <div className="text-center px-8" key={index}>
                            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <button>
                                    <img className="rounded-t-lg object-cover h-48 w-96" onError={(e) => {
                                        e.target.onerror = null; e.target.src = sekolah4;
                                    }} src={`https://doakan.onprogress.my.id/${item.image_url}`} alt="school images" />
                                </button>
                                <div className="p-5">
                                    <button>
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.nama}</h5>
                                    </button>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        {item.deskripsi_singkat}
                                    </p>
                                    <Link to={`/donasi/detail/${item.id}`}>
                                        <button href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Donate
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}