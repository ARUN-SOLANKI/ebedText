import React, { useContext } from "react";
import Header from "../components/Header";
import "../styles/TextInputStyles.css";
import "../styles/HomeStyles.css";
import "../styles/CardStyle.css";
import { FaCheck } from "react-icons/fa";

import { MyContext } from "../ContextApi/MyContext";
import ProgressBar from "../components/ProgressBar";
import MyButton from "../components/MyButton";
import Page1 from "../components/Page1";
import Page2 from "../components/Page2";
import Page3 from "../components/Page3";
import Page4 from "../components/Page4";

function Home() {
  const { screen, setScreen, Headings, handleScreen } = useContext(MyContext);
  return (
    <div className="mainContainer">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "3rem",
        }}
      >
        <img src={require("../assets/images/headerImg.png")} />
      </div>
      <ProgressBar />
      {screen == 3 && (
        <div className="checkIcon">
          <FaCheck size={20} />
        </div>
      )}
      <Header
        title={Headings[screen].heading}
        subTitle={Headings[screen].SubHeading}
      />
      <div className="screenContainer">
        {screen == 0 && <Page1 />}
        {screen == 1 && <Page2 />}
        {screen == 2 && <Page3 />}
        {screen == 3 && <Page4 />}
        <MyButton
          title={Headings[screen].buttonTitle}
          handleScreen={handleScreen}
        />
      </div>
    </div>
  );
}

export default Home;
