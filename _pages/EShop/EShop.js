import React from "react";
import { Container, Grid, Padding, Text } from "../../ui";
import Layout from "../../components/Layout/Layout";
import { Navigation } from "../../components";
import styled from "styled-components";
import { colors } from "../../ui/theme/theme";
import Footer from "../../components/Footer/Footer";

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
  border-bottom: 1px solid ${colors("gray.3")};
`;

const ProductTile = ({ src, name, price }) => {
  return (
    <div>
      <div>
        <img src={src} alt="" />
      </div>
      <div>{name}</div>
      <div>{price}</div>
    </div>
  );
};

const EShop = () => {
  return (
    <Layout
      navigation={<Navigation />}
      main={
        <div>
          <Padding padding={"6rem 0 0 0"}>
            Home &gt; Shop
            <Intro />
            <HorizontalLine />
            <Grid>
              <Grid.Item sm={25}>asd</Grid.Item>
              <Grid.Item sm={75}>asd</Grid.Item>
            </Grid>
          </Padding>
        </div>
      }
      footer={<Footer />}
    />
  );
};

export default EShop;
