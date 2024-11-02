import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";

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
      <div></div>
      <div></div>
    </div>
  );
};

export default page;
