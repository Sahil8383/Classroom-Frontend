import React from "react";
import { useContext } from "react";
import { MainContext } from "../../context/Main_context";
import arrow from "../../img/arrow.png";
import logo from "../../img/fire.png";
import search from "../../img/search.png";

const Header = () => {
  const { setmodalVisible } = useContext(MainContext);
  const { className, subName } = useContext(MainContext);

  return (
    <>
      <div className="Main border-b-[2px] border-opacity-40 border-[#4a4e69] h-[10vh] flex items-center bg-[#f5f5f5]">
        <div className="logo h-[100%] w-[80px] flex items-center justify-center ">
          <img className="h-[80%] " src={logo} alt="logo" />
        </div>
        <div
          className="dropdown  h-[70%] w-[250px] ml-5 rounded-[10px] border-[2px] border-blue-500 cursor-pointer flex items-center justify-between px-4"
          onClick={() => setmodalVisible(true)}
        >
          <div className="text-xl text-blue-500 font-bold">
            {className  ? `${className} - ${subName}` : "Select Class"}
          </div>
          <img className="h-[50%] fill-blue-500" src={arrow} alt="arrow" />
        </div>
        <div className="search h-[75%] w-[800px] ml-[110px] bg-[#e5e4e2] rounded-[10px] flex items-center px-4 py-1">
          <img className="h-[50%]" src={search} alt="search" />
          <input
            className="h-[100%] w-[100%] ml-2 p-3 outline-none text-xl bg-inherit"
            type="text"
            placeholder="Search for Topic and Chapters"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
