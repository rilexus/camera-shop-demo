import React, { useEffect, useState } from "react";
import styled from "styled-components";
import createContext from "../../../../Providers/utils/createContext";
import { useToggle } from "../../../../hooks";
import ArrowDropdownDown from "../../../../ui/ArrowDropdownDown/ArrowDropdownDown";
import { ButtonStyleless, Flex } from "../../../../ui";
import { JUSTIFY } from "../../../../ui/Flex";

const Inout = styled.input`
  box-sizing: border-box;
  border: 1px solid black;
  width: 100%;
  padding: 0.8em;
  margin: 0.3em 0;
`;

const SelectContext = createContext({});
const withSelectContext = (Component) => {
  const Wrapper = (props) => {
    const state = useState({});

    return (
      <SelectContext.Provider value={state}>
        <Component {...props} />
      </SelectContext.Provider>
    );
  };
  return Wrapper;
};

const StyledLabel = styled.label`
  margin-bottom: 1em;
  font-size: 0.9em;
`;

const Label = (props) => {
  return (
    <StyledLabel
      {...props}
      style={{
        display: "block",
      }}
    />
  );
};

const ArrowButton = ({ onClick }) => (
  <ButtonStyleless
    onClick={onClick}
    style={{
      display: "flex",
      alignItems: "center",
    }}
  >
    <ArrowDropdownDown height={"1.3em"} width={"1.3em"} />
  </ButtonStyleless>
);

const Select = withSelectContext(({ children }) => {
  const [state] = SelectContext.useContext();
  const [isOpen, toggle] = useToggle(false);

  return (
    <div>
      <div
        onClick={toggle}
        style={{
          padding: "0.7em",
          border: "1px solid black",
          cursor: "pointer",
        }}
      >
        <Flex justify={JUSTIFY.between} align={"center"}>
          Value
          <ArrowButton />
        </Flex>
      </div>

      <div
        style={{
          display: isOpen ? "inherit" : "none",
        }}
      >
        {children}
      </div>
    </div>
  );
});

const Option = ({ value }) => {
  const [state, setContext] = SelectContext.useContext();

  console.log(state);

  useEffect(() => {
    setContext((prev) => {
      return { ...prev, [value]: { selected: false } };
    });
    return () => {};
  }, []);

  return <div onClick={() => {}}>{value}</div>;
};

const RegistrationForm = () => {
  return (
    <div>
      <Label>
        Name
        <br />
        <Inout placeholder={"Name"} />
      </Label>
      <Label>
        Street
        <br />
        <Inout placeholder={"Street"} />
      </Label>
      <Label>
        Post Code
        <br />
        <Inout placeholder={"Post Code"} />
      </Label>

      <Label>
        Country
        <br />
        <Select>
          <Option value={"austria"}>Austria</Option>
          <Option value={"germany"}>Germany</Option>
          <Option value={"switzerland"}>Switzerland</Option>
        </Select>
      </Label>

      <Label>
        Town
        <br />
        <Inout placeholder={"Town"} />
      </Label>

      <div>
        <Label>
          Email
          <br />
          <Inout placeholder={"Email"} />
        </Label>
        <Label>
          Phone
          <br />
          <Inout placeholder={"Phone"} />
        </Label>
      </div>
    </div>
  );
};

export default RegistrationForm;
