import React from "react";
import { Checkbox, Flex, Padding, Text } from "../../ui";
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

const Detail = ({ summary, children }) => {
  return (
    <Details>
      <StyledSummary>{summary}</StyledSummary>

      <Padding padding={"0 0 1em 1em"}>{children}</Padding>
    </Details>
  );
};

const useQuery = (name) => {
  const router = useRouter();
  const query = router.query;
  const queryValue = query[name] ? query[name].split(",") : [];

  const set = (value) => {
    if (value === "") {
      const { [name]: remove, ...rest } = router.query;
      router.query = rest;
    } else {
      router.query[name] = value;
    }
    router.push(router);
  };

  const add = (value) => {
    const values = router.query[name].split(",");
    router.query[name] = [...values, value].join(",");
    router.push(router);
  };

  const remove = (value) => {
    const values = router.query[name].split(",");
    router.query[name] = values.filter((v) => value !== v).join(",");
    router.push(router);
  };

  return [queryValue, { set, add, remove }];
};

const Sidebar = () => {
  const [category, { set: setCategory }] = useQuery("category");
  const [color, { set: setColor, add }] = useQuery("color");

  return (
    <Padding padding={"3em 0 0 2em"}>
      <Detail summary={"Category"}>
        <Checkbox
          checked={category?.includes("instant-cameras")}
          onChange={(e) => {
            const { checked } = e.target;
            if (!checked) {
              setCategory("");
            } else {
              setCategory("instant-cameras");
            }
          }}
          id={"instant-cameras"}
          name={"instant-cameras"}
          label={"Instant Cameras"}
        />
      </Detail>
      <Detail summary={"Brand"}>
        <Checkbox id={"polaroid"} name={"polaroid"} label={"Polaroid"} />
        <Checkbox id={"fujiFilm"} name={"fujiFilm"} label={"FujiFilm"} />
        <Checkbox
          id={"lomoInstant"}
          name={"lomoInstant"}
          label={"Lomo Instant"}
        />
      </Detail>
      <Detail summary={"Colors"}>
        <Checkbox
          id={"white"}
          name={"white"}
          label={"White"}
          checked={color?.includes("white")}
          onChange={(e) => {
            const { checked } = e.target;
            if (!checked) {
              setColor("");
            } else {
              setColor("white");
            }
          }}
        />
        <Checkbox
          id={"black"}
          name={"black"}
          label={"Black"}
          checked={color.includes("black")}
          onChange={(e) => {
            const { checked } = e.target;
            if (!checked) {
              setColor("");
            } else {
              setColor("black");
            }
          }}
        />
        <Checkbox id={"blue"} name={"blue"} label={"Blue"} />
        <Checkbox id={"gold"} name={"gold"} label={"Gold"} />
      </Detail>
      <Detail summary={"Condition"}>
        <Checkbox id={"new"} name={"new"} label={"New"} />
        <Checkbox id={"used"} name={"used"} label={"Used"} />
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
          <Padding padding={"6rem 0 0 0"}>
            Home &gt; Shop
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
