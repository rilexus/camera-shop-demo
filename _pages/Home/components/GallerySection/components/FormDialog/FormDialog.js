import styled from "styled-components";
import { md, sm } from "../../../../../../ui/css/medias";
import { colors } from "../../../../../../ui/theme/theme";
import CloseOutlined from "../../../../../../ui/icons/CloseOutlined/CloseOutlined";
import {
  Dialog,
  LargeButton,
  Padding,
  Text,
  YStack,
} from "../../../../../../ui";
import React from "react";

const MediaWidth = styled.div`
  min-width: 500px;
  ${sm`
    min-width: 540px;
  `}
  ${md`
    min-width: 700px;
  `}
`;
const Bg = styled.div`
  background-color: ${colors("gray.1")};
`;

const Border = styled.div`
  border: 2px solid black;
`;

const Input = styled.input`
  outline: none;
  border: 1px solid black;
  width: 100%;
  background-color: transparent;
  padding: 0.5em 0.5em;
  box-sizing: border-box;
`;

const Textarea = styled.textarea`
  box-sizing: border-box;
  outline: none;
  border: 1px solid black;
  width: 100%;
  background-color: transparent;
  padding: 0.5em 0.5em;
`;

const CloseButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        right: "2px",
        top: "2px",
        cursor: "pointer",
        padding: "1.5em",
        border: "none",
      }}
    >
      <CloseOutlined width={"1.5em"} height={"1.5em"} />
    </button>
  );
};

const FormDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open}>
      <section>
        <MediaWidth>
          <Bg>
            <Border>
              <Padding padding={"2em"}>
                <Text align={"right"}>
                  <CloseButton onClick={onClose} />
                </Text>
                <div
                  style={{
                    padding: "0 2em",
                  }}
                >
                  <YStack>
                    <Text align={"center"}>
                      <h1
                        style={{
                          fontSize: "2em",
                        }}
                      >
                        Share your work
                      </h1>
                    </Text>
                    <label>
                      Full name
                      <br />
                      <Input type="text" placeholder={"Full name"} />
                    </label>
                    <label htmlFor="">
                      Email
                      <br />
                      <Input type="email" placeholder={"Email"} />
                    </label>
                    <label>
                      Note
                      <br />
                      <Textarea name="note" id="" cols="30" rows="10" />
                    </label>

                    <Text align={"center"}>
                      <LargeButton onClick={onClose}>Send</LargeButton>
                    </Text>
                  </YStack>
                </div>
              </Padding>
            </Border>
          </Bg>
        </MediaWidth>
      </section>
    </Dialog>
  );
};

export default FormDialog;
