import React, { useMemo } from "react";
import { useCart } from "../../Providers/CartProvider/CartProvider";
import Layout from "../../components/Layout/Layout";
import { Navigation } from "../../components";
import { Container, Grid, Padding } from "../../ui";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import Info from "./Info/Info";
import ProductListElement from "./ProductListElement/ProductListElement";
const Th = styled.th`
  text-align: left;
  padding: 1em 0;
`;

const Tr = styled.tr``;

const Table = styled.table`
  border-collapse: collapse;
`;

const ProductTable = ({ children }) => {
  return (
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
      <tbody>{children}</tbody>
    </Table>
  );
};

const Cart = () => {
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
                <ProductTable>
                  {products.map((product) => {
                    return (
                      <ProductListElement id={product.id} key={product.id} />
                    );
                  })}
                </ProductTable>
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

export default Cart;
