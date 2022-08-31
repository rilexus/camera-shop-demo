import React from "react";
import { Checkbox, Container, Flex, Padding, Text } from "../../ui";
import Layout from "../../components/Layout/Layout";
import { Navigation } from "../../components";
import styled, { useTheme } from "styled-components";
import { colors } from "../../ui/theme/theme";
import Footer from "../../components/Footer/Footer";
import ProductTile from "./components/ProductTile/ProductTile";
import { useProduct, useProducts } from "../../Providers/ProductsProvider";
import Link from "next/link";

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
  return (
    <Link href={{ pathname: `/product/${prod.id}` }}>
      <a>
        <ProductTile {...prod} />
      </a>
    </Link>
  );
};

const Details = ({ children }) => {
  return <details>{children}</details>;
};

const StyledSummary = styled.summary`
  margin-bottom: 1em;
  cursor: pointer;
`;

const PriceInput = styled.input`
  box-sizing: border-box;
  width: 5em;
  border: 1px solid black;
  outline: none;
  padding: 0.5em 1em;

  &:hover {
    border: 1px solid red;
  }
  &:focus {
    border: 1px solid red;
  }
`;

const Sidebar = () => {
  return (
    <Padding padding={"3em 0 0 2em"}>
      <Details>
        <StyledSummary>Brand</StyledSummary>
        <Checkbox id={"polaroid"} name={"polaroid"} label={"Polaroid"} />
        <Checkbox id={"fujiFilm"} name={"fujiFilm"} label={"FujiFilm"} />
        <Checkbox
          id={"lomoInstant"}
          name={"lomoInstant"}
          label={"Lomo Instant"}
        />
        <Padding padding={"1em 0 0 0"} />
      </Details>
      <Details>
        <StyledSummary>Colors</StyledSummary>
        <Checkbox id={"white"} name={"white"} label={"White"} />
        <Checkbox id={"black"} name={"black"} label={"Black"} />
        <Checkbox id={"blue"} name={"blue"} label={"Blue"} />
        <Checkbox id={"gold"} name={"gold"} label={"Gold"} />
        <Padding padding={"1em 0 0 0"} />
      </Details>
      <Details>
        <StyledSummary>Condition</StyledSummary>
        <Checkbox id={"new"} name={"new"} label={"New"} />
        <Checkbox id={"used"} name={"used"} label={"Used"} />
        <Padding padding={"1em 0 0 0"} />
      </Details>
      <Details>
        <StyledSummary>Price</StyledSummary>
        <Flex wrap={"wrap"} align={"center"}>
          <PriceInput type="number" min={0} placeholder={"Min"} />
          <Padding padding={"0 .3em 0 .3em"}>-</Padding>
          <PriceInput type="number" placeholder={"max"} />
        </Flex>
        <Padding padding={"1em 0 0 0"} />
      </Details>
    </Padding>
  );
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
            <div
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "300px",
                  borderRight: `1px solid ${colors("gray.1")({ theme })}`,
                }}
              >
                <Sidebar />
              </div>
              <div
                style={{
                  width: "100%",
                }}
              >
                <Padding padding={"3em"}>
                  <Grid>
                    {products.map(({ id }) => {
                      return <Product key={id} id={id} />;
                    })}
                  </Grid>
                </Padding>
              </div>
            </div>
          </Padding>
        </div>
      }
      footer={<Footer />}
    />
  );
};

export default EShop;
