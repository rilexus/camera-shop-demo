import React from "react";
import { Flex, Padding, Shadow, XStack } from "../../ui";
import { JUSTIFY } from "../../ui/Flex";

const Navigation = () => {
  return (
    <Shadow
      style={{
        backgroundColor: "white",
      }}
    >
      <Padding padding={"1em 0"}>
        <Flex justify={JUSTIFY.around}>
          <div>logo</div>
          <Flex>
            <XStack>
              <span>E-Shop</span>
              <span>Services</span>
              <span>Custom</span>
            </XStack>
          </Flex>
          <div>Search</div>
        </Flex>
      </Padding>
    </Shadow>
  );
};

export default Navigation;
