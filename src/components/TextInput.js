import React from "react";

const TextInput = ({ label, placeholder }) => {
  return (
    <>
      <div className="inputContainer">
        <label className="inputlabel">{label}</label>
        <input className="inputField" placeholder={placeholder} />
      </div>
    </>
  );
};

export default TextInput;
