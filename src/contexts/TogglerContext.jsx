import { createContext } from "react";

const TogglerContext = createContext();

function TogglerContextProvider({ children }) {
  return <TogglerContext.Provider>{children}</TogglerContext.Provider>;
}

export { TogglerContextProvider };
