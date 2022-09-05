import React from "react";
import { useMouseOver } from "../../../../../../hooks";
import {
  Display,
  Flex,
  Grid,
  LargeButton,
  Margin,
  Padding,
  Text,
} from "../../../../../../ui";
import { JUSTIFY } from "../../../../../../ui/Flex";
import ScrollableList from "../../../../../../ui/ScrollableList/ScrollableList";
import FavourButton from "../../../../../../components/FavourButton/FavourButton";
import StarRating from "../../../../../../components/StarRating/StarRating";

const MergeTile = ({ id, src, title, price, description, rating }) => {
  const [isOver, ref] = useMouseOver();

  return (
    <div
      ref={ref}
      style={{
        padding: "1.5em",
        backgroundColor: "rgb(240, 240, 240)",
      }}
    >
      <Flex justify={JUSTIFY.center}>
        <Display on={isOver}>
          <StarRating rating={rating} />
        </Display>
      </Flex>
      <Flex justify={JUSTIFY.end}>
        <FavourButton id={id} />
      </Flex>
      <img src={src} alt="" width={"auto"} height={"100%"} />
      <Text align={"center"}>
        <div
          style={{
            fontSize: "1.3rem",
          }}
        >
          <Padding padding={".7em"}>{title}</Padding>
        </div>
        <div>{price}</div>
      </Text>
      <Display on={isOver}>
        <Padding padding={"1em"}>
          <Text
            align={"center"}
            style={{
              fontSize: ".9rem",
            }}
          >
            {description}
          </Text>
        </Padding>
        <Padding padding={"1em 0"}>
          <Flex justify={JUSTIFY.around}>
            <LargeButton>Read more</LargeButton>
            <LargeButton>Add to Cart</LargeButton>
          </Flex>
        </Padding>
      </Display>
    </div>
  );
};

const MergeList = ({ products }) => {
  return (
    <Grid
      style={{
        padding: "0 1em",
        justifyContent: "center",
      }}
    >
      <ScrollableList>
        {products.map(({ name, price, description, src, id, rating }) => {
          return (
            <Margin value={"0 1em 0 0"} key={id}>
              <a href={`/product/${id}`}>
                <MergeTile
                  id={id}
                  rating={rating}
                  title={name}
                  price={`${price.value}$`}
                  description={description}
                  src={src}
                />
              </a>
            </Margin>
          );
        })}
      </ScrollableList>
    </Grid>
  );
};

export default MergeList;
