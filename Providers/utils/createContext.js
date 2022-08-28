import { createContext as reactCreateContext, useContext } from "react";

const createContext = (initialState, name) => {
  const context = reactCreateContext(initialState);

  const Provider = ({ children, value }) => {
    return <context.Provider value={value}>{children}</context.Provider>;
  };

  Provider.displayName = `${name || "ContextProvider"}`;

  const use = () => {
    // eslint-disable-next-line
    return useContext(context);
  };

  return { ...context, Provider, useContext: use };
};
export default createContext;
