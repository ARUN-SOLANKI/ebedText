import React from "react";
import TextInput from "../components/TextInput";
import "../styles/TextInputStyles.css";
import "../styles/HomeStyles.css";

function Page2() {
  return (
    <div>
      <div className="FormContainer">
        <TextInput placeholder="Steve Jobs" label="Full Name" />
        <div className="screen2InputContainer">
          <label className="inputlabel2">
            WorkSpace URL <span style={{ color: "#ccc" }}>(optional)</span>
          </label>
          <div className="subInputContainer">
            <input placeholder="www.eden.com/" className="input1" />
            <input placeholder="Example" className="input2" disabled={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2;
