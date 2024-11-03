import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

const page = () => {
    return (
        <div className="min-h-[50vh] w-screen bg-zinc-950 flex flex-col items-center gap-10">
            <div className="flex justify-evenly pt-7 w-full">
                <div className="flex flex-col gap-3 items-center w-[20rem]">
                    <div className="h-[2.5rem] w-[2.5rem] rounded-full p-3 flex items-center justify-center bg-orange-500">
                        <FaPhone size={23} />
                    </div>
                    <h1>+91-098-29803</h1>
                </div>
                <div className="flex flex-col gap-3 items-center w-[20rem]">
                    <div className="h-[2.5rem] w-[2.5rem] rounded-full p-2 flex items-center justify-center bg-orange-500">
                        <MdOutlineEmail size={28} />
                    </div>
                    <h1>ecommer@gmail.com</h1>
                </div>
                <div className="flex flex-col gap-3 items-center w-[20rem] text-center">
                    <div className="h-[2.5rem] w-[2.5rem] rounded-full p-2 flex items-center justify-center bg-orange-500">
                        <MdOutlineLocationOn size={28} />
                    </div>
                    <h1>silicon valley 3rd street USA</h1>
                </div>
            </div>
            <div className="w-[90vw]">
                <hr />
            </div>
            <div className="flex justify-between w-[80vw]">
                <div>
                    <h1 className="text-xl font-bold">About Us</h1>
                    <div className="text-sm font-semibold flex flex-col items-center gap-1 mt-2">
                        <h1>Our Serviecs</h1>
                        <h1>Our Products</h1>
                        <h1>Our History</h1>
                    </div>
                </div>
                <div>
                    <h1 className="text-xl font-bold">Company</h1>
                    <div className="text-sm font-semibold flex flex-col items-center gap-1 mt-2">
                        <h1>Contact</h1>
                        <h1>Clients</h1>
                        <h1>Pricing</h1>
                    </div>
                </div>
                <div>
                    <h1 className="text-xl font-bold">Resources</h1>
                    <div className="text-sm font-semibold flex flex-col items-center gap-1 mt-2">
                        <h1>Blog</h1>
                        <h1>News letter</h1>
                        <h1>Privacy Policy</h1>
                    </div>
                </div>
                <div>
                    <h1 className="text-xl font-bold">Suggestions</h1>
                    <div className="text-sm font-semibold flex flex-col gap-1 mt-4">
                        <div className="flex items-center justify-center gap-2 w-[13rem] bg-white rounded-lg">
                            <input type="text" className="outline-none text-black h-[2rem] w-[10rem] p-2 text-sm" placeholder="write up anything" />
                            <button className="text-orange-400 w-[2rem] p-2">
                                <FaArrowRight size={19} />
                            </button>
                        </div>
                        <h1 className="text-xs text-start">No data will be stored</h1>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <h1>© 2024 Noel Private.Ltd. All rights Reserved</h1>
            </div>
            <div></div>
        </div>
    );
};

export default page;
