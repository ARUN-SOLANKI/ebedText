import React from "react";
import Home from "./screens/Home";
import MyContextApp from "./ContextApi/MyContext";

function App() {
  return (
    <MyContextApp>
      <Home />
    </MyContextApp>
  );
}

export default App;
