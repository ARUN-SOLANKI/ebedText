import React from "react";

function MyButton({ title, handleScreen }) {
  return (
    <>
      <button className="MyButton" onClick={handleScreen}>
        {title}
      </button>
    </>
  );
}

export default MyButton;
