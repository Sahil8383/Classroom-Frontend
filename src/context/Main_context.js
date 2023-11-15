import { createContext } from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const MainContext = createContext();

const Context = ({ children }) => {
  const [modalVisible, setmodalVisible] = useState(false);
  const [allData, setallData] = useState([]);
  const [navData, setnavData] = useState({});
  const [className, setclassName] = useState("");
  const [subName, setsubName] = useState("");
  const [theory, settheory] = useState("");
  const [panel, setpanel] = useState("theory");
  const [loading, setloading] = useState(false);

  const getData = async () => {
    setloading(true);
    await axios.get("https://classroom-backend-delta.vercel.app/api/getClasses").then((res) => {
      setallData(res.data.allClasses);
    });
    setloading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  const getNavData = async (classId, subId, clsName, subName) => {
    setmodalVisible(false);
    if (!classId || !subId) return null;
    setloading(true);
    await axios
      .get(`https://classroom-backend-delta.vercel.app/api/getSingleClass/${classId}/${subId}`)
      .then((res) => {
        setclassName(clsName);
        setsubName(subName);
        setnavData(res.data);
      });
    setloading(false);
  };

  return (
    <MainContext.Provider
      value={{
        modalVisible,
        setmodalVisible,
        allData,
        setallData,
        getNavData,
        navData,
        className,
        subName,
        setclassName,
        theory,
        settheory,
        panel,
        setpanel,
        loading
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default Context;
