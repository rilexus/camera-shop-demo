import React from "react";
import { Container, Flex, Grid as Row, Padding, Text } from "../../ui";
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

const StyledLabel = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  /* Hide the browser's default checkbox */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ .checkmark {
      border: 1px solid red;
    }
    &:checked ~ .checkmark:after {
      display: block;
    }
  }

  &:hover {
    color: red;
  }

  &:hover .checkmark {
    border: 1px solid red;
  }

  .checkmark:after {
    left: 5px;
    top: 1px;
    width: 5px;
    height: 10px;
    border: solid red;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

const StyledCheckmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  background-color: transparent;

  border: 1px solid black;

  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;

const Checkbox = ({ id, name, label, checked }) => {
  return (
    <StyledLabel htmlFor={id}>
      <span>{label}</span>
      <input type="checkbox" id={id} name={name} checked={checked} />
      <StyledCheckmark className={"checkmark"} />
    </StyledLabel>
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
            <Row>
              <Row.Item
                sm={15}
                md={20}
                style={{
                  borderRight: `1px solid ${colors("gray.1")({ theme })}`,
                }}
              >
                <Sidebar />
              </Row.Item>
              <Row.Item sm={85} md={80}>
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
