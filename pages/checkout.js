import React, { useMemo } from "react";
import { useCart } from "../Providers/CartProvider/CartProvider";
import Layout from "../components/Layout/Layout";
import { Navigation } from "../components";
import Footer from "../components/Footer/Footer";
import { Container, Flex, Grid, Padding } from "../ui";
import styled from "styled-components";

const Counter = ({ value, onChange, onDecrement, onIncrement }) => {
  return (
    <div>
      <button
        onClick={() => {
          onDecrement?.();
          onChange?.({ target: { value: value - 1 } });
        }}
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
    <tr
      style={{
        padding: "2em 0",
      }}
    >
      <td>
        <Flex align={"center"}>
          <img src={src} width={"100px"} height={"auto"} alt="" />
          <div>{name}</div>
        </Flex>
      </td>

      <td>{price}</td>
      <td>
        <Counter
          value={count}
          onIncrement={() => {
            addProduct(product, 1);
          }}
          onDecrement={() => {
            removeProduct(id, 1);
          }}
        />
      </td>
      <td>300$</td>
      <td>
        <button>remove</button>
      </td>
    </tr>
  );
};

const Th = styled.th`
  text-align: left;
`;

const Checkout = () => {
  const [cart] = useCart();

  const products = useMemo(() => Object.values(cart), [cart]);

  return (
    <Layout
      navigation={<Navigation />}
      main={
        <Container>
          <Padding padding={"6rem 0 0 0"}>
            <Grid gutter={"1rem"}>
              <Grid.Item sm={70}>
                <table>
                  <thead>
                    <tr>
                      <th
                        style={{
                          textAlign: "left",
                        }}
                      >
                        Product
                      </th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th> </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => {
                      return (
                        <ProductListElement id={product.id} key={product.id} />
                      );
                    })}
                  </tbody>
                </table>
              </Grid.Item>
              <Grid.Item sm={30}>info</Grid.Item>
            </Grid>
          </Padding>
        </Container>
      }
      footer={<Footer />}
    />
  );
};

export default Checkout;
