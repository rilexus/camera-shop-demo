import React, { useMemo } from "react";
import { Text } from "../../../../ui";
import { MergeList } from "./components";

const MerchSection = ({ mergeProducts }) => {
  const prods = useMemo(() => Object.values(mergeProducts), [mergeProducts]);
  return (
    <section>
      <Text align={"center"} as={"h1"}>
        You can buy our merch
      </Text>
      <div>
        <MergeList products={prods} />
      </div>
    </section>
  );
};

export default MerchSection;
