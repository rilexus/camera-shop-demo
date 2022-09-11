import React, { Children } from "react";
import styled from "styled-components";
import { colors } from "../../ui/theme/theme";
import { Flex, Padding, Text } from "../../ui";
import FavourButton from "../FavourButton/FavourButton";
import scrollbarCss from "../../ui/css/scrollbar.css";
import Link from "next/link";

const BG = styled.div`
  background-color: ${colors("gray.1")};
  border-radius: 0.2em;
  position: relative;
`;

const ProductTileSmall = ({ src, name, id }) => {
  return (
    <BG>
      <Padding padding={"2.5em 2em 1.5em 2em"}>
        <div
          style={{
            position: "absolute",
            right: ".5em",
            top: ".5em",
          }}
        >
          <FavourButton id={id} />
        </div>
        <Link href={`/product/${id}`}>
          <a>
            <img src={src} width={"130px"} height={"auto"} />
          </a>
        </Link>
        <Padding padding={"1em 0 0 0"}>
          <Text align={"center"}>
            <div>{name}</div>
            <div
              style={{
                fontSize: ".8em",
              }}
            >
              300$
            </div>
          </Text>
        </Padding>
      </Padding>
    </BG>
  );
};

const StyledScrollView = styled.div`
  overflow-x: scroll;
  padding: 2em 0;
  white-space: nowrap;
  padding-bottom: 4em;
  ${scrollbarCss};
`;

const ScrollView = ({ children }) => {
  return (
    <StyledScrollView>
      {Children.map(children, (child) => {
        return (
          <div
            style={{
              display: "inline-block",
              margin: "0 .9em",
            }}
          >
            {child}
          </div>
        );
      })}
    </StyledScrollView>
  );
};

const ProductSuggestions = () => {
  return (
    <section>
      <Text align={"center"}>
        <h1>You may like</h1>
      </Text>
      <ScrollView>
        <div>
          <ProductTileSmall
            id={1}
            name={"Polaroid"}
            src={"/polaroid_400x400.png"}
          />
        </div>
        <div>
          <ProductTileSmall
            id={1}
            name={"Polaroid"}
            src={"/polaroid_400x400.png"}
          />
        </div>
        <div>
          <ProductTileSmall
            id={1}
            name={"Polaroid"}
            src={"/polaroid_400x400.png"}
          />
        </div>
        <div>
          <ProductTileSmall
            id={1}
            name={"Polaroid"}
            src={"/polaroid_400x400.png"}
          />
        </div>
        <div>
          <ProductTileSmall
            id={1}
            name={"Polaroid"}
            src={"/polaroid_400x400.png"}
          />
        </div>
        <div>
          <ProductTileSmall
            id={1}
            name={"Polaroid"}
            src={"/polaroid_400x400.png"}
          />
        </div>
        <div>
          <ProductTileSmall
            id={1}
            name={"Polaroid"}
            src={"/polaroid_400x400.png"}
          />
        </div>
        <div>
          <ProductTileSmall
            id={1}
            name={"Polaroid"}
            src={"/polaroid_400x400.png"}
          />
        </div>
      </ScrollView>
    </section>
  );
};

export default ProductSuggestions;
