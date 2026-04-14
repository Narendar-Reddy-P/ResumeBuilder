import { createContext, useContext, useState } from "react";

const TogglerContext = createContext();

function TogglerContextProvider({ children }) {
  const [component, setComponent] = useState("");

  function toggleComponent(text) {
    if (component === text) {
      setComponent("");
    } else {
      setComponent(text);
    }
  }

  return (
    <TogglerContext.Provider value={{ component, toggleComponent }}>
      {children}
    </TogglerContext.Provider>
  );
}

function useComponent() {
  const context = useContext(TogglerContext);
  if (context === undefined) {
    throw new Error(
      "useComponent must be used within a TogglerContextProvider",
    );
  }
  return context;
}

export { TogglerContextProvider, useComponent }; //eslint-disable-line
