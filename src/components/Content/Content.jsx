import React from "react";
import { MainContext } from "../../context/Main_context";
import { useContext } from "react";
import Theory from "../Pages/Theory";
import Simulation from "../Pages/Simulation";
import Ask from "../Pages/Ask";
import Videos from "../Pages/Videos";
import Questions from "../Pages/Questions";

const Content = () => {
  const { navData, theory, panel, setpanel } = useContext(MainContext);
  // console.log(panel);

  return (
    <>
      <div className="upper w-[100%] h-[20%] flex items-center justify-evenly">
        <div
          className="
        px-7
        h-[60px]
        bg-blue-100 
        flex justify-center 
        items-center 
        rounded-[10px]
        font-bold
        text-xl
        text-blue-900
        hover:bg-blue-500 
        hover:text-white 
        cursor-pointer
        "
          onClick={() => setpanel("theory")}
        >
          Theory
        </div>
        <div
          className="
        px-7
        h-[60px]
        bg-blue-100 
        flex justify-center 
        items-center 
        rounded-[10px]
        font-bold
        text-xl
        text-blue-900
        hover:bg-blue-500 
        hover:text-white 
        cursor-pointer
        "
          onClick={() => setpanel("simulation")}
        >
          Simulation
        </div>
        <div
          className="
        px-7
        h-[60px]
        bg-blue-100 
        flex justify-center 
        items-center 
        rounded-[10px]
        font-bold
        text-xl
        text-blue-900
        hover:bg-blue-500 
        hover:text-white 
        cursor-pointer
        "
          onClick={() => setpanel("ask")}
        >
          Ask Doubts
        </div>
        <div
          className="
        px-7
        h-[60px]
        bg-blue-100 
        flex justify-center 
        items-center 
        rounded-[10px]
        font-bold
        text-xl
        text-blue-900
        hover:bg-blue-500 
        hover:text-white 
        cursor-pointer
        "
          onClick={() => setpanel("video")}
        >
          Video
        </div>
        <div
          className="
        px-7
        h-[60px]
        bg-blue-100 
        flex justify-center 
        items-center 
        rounded-[10px]
        font-bold
        text-xl
        text-blue-900
        hover:bg-blue-500 
        hover:text-white 
        cursor-pointer
        "
          onClick={() => setpanel("questions")}
        >
          Questions
        </div>
      </div>
      <div className="lower w-[100%] h-[80%] px-12 text-lg font-medium">
        {panel === "theory" ? (
          <Theory />
        ) : panel === "simulation" ? (
          <Simulation />
        ) : panel === "ask" ? (
          <Ask />
        ) : panel === "video" ? (
          <Videos />
        ) : panel === "questions" ? (
          <Questions />
        ) : null}

        {/* {theory} */}
      </div>
    </>
  );
};

export default Content;
