import { createContext as reactCreateContext, useContext } from "react";

const createContext = (initialState) => {
  const context = reactCreateContext(initialState);

  return {
    ...context,
    useContext: () => {
      return useContext(context);
    },
  };
};

export default createContext;
