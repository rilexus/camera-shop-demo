import styled from "styled-components";
import { useInput, useToggle } from "../../../../hooks";
import React, { useEffect, useRef } from "react";
import useClickOutside from "../../../../hooks/useClickOutside/useClickOutside";
import { ButtonStyleless, Flex } from "../../../../ui";
import { ALIGN } from "../../../../ui/Flex";
import { SearchOutlined } from "../../../../ui/icons";

const Input = styled.input`
  padding: 0.5em 1em;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
`;

const SearchInput = ({ value, onChange, ...props }) => {
  const [isOpen, toggle] = useToggle(false);
  const inputRef = useRef(null);

  const ref = useClickOutside(() => {
    if (isOpen) {
      toggle();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current.focus();
    }
  }, [isOpen, inputRef]);

  return (
    <Flex align={ALIGN.center} ref={ref}>
      <div
        style={{
          overflow: "hidden",
          transition: "width 200ms",
          width: isOpen ? "200px" : 0,
        }}
      >
        <Input
          ref={inputRef}
          placeholder={"Search"}
          {...props}
          type="text"
          value={value}
          onChange={onChange}
        />
      </div>

      <ButtonStyleless onClick={toggle}>
        <SearchOutlined width={"1.2em"} height={"1.2em"} />
      </ButtonStyleless>
    </Flex>
  );
};

export default SearchInput;
