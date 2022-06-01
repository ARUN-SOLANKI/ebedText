import React, { useContext } from "react";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import "../styles/TextInputStyles.css";
import "../styles/HomeStyles.css";
import MyButton from "../components/MyButton";
import ProgressBar from "../components/ProgressBar";

function Page1() {
  return (
    <div>
      <div className="FormContainer">
        <TextInput placeholder="Eden" label="Workspace Name" />
        <TextInput placeholder="Steve" label="Display Name" />
      </div>
    </div>
  );
}

export default Page1;
