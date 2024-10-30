import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const page = () => {
  return (
    <div className="h-[100vh] w-[100vw]">
      <div className="h-[6rem] flex items-center justify-between p-[3rem]">
        <h1 className="text-white font-semibold text-5xl p-2">My Cart</h1>
        <div className="translate-y-2 h-[3rem] w-auto p-4 rounded-xl bg-zinc-800 flex gap-[1rem] items-center scale-75">
          <FaArrowLeft />
          <button>Continue Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default page;
