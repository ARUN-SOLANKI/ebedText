import React, { createContext, useState } from "react";
import Page1 from "../components/Page1";
import Page2 from "../components/Page2";
import Page3 from "../components/Page3";
import Page4 from "../components/Page4";
export const MyContext = createContext();

function MyContextApp({ children }) {
  const [screen, setScreen] = useState(0);
  const [allActiveScreens, setAllActiveScreen] = useState([]);
  const Headings = [
    {
      heading: "Welcome! First Thing First...",
      SubHeading: "you can always change them later",
      buttonTitle: "Create WorkSpace",
      screenId: 0,
    },
    {
      heading: "Let's set up a home for all youtr work",
      SubHeading: "you can always create another workspace later",
      buttonTitle: "Create WorkSpace",
      screenId: 1,
    },
    {
      heading: "how are you plaining to use Eden?",
      SubHeading: "we'll streamline your setup experience accordingly.",
      buttonTitle: "Create WorkSpace",
      screenId: 2,
    },
    {
      heading: "Congratulations, Eren!",
      SubHeading: "you have completed onboarding, you can start using the Eden",
      buttonTitle: "Launch Eden",
      screenId: 3,
    },
  ];

  const handleScreen = () => {
    if (screen <= 2) {
      setScreen((screen) => screen + 1);
      setAllActiveScreen((prev) => [...prev, screen + 1]);
    }
  };

  const pages = () => {
    switch (screen) {
      case 1:
        return <Page2 />;
      case 2:
        return <Page3 />;
      case 3:
        return <Page4 />;
      default:
        return <Page1 />;
    }
  };

  return (
    <MyContext.Provider
      value={{
        screen: screen,
        setScreen: setScreen,
        Headings: Headings,
        handleScreen: handleScreen,
        allActiveScreens: allActiveScreens,
        pages: pages,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyContextApp;
