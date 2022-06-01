import React, { createContext, useState } from "react";
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

  return (
    <MyContext.Provider
      value={{
        screen: screen,
        setScreen: setScreen,
        Headings: Headings,
        handleScreen: handleScreen,
        allActiveScreens: allActiveScreens,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyContextApp;
