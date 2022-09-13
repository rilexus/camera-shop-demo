import React from "react";
import { Container, Grid, Padding, Text } from "../../../../ui";
import styled from "styled-components";

const P = styled.p`
  line-height: 1.5;
  margin-bottom: 1em;
  font-size: 1.2rem;
  margin-top: 0;
`;

const WhoWeAreSection = () => {
  return (
    <section>
      <Container>
        <Text align={"center"}>
          <h1>Who we are?</h1>
        </Text>
        <Grid gutter={"1em"}>
          <Grid.Item sm={100} md={50}>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              aut corporis dolores magni quaerat, quis rem veniam. Aliquam
              architecto, blanditiis dolor esse explicabo laudantium omnis
              placeat porro ratione sapiente velit. consectetur adipisicing
              elit. Cumque eos inventore labore magni optio qui quisquam saepe
              tempora temporibus voluptate. Debitis dolorem earum eveniet itaque
              non numquam praesentium sit voluptate!
            </P>
            <P>
              Accusamus delectus, incidunt! Aliquid cum eius inventore,
              molestias provident quibusdam! A accusantium consequatur doloribus
              inventore, iste maiores officia quam quisquam tenetur veniam!
            </P>
            <P>
              Architecto ducimus fugit hic in ipsa molestias nostrum repellendus
              sit ut? Aspernatur cum dicta eveniet facilis id impedit iusto
              laboriosam repellat velit?
            </P>
          </Grid.Item>
          <Grid.Item sm={100} md={50}>
            <img
              width={"100%"}
              height={"auto"}
              src="https://thumbs.dreamstime.com/b/life-like-camera-retro-style-women-men-hold-analog-photo-cameras-group-photographers-paparazzi-136730975.jpg"
              alt=""
            />
          </Grid.Item>
        </Grid>
      </Container>
    </section>
  );
};

export default WhoWeAreSection;
