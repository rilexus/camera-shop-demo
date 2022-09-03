import React, { useLayoutEffect, useRef, useState } from "react";
import { useProduct } from "../../Providers/ProductsProvider";
import { Container, Flex, Grid, LargeButton, Padding } from "../../ui";
import Layout from "../../components/Layout/Layout";
import Footer from "../../components/Footer/Footer";
import { Navigation } from "../../components";
import StarRating from "../../components/StarRating/StarRating";
import FavourButton from "../../components/FavourButton/FavourButton";
import styled from "styled-components";
import { colors } from "../../ui/theme/theme";
import { Counter } from "./components/Counter";
import { JUSTIFY } from "../../ui/Flex";

const Details = styled.details`
  margin-bottom: 2em;
  border-bottom: 1px solid ${colors("gray.3")};
`;

const Summary = styled.summary`
  font-weight: 600;
  margin-bottom: 2em;
  cursor: pointer;
`;

const Detail = ({ summary, children }) => {
  return (
    <Details>
      <Summary>{summary}</Summary>
      <div
        style={{
          padding: "0 0 2em 0",
        }}
      >
        {children}
      </div>
    </Details>
  );
};

const Info = ({ name, id, price, description }) => {
  const [counter, setCounter] = useState(1);
  return (
    <Flex
      direction={"column"}
      justify={JUSTIFY.between}
      style={{
        height: "100%",
      }}
    >
      <div>
        <h1>{name}</h1>
        <div
          style={{
            position: "absolute",
            right: "0",
            top: "0",
          }}
        >
          <FavourButton id={id} />
        </div>
        <p>
          <span>Price: </span>
          <span>{price}</span>
        </p>
        <p>
          <span>{description}</span>
        </p>
      </div>
      <Flex>
        <Counter
          min={1}
          value={counter}
          onChange={(e) => {
            setCounter(e.target.value);
          }}
        />
        <LargeButton>Add to cart</LargeButton>
      </Flex>
    </Flex>
  );
};

const ProductPage = ({ id }) => {
  const [product = {}] = useProduct(id);

  const { src, name, rating, description, price } = product;

  return (
    <Layout
      navigation={<Navigation />}
      main={
        <Padding padding={"15vh 0 0 0"}>
          <main>
            <Container>
              <Grid gutter={"2.5em"}>
                <Grid.Item md={60} l={40}>
                  <Flex justify={"center"}>
                    <StarRating rating={rating} />
                  </Flex>
                  <div>
                    <img width={"100%"} height={"auto"} src={src} alt="" />
                  </div>
                </Grid.Item>
                <Grid.Item md={40} l={60}>
                  <Padding
                    padding={"2em 0 3em 0"}
                    style={{
                      height: "100%",
                    }}
                  >
                    <Info
                      id={id}
                      price={price}
                      description={description}
                      name={name}
                    />
                  </Padding>
                </Grid.Item>
                <Grid.Item>
                  <Detail summary={"Details"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dignissimos excepturi modi officiis omnis perferendis
                    reiciendis soluta totam unde. Accusamus doloribus eaque et
                    iusto magni modi nihil officiis qui similique tempore.
                  </Detail>
                  <Detail summary={"Reviews"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dignissimos excepturi modi officiis omnis perferendis
                    reiciendis soluta totam unde. Accusamus doloribus eaque et
                    iusto magni modi nihil officiis qui similique tempore.
                  </Detail>
                  <Detail summary={"Delivery & Payment"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dignissimos excepturi modi officiis omnis perferendis
                    reiciendis soluta totam unde. Accusamus doloribus eaque et
                    iusto magni modi nihil officiis qui similique tempore.
                  </Detail>
                </Grid.Item>
              </Grid>
            </Container>
          </main>
        </Padding>
      }
      footer={<Footer />}
    />
  );
};

export default ProductPage;
