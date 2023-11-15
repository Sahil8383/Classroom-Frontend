import React from "react";
import NavPanel from "../Nav_Panel/NavPanel";
import Content from "../Content/Content";
import { useParams } from "react-router-dom";

const Body = () => {
  const { cid, sid } = useParams();
  // console.log(cid, sid);
  return (
    <>
      <div className="h-[90vh] flex">
        <div className="border-r-[2px] border-opacity-40 border-[#4a4e69] bg-[#f5f5f5] w-[27%] h-[100%] pl-4 py-14 flex flex-col items-center">
          <NavPanel cid={cid} sid={sid} />
        </div>
        <div className=" w-[73%] h-[100%]">
          {
            cid && sid ? <Content /> : <div className="h-[100%] flex justify-center items-center">
              <div className="text-3xl font-bold text-[#4a4e69]">Select Class and Subject</div>
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default Body;
