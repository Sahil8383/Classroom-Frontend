import React from "react";
import { MainContext } from "../../context/Main_context";
import { useContext } from "react";

const Theory = () => {
  const { theory } = useContext(MainContext);

  return <div>{theory}</div>;
};

export default Theory;
