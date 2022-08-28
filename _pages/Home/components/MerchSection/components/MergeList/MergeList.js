import React, { useMemo } from "react";
import { HeartFilled, StarFilled } from "../../../../../../ui/icons";
import { useMouseOver, useToggle } from "../../../../../../hooks";
import {
  Display,
  Flex,
  Grid,
  LargeButton,
  Padding,
  Text,
  XStack,
} from "../../../../../../ui";
import { ALIGN, JUSTIFY } from "../../../../../../ui/Flex";
import HeartOutlined from "../../../../../../ui/icons/HeartOutlined/HeartOutlined";
import ButtonStyleless from "../../../../../../ui/buttons/ButtonStyleless/ButtonStyleless";
import ScrollableList from "../../../../../../ui/ScrollableList/ScrollableList";
import { useFavouredProducts } from "../../../../../../Providers/FavorProvider";

const Rating = ({ rating }) => {
  const r = useMemo(
    () => Array.from({ length: rating }).fill(StarFilled),
    [rating]
  );
  return (
    <div>
      {r.map((C, idx) => {
        return (
          <C key={idx} height={"1.5em"} width={"1.5em"} fill={"#ecc40f"} />
        );
      })}
    </div>
  );
};

const HeartIcon = ({ type = "filled", ...props }) => {
  return (
    <>
      {type === "filled" ? (
        <HeartFilled {...props} height={"1.5em"} width={"1.5em"} fill={"red"} />
      ) : null}
      {type === "outlined" ? (
        <HeartOutlined
          {...props}
          height={"1.5em"}
          width={"1.5em"}
          fill={"red"}
        />
      ) : null}
    </>
  );
};

const HeartButton = ({ type, ...props }) => {
  return (
    <ButtonStyleless {...props}>
      <HeartIcon type={type} />
    </ButtonStyleless>
  );
};

const MergeTile = ({ id, src, title, price, description, rating }) => {
  const [isOver, ref] = useMouseOver();
  const [favouredProducts, setFavouredProducts] = useFavouredProducts();

  const favored = favouredProducts.includes(id);

  const favour = (id) => {
    setFavouredProducts((old) => {
      if (!favored) {
        return [...old, id];
      }
      return old.filter((i) => id !== i);
    });
  };

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
          <Rating rating={rating} />
        </Display>
      </Flex>
      <Flex justify={JUSTIFY.end}>
        <HeartButton
          type={favored ? "filled" : "outlined"}
          onClick={() => favour(id)}
        />
      </Flex>
      <img src={src} alt="" width={"auto"} height={"100%"} />
      <Text align={"center"}>
        <div>{price}</div>
        <div
          style={{
            fontSize: "1.3rem",
          }}
        >
          <Padding padding={".7em"}>{title}</Padding>
        </div>
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
        <XStack>
          {products.map(({ title, price, description, src, id, rating }) => {
            return (
              <MergeTile
                key={id}
                id={id}
                rating={rating}
                title={title}
                price={price}
                description={description}
                src={src}
              />
            );
          })}
        </XStack>
      </ScrollableList>
    </Grid>
  );
};

export default MergeList;
