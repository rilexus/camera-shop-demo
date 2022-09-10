import styled from "styled-components";
import { colors } from "../../../ui/theme/theme";
import { useRouter } from "next/router";
import { LargeButton, Radio } from "../../../ui";
import React, { useState } from "react";

const BG = styled.div`
  background-color: ${colors("gray.2")};
`;

const Info = () => {
  const router = useRouter();
  const [state, setState] = useState({
    store: false,
    postal: false,
    dhl: false,
  });

  const handleChange = (name) => {
    return (e) => {
      const { checked } = e.target;
      setState({ ...state, [name]: checked });
    };
  };

  const valid = Object.values(state).some((s) => s);

  return (
    <BG
      style={{
        padding: "2em 2em ",
      }}
    >
      <div
        style={{
          marginBottom: "1em",
          fontWeight: 600,
          fontSize: "1.3rem",
        }}
      >
        Cart Total
      </div>
      <div
        style={{
          marginBottom: "2em",
        }}
      >
        <div
          style={{
            marginBottom: "1em",
          }}
        >
          Delivery Method:
        </div>
        <div>
          <Radio
            label={"Pick up at the store."}
            checked={state.store}
            onChange={handleChange("store")}
          />
          <Radio
            label={"Delivery by postal service."}
            checked={state.postal}
            onChange={handleChange("postal")}
          />
          <Radio
            label={"DHL Courier"}
            checked={state.dhl}
            onChange={handleChange("dhl")}
          />
        </div>
      </div>
      <div
        style={{
          marginBottom: ".5em",
          fontWeight: 600,
          fontSize: "1.2rem",
        }}
      >
        Total 300$
      </div>
      <div>
        <LargeButton
          disabled={!valid}
          onClick={() => {
            router.push("/checkout");
          }}
        >
          Checkout
        </LargeButton>
      </div>
    </BG>
  );
};

export default Info;
