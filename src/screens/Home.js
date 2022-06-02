import React, { useContext } from "react";
import Header from "../components/Header";
import "../styles/TextInputStyles.css";
import "../styles/HomeStyles.css";
import "../styles/CardStyle.css";
import { FaCheck } from "react-icons/fa";

import { MyContext } from "../ContextApi/MyContext";
import ProgressBar from "../components/ProgressBar";
import MyButton from "../components/MyButton";

function Home() {
  const { screen, Headings, handleScreen, pages } = useContext(MyContext);

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
        {pages()}
        <MyButton
          title={Headings[screen].buttonTitle}
          handleScreen={handleScreen}
        />
      </div>
    </div>
  );
}

export default Home;
