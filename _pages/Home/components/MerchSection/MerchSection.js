import React from "react";
import { Text } from "../../../../ui";
import { MergeList } from "./components";

const merges = [
  {
    id: 1,
    rating: 4,
    title: "T-Shirt Conceptional",
    price: "15$",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam architecto atque cupiditate dolor doloremque eaque exercitationem ipsa minima nam nemo, non sunt veritatis voluptas, voluptatem. At debitis nam voluptatibus?",
    src: "shirt_transparent_400x400.png",
  },
  {
    id: 2,
    rating: 3,
    title: "Shopping Bag",
    price: "10$",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam architecto atque cupiditate dolor doloremque eaque exercitationem ipsa minima nam nemo, non sunt veritatis voluptas, voluptatem. At debitis nam voluptatibus?",
    src: "bag_400x400.png",
  },
  {
    id: 3,
    rating: 5,
    title: "iPhone 12 Case",
    price: "35$",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam architecto atque cupiditate dolor doloremque eaque exercitationem ipsa minima nam nemo, non sunt veritatis voluptas, voluptatem. At debitis nam voluptatibus?",
    src: "phone_400x400.png",
  },
];

const MerchSection = () => {
  return (
    <section
      style={{
        margin: "10vh 0",
      }}
    >
      <Text align={"center"} as={"h1"}>
        You can buy our merch
      </Text>
      <div>
        <MergeList products={merges} />
      </div>
    </section>
  );
};

export default MerchSection;
