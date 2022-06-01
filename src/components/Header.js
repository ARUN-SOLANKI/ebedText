import React from "react";

function Header({ title, subTitle }) {
  return (
    <div className="HeaderContainer">
      <h3 className="HeaderTitle">{title}</h3>
      <p className="HeaderSubTitle">{subTitle}</p>
    </div>
  );
}

export default Header;
