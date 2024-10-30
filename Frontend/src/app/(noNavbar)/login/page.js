import React from "react";

const Page = () => {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <form className="h-[23rem] w-[20rem] p-4 flex flex-col gap-20 items-center -translate-y-16">
        <h1 className="text-4xl font-semibold border-b-2 p-2">Welcome Back!</h1>
        <div className="flex flex-col gap-9">
          <input
            type="text"
            className="h-10 w-[14rem] p-2 bg-black outline-none border-b-2"
            placeholder="Email"
          />
          <input
            type="text"
            className="h-10 w-[14rem] p-2 bg-black outline-none border-b-2"
            placeholder="Password"
          />
          <button className="bg-zinc-900 p-2 rounded-lg mx-auto mt-3 w-[6rem]">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Page;
