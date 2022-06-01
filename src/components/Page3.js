import React, { useContext } from "react";

import "../styles/TextInputStyles.css";
import "../styles/HomeStyles.css";

import Card from "./Card";
import { FaUsers, FaUser } from "react-icons/fa";

function Page3() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Card
          title="for myself"
          subTitle="write better. think more clearly. stay organized"
          Icon={FaUser}
          active={true}
        />
        <Card
          title="With my team"
          subTitle="Wikis, docs, tasks & projects, all in one place"
          Icon={FaUsers}
          active={false}
        />
      </div>
    </div>
  );
}

export default Page3;
