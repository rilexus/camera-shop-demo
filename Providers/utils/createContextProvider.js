import { createContext, useContext, useState } from "react";

const createContextProvider = (reducer) => {
  const initialState = reducer(undefined);

  const context = createContext([initialState, () => {}]);

  const Provider = ({ children }) => {
    const state = useState(initialState);

    const setState = (valueOrFunction) => {
      state[1]((oldState) => {
        if (typeof valueOrFunction === "function") {
          return reducer(valueOrFunction(oldState));
        }
        return reducer(valueOrFunction);
      });
    };

    return (
      <context.Provider value={[state[0], setState]}>
        {children}
      </context.Provider>
    );
  };

  const use = () => {
    // eslint-disable-next-line
    return useContext(context);
  };

  return { Provider, useContext: use };
};
export default createContextProvider;
