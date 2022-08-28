import React, { useCallback, useState } from "react";
import { ButtonStyleless, Flex, Padding, Shadow, XStack } from "../../ui";
import { ALIGN, JUSTIFY } from "../../ui/Flex";
import {
  BagOutlined,
  HeartFilled,
  HeartOutlined,
  SearchOutlined,
} from "../../ui/icons";
import { useToggle } from "../../hooks";
import PersonOutlined from "../../ui/icons/PersonOutlined/PersonOutlined";
import styled from "styled-components";
import EyeOutlined from "../../ui/icons/EyeOutlined/EyeOutlined";
import { sm } from "../../ui/css/medias";
import { useFavouredProducts } from "../../Providers/FavorProvider";

const useInput = ({ init }) => {
  const [value, setValue] = useState(init);

  const onChange = useCallback((e) => {
    const { value } = e.target;
    setValue(value);
  }, []);

  return { value, onChange };
};

const Input = styled.input`
  padding: 0.5em 1em;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
`;

const SearchInput = ({ onChange, value }) => {
  const [isOpen, toggle] = useToggle(false);
  const [favouredProducts] = useFavouredProducts();

  const hasProducts = favouredProducts.length > 0;
  return (
    <Flex align={ALIGN.center}>
      <div
        style={{
          marginRight: "0.75em",
          overflow: "hidden",
          transition: "width 400ms",
          width: isOpen ? "200px" : 0,
        }}
      >
        <Input
          placeholder={"Search"}
          type="text"
          value={value}
          onChange={onChange}
        />
      </div>
      <Flex>
        <XStack value={".75em"}>
          <div>
            <ButtonStyleless onClick={toggle}>
              <SearchOutlined width={"1.2em"} height={"1.2em"} />
            </ButtonStyleless>
          </div>
          <div>
            <PersonOutlined
              width={"1.2em"}
              height={"1.2em"}
              strokeWidth={"40"}
            />
          </div>
          <div>
            {hasProducts ? (
              <HeartFilled width={"1.2em"} height={"1.2em"} fill={"red"} />
            ) : (
              <HeartOutlined width={"1.2em"} height={"1.2em"} />
            )}
          </div>
          <div>
            <BagOutlined width={"1.2em"} height={"1.2em"} />
          </div>
        </XStack>
      </Flex>
    </Flex>
  );
};

const MediaHide = styled.div`
  display: none;
  ${sm`
    display: inherit;
  `}
`;

const Navigation = () => {
  const searchInput = useInput({ init: "" });

  return (
    <Shadow
      style={{
        backgroundColor: "white",
      }}
    >
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
            <Flex align={ALIGN.center}>
              <XStack value={".2em"}>
                <EyeOutlined width={"2em"} height={"2em"} />
                <MediaHide>ANALOG</MediaHide>
              </XStack>
            </Flex>
          </div>
          <Flex
            style={{
              position: "absolute",
              top: "-0.5em",
              transform: "translate(-50%)",
              left: "50%",
            }}
          >
            <XStack>
              <span>E-Shop</span>
              <span>Services</span>
              <span>Custom</span>
            </XStack>
          </Flex>
          <div
            style={{
              position: "absolute",
              top: "-1.2em",
              right: "1rem",
            }}
          >
            <SearchInput {...searchInput} />
          </div>
        </div>
      </Padding>
    </Shadow>
  );
};

export default Navigation;
