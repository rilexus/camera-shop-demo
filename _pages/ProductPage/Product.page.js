import React from "react";
import { useProduct } from "../../Providers/ProductsProvider";
import { Container, Flex, Grid, LargeButton, Padding } from "../../ui";
import Layout from "../../components/Layout/Layout";
import Footer from "../../components/Footer/Footer";
import { Navigation } from "../../components";
import StarRating from "../../components/StarRating/StarRating";
import FavourButton from "../../components/FavourButton/FavourButton";
import styled from "styled-components";
import { colors } from "../../ui/theme/theme";

const Details = styled.details`
  margin-bottom: 2em;
  border-bottom: 1px solid ${colors("gray.3")};
`;

const Summary = styled.summary`
  font-weight: 600;
  margin-bottom: 2em;
  cursor: pointer;
`;

const ProductPage = ({ id }) => {
  const [{ src, name, rating, description, price }] = useProduct(id);

  return (
    <Layout
      navigation={<Navigation />}
      main={
        <Padding padding={"6em 0 0 0"}>
          <main>
            <Container>
              <Grid gutter={"2em"}>
                <Grid.Item md={40}>
                  <Flex justify={"center"}>
                    <StarRating rating={rating} />
                  </Flex>
                  <div>
                    <img width={"100%"} height={"auto"} src={src} alt="" />
                  </div>
                </Grid.Item>
                <Grid.Item md={60}>
                  <div>
                    <h1>{name}</h1>
                    <div
                      style={{
                        position: "absolute",
                        right: "0",
                        top: "3em",
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
                    <LargeButton>Add to cart</LargeButton>
                  </div>
                </Grid.Item>
                <Grid.Item>
                  <Details>
                    <Summary>Details</Summary>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dignissimos excepturi modi officiis omnis perferendis
                    reiciendis soluta totam unde. Accusamus doloribus eaque et
                    iusto magni modi nihil officiis qui similique tempore.
                  </Details>
                  <Details>
                    <Summary>Reviews</Summary>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dignissimos excepturi modi officiis omnis perferendis
                    reiciendis soluta totam unde. Accusamus doloribus eaque et
                    iusto magni modi nihil officiis qui similique tempore.
                  </Details>
                  <Details>
                    <Summary>Delivery & Payment</Summary>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dignissimos excepturi modi officiis omnis perferendis
                    reiciendis soluta totam unde. Accusamus doloribus eaque et
                    iusto magni modi nihil officiis qui similique tempore.
                  </Details>
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
