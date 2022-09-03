import React from "react";
import { Flex, Padding, Shadow } from "../../../../ui";
import { ALIGN } from "../../../../ui/Flex";
import styled from "styled-components";
import { colors } from "../../../../ui/theme/theme";

const BG = styled.div`
  background-color: ${colors("gray.2")};
`;

const Border = styled.div`
  border-bottom: 2px solid black;
`;

const Layout = ({ logo, icons, main }) => {
  return (
    <div>
      <Border>
        <BG>
          <Padding padding={"2em 0"}>
            <div
              style={{
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "1rem",
                  top: "-1em",
                }}
              >
                <Flex align={ALIGN.center}>{logo}</Flex>
              </div>
              <Flex
                style={{
                  position: "absolute",
                  top: "-0.5em",
                  transform: "translate(-50%)",
                  left: "50%",
                }}
              >
                {main}
              </Flex>
              <div
                style={{
                  position: "absolute",
                  top: "-1.2em",
                  right: "1rem",
                }}
              >
                {icons}
              </div>
            </div>
          </Padding>
        </BG>
      </Border>
    </div>
  );
};

export default Layout;
