import React from "react";
import { MainContext } from "../../context/Main_context";
import { useContext } from "react";
import { useEffect } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import arrow from "../../img/arrow.png";

const Modal = ({ isVisible }) => {
  const { setmodalVisible, allData, getNavData,className } = useContext(MainContext);
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [isVisible]);

  const handleClose = (e) => {
    if (e.target.id === "modalBackground") {
      setmodalVisible(false);
    }
  };

  if (!isVisible) return null;
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center "
        onClick={handleClose}
        id="modalBackground"
      >
        <div className="bg-white w-[48vw] h-[50vh] rounded-[30px] p-7 pl-12">
          <div className="Title text-3xl font-bold mb-3">
            {
              className ? className : "Select Class"
            }
          </div>
          <div className="pr-4 h-[83%] overflow-auto">
            <div className="list pl-1">
              {allData.map((item, num) => {
                return (
                  <>
                    <Accordion open={open === num + 1}>
                      <AccordionHeader
                        onClick={() => handleOpen(num + 1)}
                        className="border-b border-none"
                      >
                        <div className="body flex w-[100%] justify-between items-center">
                          <div className="flex space-x-4">
                            <div className="chp">{item.className}</div>
                          </div>
                          <img
                            className="h-[20px]"
                            src={arrow}
                            alt="Google Logo"
                          />
                        </div>
                      </AccordionHeader>
                      <AccordionBody className=" py-[0px]">
                        <div className="list">
                          {item.subjects.map((sub) => {
                            return (
                              <>
                                <Link
                                  to={`/${item._id}/${sub._id}`}
                                  onClick={() =>
                                    getNavData(
                                      item._id,
                                      sub._id,
                                      item.className,
                                      sub.subjectName
                                    )
                                  }
                                  className="item px-5 bg-blue-50 h-12 flex items-center text-lg font-bold text-black hover:bg-blue-500 hover:text-white cursor-pointer rounded-[10px] m-2"
                                >
                                  {sub.subjectName}
                                </Link>
                              </>
                            );
                          })}
                        </div>
                      </AccordionBody>
                    </Accordion>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
