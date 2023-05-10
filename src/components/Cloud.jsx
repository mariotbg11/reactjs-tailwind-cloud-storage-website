import React from "react";
import Storage from "../assets/storage1.png";

function Cloud() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[300px] mx-auto my-4" src={Storage} alt="" />
        <div className="flex flex-col justify-center">
          <p className="font-bold text-[#749DF2ff]">CLOUD DATA STORAGE</p>
          <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Cloud Storage Privately
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
            accusamus eligendi ipsa placeat voluptates, asperiores illum
            molestias aspernatur officia, consequatur nostrum beatae culpa
            temporibus! Soluta consectetur sint quis dolore explicabo!
          </p>
          <button className="text-[#749DF2ff] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cloud;
