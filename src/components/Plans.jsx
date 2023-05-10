import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Group from "../assets/group.png";

function Plans() {
  return (
    <div className="w-full py-40 px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-md hover:scale-105 duration-300">
          <img
            className="w-14 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="single user icon"
          />
          <h3 className="text-2xl text-center font-bold py-8">Single User</h3>
          <p className="text-4xl text-center font-bold">149$</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2GB</p>
          </div>
          <button className="bg-[#749DF2ff] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-md hover:scale-105 duration-300">
          <img
            className="w-14 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="double user icon"
          />
          <h3 className="text-2xl text-center font-bold py-8">Partnership</h3>
          <p className="text-4xl text-center font-bold">155$</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
            <p className="py-2 border-b mx-8">2 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 10GB</p>
          </div>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#749DF2ff]">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-md hover:scale-105 duration-300">
          <img
            className="w-14 mx-auto mt-[-3rem] bg-white"
            src={Group}
            alt="share group user icon"
          />
          <h3 className="text-2xl text-center font-bold py-8">Share Group</h3>
          <p className="text-4xl text-center font-bold">165$</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
            <p className="py-2 border-b mx-8">10 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 15GB</p>
          </div>
          <button className="bg-[#749DF2ff] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default Plans;
