import React, { useMemo } from "react";
import { StarFilled, StarOutlined } from "../../ui/icons";

const StarRating = ({ rating }) => {
  const filled = useMemo(
    () => Array.from({ length: rating }).fill(StarFilled),
    [rating]
  );

  const outlined = useMemo(
    () => Array.from({ length: 5 - rating }).fill(StarOutlined),
    [rating]
  );

  return (
    <div>
      {filled.map((C, idx) => {
        return (
          <C key={idx} height={"1.5em"} width={"1.5em"} fill={"#ecc40f"} />
        );
      })}
      {outlined.map((C, idx) => {
        return (
          <C key={idx} height={"1.5em"} width={"1.5em"} fill={"#ded1b3"} />
        );
      })}
    </div>
  );
};

export default StarRating;
