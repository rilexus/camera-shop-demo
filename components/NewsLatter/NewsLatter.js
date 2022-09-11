import React from "react";
import styled from "styled-components";
import { Flex, LargeButton } from "../../ui";
import { ALIGN, JUSTIFY } from "../../ui/Flex";

const Input = styled.input`
  padding: 1.1em 3em 1em 1em;
  font-size: 1rem;
  outline: none;
  margin-right: 1em;
  border: 2px solid #d2d2d2;

  :focus {
    border: 2px solid black;
  }
`;

const Button = styled(LargeButton)`
  background-color: rgb(240, 240, 240);

  :hover {
    background-color: rgb(224, 224, 224);
  }
`;

const H1 = styled.h1`
  font-size: 2rem;
  margin-right: 1em;
`;

const NewsLatter = () => {
  return (
    <Flex
      justify={"center"}
      align={ALIGN.center}
      as={"section"}
      style={{
        flexWrap: "wrap",
      }}
    >
      <H1>Dont miss the news</H1>
      <Flex justify={JUSTIFY.center}>
        <Input type="text" placeholder={"Your Email"} />
        <Button>Subscribe</Button>
      </Flex>
    </Flex>
  );
};

export default NewsLatter;
