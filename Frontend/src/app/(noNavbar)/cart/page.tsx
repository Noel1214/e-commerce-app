import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import CartItemCard from "@/components/CartItemCard";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-[100vh] max-w-[100vw] overflow-x-hidden">
      <div className="h-[6rem] flex">
        <div className="w-full mx-5 sm:m-[3rem] flex items-center justify-between">
          <h1 className="text-white font-semibold text-[2rem] sm:text-5xl">
            My Cart
          </h1>
          <Link href="/">
            <div className="translate-y-1 translate-x-5 h-[3rem] w-auto p-4 rounded-xl bg-zinc-800 flex gap-[1rem] items-center scale-75 sm:scale-90">
              <FaArrowLeft />
              <button>Continue Shopping</button>
            </div>
          </Link>
        </div>
      </div>
      <div className="min-h-[50vh] p-2 flex flex-col items-center gap-12 mt-8">
        <CartItemCard image="./shoes.jpg" />
        <CartItemCard image="./suitcase.jpg" />
      </div>
    </div>
  );
};

export default page;
