import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
const Home = () => {
  return (
    <div className=" flex flex-col bg-slate-600 text-white w-screen h-screen">
      <h1>Wellcome , </h1>
      <button className=" bg-blue-500 text-black font-bold text-md px-3 py-1 rounded-lg w-min mt-4">
        Logout
      </button>
    </div>
  );
};

export default Home;
