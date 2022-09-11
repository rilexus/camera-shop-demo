import React, { useMemo } from "react";
import { useCart } from "../../Providers/CartProvider/CartProvider";
import Layout from "../../components/Layout/Layout";
import { Navigation, ProductSuggestions } from "../../components";
import {
  Button,
  Container,
  Flex,
  Grid,
  Input,
  Margin,
  Padding,
} from "../../ui";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import Info from "./Info/Info";
import ProductListElement from "./ProductListElement/ProductListElement";
import ButtonSlim from "../../ui/buttons/ButtonSlim/ButtonSlim";
import { useInput } from "../../hooks";
import { colors } from "../../ui/theme/theme";
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
const Coupon = () => {
  const input = useInput({ initialValue: "" });

  return (
    <Flex align={"center"}>
      <Input
        placeholder={"Coupon"}
        type={"text"}
        style={{
          maxWidth: "300px",
        }}
        {...input}
      />
      <Margin value={"0 0 0 1em"}>
        <ButtonSlim disabled={input.value === ""}>Apply</ButtonSlim>
      </Margin>
    </Flex>
  );
};

const Styled = styled.div`
  text-align: center;
  font-size: 2em;
  color: ${colors("gray.4")};
  margin: 2em;
`;

const NoProducts = () => {
  return <Styled>No products added</Styled>;
};

const Cart = () => {
  const [cart] = useCart();
  const products = useMemo(() => Object.values(cart), [cart]);

  return (
    <Layout
      navigation={<Navigation />}
      main={
        <div>
          <Container>
            <Padding padding={"6rem 0 0 0"} style={{}}>
              <Grid gutter={"3em"}>
                <Grid.Item sm={60}>
                  <Margin value={"0 0 3em 0"}>
                    <ProductTable>
                      {products.map((product) => {
                        return (
                          <ProductListElement
                            id={product.id}
                            key={product.id}
                          />
                        );
                      })}
                    </ProductTable>
                    {products.length === 0 ? <NoProducts /> : null}
                  </Margin>
                  <Coupon />
                </Grid.Item>
                <Grid.Item sm={40}>
                  <Info />
                </Grid.Item>
              </Grid>
            </Padding>
          </Container>
          <Margin value={"5em 0"}>
            <ProductSuggestions />
          </Margin>
        </div>
      }
      footer={<Footer />}
    />
  );
};

export default Cart;
