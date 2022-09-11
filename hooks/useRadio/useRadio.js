import { useState } from "react";

const useRadio = ({ initialValues }) => {
  const [state, setState] = useState(initialValues);

  const register = ({ name }) => {
    return {
      name,
      checked: state[name],
      onChange: (e) => {
        const { checked, name } = e.target;
        setState((s) => {
          const a = Object.entries(s).reduce((acc, [key, value]) => {
            return {
              ...acc,
              [key]: false,
            };
          }, {});
          return { ...a, [name]: checked };
        });
      },
    };
  };
  return { register, values: state };
};

export default useRadio;
