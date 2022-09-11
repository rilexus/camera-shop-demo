import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../../../ui/theme/theme";
import { LargeButton, Margin, Padding, Radio, Text } from "../../../../ui";
import { useRadio } from "../../../../hooks";

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

const Delivery = ({ onChange }) => {
  const { values, register } = useRadio({
    initialValues: {
      store: false,
      postal: false,
      dhl: false,
    },
  });

  useEffect(() => {
    Object.entries(values).forEach(([name, checked]) => {
      if (checked) {
        onChange?.({ target: { name, checked } });
      }
    });
  }, [values]);

  return (
    <div>
      <Subtitle>Delivery method:</Subtitle>
      <div>
        <Radio
          label={"Pick up at the store"}
          {...register({ name: "store" })}
        />
        <Radio
          label={"Delivery by postal office"}
          {...register({ name: "postal" })}
        />
        <Radio label={"DHL courier"} {...register({ name: "dhl" })} />
      </div>
    </div>
  );
};

const Payment = ({ onChange }) => {
  const { values, register } = useRadio({
    initialValues: {
      credit: false,
      cash: false,
    },
  });
  useEffect(() => {
    Object.entries(values).forEach(([name, checked]) => {
      if (checked) {
        onChange?.({ target: { name, checked } });
      }
    });
  }, [values]);

  return (
    <div>
      <Subtitle>Payment method:</Subtitle>
      <div>
        <Radio label={"Credit card"} {...register({ name: "credit" })} />
        <Radio label={"Cash on delivery"} {...register({ name: "cash" })} />
      </div>
    </div>
  );
};

const Info = () => {
  const [state, setState] = useState({
    delivery: null,
    payment: null,
  });

  const valid = state.delivery !== null && state.payment !== null;

  const set = (name) => {
    return (e) => {
      setState((s) => ({ ...s, [name]: e.target.name }));
    };
  };

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
          <Delivery onChange={set("delivery")} />
          <hr />
          <Payment onChange={set("payment")} />
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
            <LargeButton disabled={!valid}>Confirm</LargeButton>
          </Text>
        </Padding>
      </BG>
    </section>
  );
};

export default Info;
