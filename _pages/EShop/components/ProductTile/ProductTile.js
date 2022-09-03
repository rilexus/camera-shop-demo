import React from "react";
import styled from "styled-components";
import { colors } from "../../../../ui/theme/theme";
import { Flex, Padding, Text } from "../../../../ui";
import FavourButton from "../../../../components/FavourButton/FavourButton";
import { JUSTIFY } from "../../../../ui/Flex";
import StarRating from "../../../../components/StarRating/StarRating";

const BG = styled.div`
  background-color: ${colors("gray.1")};
  border-radius: 3px;
  border: 1px solid transparent;
  position: relative;
  &:hover {
    border: 1px solid black;
  }
`;

const ProductTile = ({ id, src, name, price, rating, Link }) => {
  return (
    <BG>
      <Padding padding={"1.5em"}>
        <div
          style={{
            position: "absolute",
            right: "1em",
            top: "1.5em",
          }}
        >
          <FavourButton id={id} />
        </div>
        <Link
          style={{
            cursor: "pointer",
          }}
        >
          <Flex justify={JUSTIFY.center}>
            <Padding padding={"0 0 1em 0"}>
              <StarRating rating={rating} />
            </Padding>
          </Flex>
          <Flex justify={"center"} align={"center"}>
            <img
              width={"80%"}
              height={"80%"}
              style={{
                objectFit: "cover",
              }}
              src={src}
              alt=""
            />
          </Flex>
          <Padding padding={"2em 0 0 0"}>
            <Text align={"center"}>
              <Padding padding={"0 0 .5em 0"}>
                <div
                  style={{
                    fontSize: "1.3rem",
                  }}
                >
                  {name}
                </div>
              </Padding>
              <div>{price}</div>
            </Text>
          </Padding>
        </Link>
      </Padding>
    </BG>
  );
};

export default ProductTile;
