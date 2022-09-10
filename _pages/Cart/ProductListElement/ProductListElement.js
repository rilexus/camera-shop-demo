import { useCart } from "../../../Providers/CartProvider/CartProvider";
import { ButtonStyleless, Flex } from "../../../ui";
import { Counter } from "../../../ui/Counter";
import { CloseIcon } from "../../../ui/icons";
import React from "react";
import styled from "styled-components";
const Td = styled.td`
  padding: 1em 0;
`;

const Tr = styled.tr``;

const ProductListElement = ({ id }) => {
  const [cart, { removeProduct, addProduct }] = useCart();
  const product = cart[id];
  const { src, name, price = {}, count } = product;

  return (
    <Tr style={{}}>
      <Td>
        <Flex align={"center"}>
          <img src={src} width={"100px"} height={"auto"} alt="" />
          <div>{name}</div>
        </Flex>
      </Td>

      <Td>{`${price.value}$`}</Td>
      <Td>
        <Counter
          size={"small"}
          min={1}
          value={count}
          onIncrement={() => {
            console.log("in");
            addProduct(product, 1);
          }}
          onDecrement={() => {
            if (count > 1) {
              removeProduct(id, 1);
            }
          }}
        />
      </Td>
      <Td>300$</Td>
      <Td>
        <ButtonStyleless
          onClick={() => {
            removeProduct(id, count);
          }}
        >
          <CloseIcon />
        </ButtonStyleless>
      </Td>
    </Tr>
  );
};

export default ProductListElement;
