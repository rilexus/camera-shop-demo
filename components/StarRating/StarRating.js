import React, { useMemo } from "react";
import { StarFilled, StarOutlined } from "../../ui/icons";

const StarRating = ({ rating, size = "normal" }) => {
  const filled = useMemo(
    () => Array.from({ length: rating }).fill(StarFilled),
    [rating]
  );

  const outlined = useMemo(
    () => Array.from({ length: 5 - rating }).fill(StarOutlined),
    [rating]
  );

  const height = size === "normal" ? "1.5em" : "1.2em";
  const width = size === "normal" ? "1.5em" : "1.2em";

  return (
    <div>
      {filled.map((C, idx) => {
        return <C key={idx} height={height} width={width} fill={"#ecc40f"} />;
      })}
      {outlined.map((C, idx) => {
        return <C key={idx} height={height} width={width} fill={"#ded1b3"} />;
      })}
    </div>
  );
};

export default StarRating;
