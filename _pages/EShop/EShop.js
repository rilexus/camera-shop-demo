import React from "react";
import { Container, Grid as Row, Padding, Text } from "../../ui";
import Layout from "../../components/Layout/Layout";
import { Navigation } from "../../components";
import styled, { useTheme } from "styled-components";
import { colors } from "../../ui/theme/theme";
import Footer from "../../components/Footer/Footer";
import ProductTile from "./components/ProductTile/ProductTile";
import { useProduct, useProducts } from "../../Providers/ProductsProvider";

const P = styled.p`
  line-height: 1.45;
  padding: 1em 10em;
`;

const Intro = () => {
  return (
    <Container>
      <Padding padding={"4em 0"}>
        <Text align={"center"}>
          <h1>Instant film cameras</h1>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            esse facere fuga laborum minima sint voluptate! Blanditiis dicta
            enim esse explicabo libero necessitatibus, nihil qui quo quos totam
            vitae, voluptas! Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Ad deserunt ea labore, maxime nisi nulla repudiandae suscipit
            voluptate? Doloremque ea eaque expedita, iure minima odit quisquam
            quo sint soluta voluptatum.
          </P>
        </Text>
      </Padding>
    </Container>
  );
};

const HorizontalLine = styled.div`
  height: 1px;
  border-bottom: 1px solid ${colors("gray.1")};
`;

const StyledGrid = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
`;

const Grid = ({ children }) => {
  return <StyledGrid>{children}</StyledGrid>;
};

const Product = ({ id }) => {
  const [prod] = useProduct(id);
  return <ProductTile {...prod} />;
};

const EShop = () => {
  const theme = useTheme();
  const [prod] = useProducts();
  const products = Object.values(prod);

  return (
    <Layout
      navigation={<Navigation />}
      main={
        <div>
          <Padding padding={"6rem 0 0 0"}>
            Home &gt; Shop
            <Intro />
            <HorizontalLine />
            <Row>
              <Row.Item
                sm={25}
                style={{
                  borderRight: `1px solid ${colors("gray.1")({ theme })}`,
                }}
              />
              <Row.Item sm={75}>
                <Padding padding={"3em"}>
                  <Grid>
                    {products.map(({ id }) => {
                      return <Product key={id} id={id} />;
                    })}
                  </Grid>
                </Padding>
              </Row.Item>
            </Row>
          </Padding>
        </div>
      }
      footer={<Footer />}
    />
  );
};

export default EShop;
