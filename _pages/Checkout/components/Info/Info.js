import React from "react";
import styled from "styled-components";
import { colors } from "../../../../ui/theme/theme";
import { LargeButton, Margin, Padding, Radio, Text } from "../../../../ui";

const BG = styled.div`
  background-color: ${colors("gray.2")};
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 1em;
`;

const Subtitle = styled.div`
  margin: 1em 0;
`;

const Delivery = () => {
  return (
    <div>
      <Subtitle>Delivery method:</Subtitle>
      <div>
        <Radio label={"Pick up at the store"} />
        <Radio label={"Delivery by postal office"} />
        <Radio label={"DHL courier"} />
      </div>
    </div>
  );
};

const Payment = () => {
  return (
    <div>
      <Subtitle>Payment method:</Subtitle>
      <div>
        <Radio label={"Credit card"} />
        <Radio label={"Cash on delivery"} />
      </div>
    </div>
  );
};

const Info = () => {
  return (
    <section>
      <BG>
        <Padding padding={"2em"}>
          <Title>Cart Total</Title>
          <div>
            <Subtitle>Products in your cart</Subtitle>
            <div>2x Polaroid</div>
            <div>1x Nishika</div>
          </div>
          <hr />
          <div>
            <Subtitle>Subtotal: 400$</Subtitle>
          </div>
          <hr />
          <Delivery />
          <hr />
          <Payment />
          <hr />
          <Padding padding={"1em 0 1.2em 0"}>
            <div
              style={{
                fontWeight: 900,
                fontSize: "1.7em",
              }}
            >
              Total: 400$
            </div>
            <div
              style={{
                fontSize: ".85em",
              }}
            >
              By confirming the order, you agree with our Business Conditions
            </div>
          </Padding>
          <Text align={"center"}>
            <LargeButton>Confirm</LargeButton>
          </Text>
        </Padding>
      </BG>
    </section>
  );
};

export default Info;
