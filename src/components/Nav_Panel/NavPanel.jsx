import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useContext } from "react";
import { MainContext } from "../../context/Main_context";
import { useEffect } from "react";
import menu from "../../img/menu.png";
import arrow from "../../img/arrow.png";

const NavPanel = ({ cid, sid }) => {
  const { allData, getNavData, navData, theory, settheory, loading } =
  useContext(MainContext);

  useEffect(() => {
    if(!cid && !sid){
      return(
        <div className="h-[100%] flex justify-center items-center">
          <div className="text-3xl font-bold text-[#4a4e69]">Select Class and Subject</div>
        </div>
      )
    }
    getNavData(cid, sid);
  }, []);

  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  if(loading){
    return(
      <div className="h-[100%] flex justify-center items-center">
        <div className="text-3xl font-bold text-[#4a4e69]">Loading...</div>
      </div>
    )
  }


  return (
    <>
      {navData?.singleSubject?.chapters.map((item, num) => {
        return (
          <>
            <Accordion
              open={open === num + 1}
              className="border-b-5 border-black"
              key={num}
            >
              <AccordionHeader onClick={() => handleOpen(num + 1)}>
                <div className="body flex w-[100%] justify-between items-center">
                  <div className="flex space-x-4">
                    <img className="h-[25px]" src={menu} alt="menu" />
                    <div className="chp">{item?.chapterName}</div>
                  </div>
                  <img className="h-[20px]" src={arrow} alt="arrow" />
                </div>
              </AccordionHeader>
              {item.topics.map((x) => {
                return (
                  <>
                    <AccordionBody className=" py-[0px]">
                      <div className="list pl-4">
                        <div
                          onClick={() => settheory(x.theory)}
                          className="item px-5 border-l-4 border-blue-500 h-14 flex items-center text-lg font-bold text-black hover:bg-blue-500 hover:text-white cursor-pointer"
                        >
                          {x?.topicName}
                        </div>
                      </div>
                    </AccordionBody>
                  </>
                );
              })}
            </Accordion>
          </>
        );
      })}
    </>
  );
};

export default NavPanel;
