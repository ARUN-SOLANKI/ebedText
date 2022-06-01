import React from "react";
import "../styles/CardStyle.css";

function Card({ title, subTitle, Icon, active }) {
  return (
    <div className={active ? "CardActiveContainer" : "CardConatiner"}>
      <Icon size={25} color={active ? "#664de5" : "#000"} />
      <div>
        <h3 style={{ fontSize: "1.8rem", lineHeight: 1 }}>{title}</h3>
        <p style={{ width: "70%", fontSize: "1.4rem" }}>{subTitle}</p>
      </div>
    </div>
  );
}

export default Card;
