import React from "react";
import { BreadCrumb, Checkbox, Flex, Margin, Padding, Text } from "../../ui";
import Layout from "../../components/Layout/Layout";
import { Navigation } from "../../components";
import styled, { useTheme } from "styled-components";
import { colors } from "../../ui/theme/theme";
import Footer from "../../components/Footer/Footer";
import ProductTile from "./components/ProductTile/ProductTile";
import { useProduct, useProducts } from "../../Providers/ProductsProvider";
import Link from "next/link";
import { l, md, sm, xl } from "../../ui/css/medias";
import { useRouter } from "next/router";
import { QueryCheckbox } from "./components";
import Detail from "../../ui/Details/Details";

const Description = styled.p`
  line-height: 1.45;
  padding-bottom: 3em;
`;

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  ${sm`
    max-width: 540px
  `}
  ${md`
    max-width: 720px;
  `}
`;

const Intro = ({ title, description }) => {
  return (
    <Container>
      <Text align={"center"}>
        <h1>{title}</h1>
        <Description>{description}</Description>
      </Text>
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
  const [product] = useProduct(id);

  return (
    <ProductTile
      {...product}
      Link={({ children }) => {
        return (
          <Link href={`/product/${id}`}>
            <a>{children}</a>
          </Link>
        );
      }}
    />
  );
};

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
      <Detail summary={"Category"}>
        <QueryCheckbox
          queryKey={"category"}
          value={"instant-camera"}
          id={"instant-cameras"}
          name={"instant-cameras"}
          label={"Instant Cameras"}
        />
      </Detail>
      <Detail summary={"Brand"}>
        <QueryCheckbox
          id={"polaroid"}
          name={"polaroid"}
          label={"Polaroid"}
          queryKey={"brand"}
          value={"Polaroid"}
        />
        <QueryCheckbox
          id={"fujiFilm"}
          name={"fujiFilm"}
          label={"FujiFilm"}
          queryKey={"brand"}
          value={"FujiFilm"}
        />
        <QueryCheckbox
          id={"lomoInstant"}
          name={"lomoInstant"}
          label={"Lomo Instant"}
          queryKey={"brand"}
          value={"Lomo Instant"}
        />
      </Detail>
      <Detail summary={"Colors"}>
        <QueryCheckbox
          id={"white"}
          name={"white"}
          label={"White"}
          queryKey={"color"}
          value={"white"}
        />
        <QueryCheckbox
          id={"black"}
          name={"black"}
          label={"Black"}
          queryKey={"color"}
          value={"black"}
        />
        <QueryCheckbox
          id={"blue"}
          name={"blue"}
          label={"Blue"}
          queryKey={"color"}
          value={"blue"}
        />
        <QueryCheckbox
          id={"gold"}
          name={"gold"}
          label={"Gold"}
          queryKey={"color"}
          value={"gold"}
        />
      </Detail>
      <Detail summary={"Condition"}>
        <QueryCheckbox
          id={"new"}
          name={"new"}
          label={"New"}
          queryKey={"condition"}
          value={"new"}
        />
        <QueryCheckbox
          id={"used"}
          name={"used"}
          label={"Used"}
          queryKey={"condition"}
          value={"used"}
        />
      </Detail>
      <Detail summary={"Price"}>
        <Flex wrap={"wrap"} align={"center"}>
          <PriceInput type="number" min={0} placeholder={"Min"} />
          <Padding padding={"0 .3em 0 .3em"}>-</Padding>
          <PriceInput type="number" placeholder={"max"} />
        </Flex>
      </Detail>
    </Padding>
  );
};

const EShop = ({ intro }) => {
  const theme = useTheme();
  const [prod] = useProducts();
  const products = Object.values(prod);

  return (
    <Layout
      navigation={<Navigation />}
      main={
        <div>
          <Padding padding={"5rem 0 0 0"}>
            <Margin value={"0 0 0 2em"}>
              <BreadCrumb
                crumbs={[
                  { label: "Home", href: "/" },
                  { label: "Shop", href: "/shop", current: true },
                ]}
              />
            </Margin>
            <Intro title={intro.title} description={intro.description} />
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
