import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import { NavigationBar } from "../../components/Navbar";
import { convert } from "rupiah-format";
import { toast, ToastContainer } from "react-toastify";

export default function DetailDonasi() {
    const [dataDetail, setDataDetail] = useState({});
    const nav = useParams();
    const fetchData = async (id) => {
        try {
            const response = await axios.get(
                `https://doakan.onprogress.my.id/api/v1/donasi/${id}`
            );
            setDataDetail(response.data?.data);
        } catch (error) {
            console.log(error);
        }
    };
    const [data, setData] = useState({
        nama: "",
        deskripsi_singkat: "",
        deskripsi: "",
        goal_amount: 0,
        perks: "",
    });
    const handleChange = (e) => {
        // eslint-disable-next-line eqeqeq
        if (e.target.name == "goal_amount") {
            setData({ ...data, [e.target.name]: parseInt(e.target.value) });
        } else {
            setData({ ...data, [e.target.name]: e.target.value });
        }
        console.log("SASA", data);
    };
    let validToken = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(
                `https://doakan.onprogress.my.id/api/v1/donasi/${nav.id}`,
                data,
                validToken
            );
            console.log(response.data);
            toast.success("Berhasil mengedit data")
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (error) {
            console.log(error);
            toast.error("Gagal mengedit data")

        }
    };

    useEffect(() => {
        fetchData(nav.id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <NavigationBar />
            <ToastContainer />
            <div className="container">
                <div className="grid grid-cols-3 gap-4 my-10">
                    <div className="col-span-2">
                        <h1 className="text-5xl  font-bold mb-3">{dataDetail.nama}</h1>
                        <p className="text-base mb-3">{dataDetail.deskripsi_singkat}</p>
                        <p className="text-xl mb-3">{dataDetail.deskripsi}</p>
                        <p className="mb-3 text-xl">
                            <span className="font-bold">Target : </span>
                            {convert(dataDetail?.goal_amount)}
                        </p>
                        <p className="mb-3 text-xl">
                            <span className="font-bold">Donasi Sekarang : </span>
                            {convert(dataDetail?.current_amount)}
                        </p>
                        <p className="mb-3 text-xl">
                            <span className="font-bold">Jumlah Donatur : </span>
                            {convert(dataDetail?.donatur_count)}
                        </p>

                        <div>
                            {/* The button to open modal */}
                            <label htmlFor="my-modal-4" className="btn modal-button">
                                Edit Donasi
                            </label>
                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                                <label className="modal-box relative" htmlFor>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Nama Sekolah</span>
                                        </label>
                                        <input
                                            onChange={handleChange}
                                            type="text"
                                            name="nama"
                                            placeholder="Type here"
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                        <label className="label">
                                            <span className="label-text">Deskripsi Singkat</span>
                                        </label>
                                        <input
                                            onChange={handleChange}
                                            type="text"
                                            name="deskripsi_singkat"
                                            placeholder="Type here"
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                        <label className="label">
                                            <span className="label-text">Deskripsi</span>
                                        </label>
                                        <input
                                            onChange={handleChange}
                                            type="text"
                                            name="deskripsi"
                                            placeholder="Type here"
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                        <label className="label">
                                            <span className="label-text">Target</span>
                                        </label>
                                        <input
                                            onChange={handleChange}
                                            type="number"
                                            name="goal_amount"
                                            placeholder="Type here"
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                        <label className="label">
                                            <span className="label-text">Keuntungan</span>
                                        </label>
                                        <input
                                            onChange={handleChange}
                                            type="text"
                                            name="perks"
                                            placeholder="Type here"
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                    </div>
                                    <div className="modal-action">
                                        <button className="btn btn-primary" onClick={handleSubmit}>
                                            Edit Data
                                        </button>
                                    </div>
                                </label>
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="bg-indigo-300">
                            <img
                                src={`https://doakan.onprogress.my.id/${dataDetail.image_url}`}
                                alt=""
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src =
                                        "https://www.sragenkab.go.id/assets/images/image-not-available-.jpg";
                                }}
                                className="object-cover h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
