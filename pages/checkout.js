import React, { useMemo } from "react";
import { useCart } from "../Providers/CartProvider/CartProvider";
import Layout from "../components/Layout/Layout";
import { Navigation } from "../components";
import Footer from "../components/Footer/Footer";
import {
  ButtonStyleless,
  Container,
  Flex,
  Grid,
  LargeButton,
  Padding,
  Radio,
} from "../ui";
import styled from "styled-components";
import { CloseIcon } from "../ui/icons";
import { colors } from "../ui/theme/theme";

const Th = styled.th`
  text-align: left;
  padding: 1em 0;
`;

const Td = styled.td`
  padding: 1em 0;
`;

const Tr = styled.tr``;

const Table = styled.table`
  border-collapse: collapse;
`;

const Counter = ({ value, onChange, onDecrement, onIncrement, min }) => {
  return (
    <div>
      <button
        onClick={() => {
          onDecrement?.();
          onChange?.({ target: { value: value - 1 } });
        }}
        disabled={value <= min}
      >
        -
      </button>
      <input
        type="number"
        value={value}
        min={1}
        step={1}
        onChange={onChange}
        style={{
          width: "3rem",
        }}
      />
      <button
        onClick={() => {
          onIncrement?.();
          onChange?.({ target: { value: value + 1 } });
        }}
      >
        +
      </button>
    </div>
  );
};

const ProductListElement = ({ id }) => {
  const [cart, { removeProduct, addProduct }] = useCart();
  const product = cart[id];
  const { src, name, price, count } = product;

  return (
    <Tr style={{}}>
      <Td>
        <Flex align={"center"}>
          <img src={src} width={"100px"} height={"auto"} alt="" />
          <div>{name}</div>
        </Flex>
      </Td>

      <Td>{price}</Td>
      <Td>
        <Counter
          min={1}
          value={count}
          onIncrement={() => {
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
const BG = styled.div`
  background-color: ${colors("gray.2")};
`;

const Info = () => {
  return (
    <BG
      style={{
        padding: "2em 2em ",
      }}
    >
      <div
        style={{
          marginBottom: "1em",
          fontWeight: 600,
          fontSize: "1.3rem",
        }}
      >
        Cart Total
      </div>
      <div
        style={{
          marginBottom: "2em",
        }}
      >
        <div
          style={{
            marginBottom: "1em",
          }}
        >
          Delivery Method:
        </div>
        <div>
          <Radio label={"Pick up at the store."} />
          <Radio label={"Delivery by postal service."} />
          <Radio label={"DHL Courier"} />
        </div>
      </div>
      <div
        style={{
          marginBottom: ".5em",
          fontWeight: 600,
          fontSize: "1.2rem",
        }}
      >
        Total 300$
      </div>
      <div>
        <LargeButton>Checkout</LargeButton>
      </div>
    </BG>
  );
};

const Checkout = () => {
  const [cart] = useCart();

  const products = useMemo(() => Object.values(cart), [cart]);

  return (
    <Layout
      navigation={<Navigation />}
      main={
        <Container>
          <Padding
            padding={"6rem 0 0 0"}
            style={{
              minHeight: "100vh",
            }}
          >
            <Grid gutter={"3em"}>
              <Grid.Item sm={60}>
                <Table
                  style={{
                    width: "100%",
                  }}
                >
                  <thead>
                    <Tr
                      style={{
                        borderBottom: "1px solid black",
                      }}
                    >
                      <Th>Product</Th>
                      <Th>Price</Th>
                      <Th>Quantity</Th>
                      <Th>Total</Th>
                      <Th> </Th>
                    </Tr>
                  </thead>
                  <tbody>
                    {products.map((product) => {
                      return (
                        <ProductListElement id={product.id} key={product.id} />
                      );
                    })}
                  </tbody>
                </Table>
              </Grid.Item>
              <Grid.Item sm={40}>
                <Info />
              </Grid.Item>
            </Grid>
          </Padding>
        </Container>
      }
      footer={<Footer />}
    />
  );
};

export default Checkout;
