import React from "react";
import TextInput from "../components/TextInput";
import "../styles/TextInputStyles.css";
import "../styles/HomeStyles.css";

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
