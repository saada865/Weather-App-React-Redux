import React from "react";

const Home = () => {
  return (
    <div className=" container ">
      <div className="header flex justify-between items-center w-fit">
        <h1 className="text-3xl font-semibold bg-slate-300 p-2 w-screen">
          Welcome to Weather App!{" "}
        </h1>
      </div>
      <div className="input flex items-center mx-8 my-8">
        <h1 className=" text-white">Enter in your city</h1>
        <input
          type="text"
          className="bg-gray-500 border-r-gray-200 mx-2 rounded-md"
        />
      </div>
      <div className=" flex flex-col items-center justify-between images ">
        <img
          className=" w-1/2 rounded-md"
          src="https://www.theschoolrun.com/sites/theschoolrun.com/files/weather_.jpg"
          alt="img1"
        />
        <img
          className=" w-1/2 h-60 rounded-md"
          src="https://t4.ftcdn.net/jpg/04/85/17/33/360_F_485173339_rHVWOWEwZneJpHqgFNiYJLSPQg7hNoAA.jpg"
          alt="im2"
        />
      </div>
    </div>
  );
};

export default Home;
