import "./App.css";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import { useContext } from "react";
import { MainContext } from "./context/Main_context";
import Body from "./components/Body/Body";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

function App() {
  const { modalVisible } = useContext(MainContext);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/:cid/:sid" element={<Body />} />
      </Routes>
      <Modal isVisible={modalVisible} />
    </>
  );
}

export default App;
