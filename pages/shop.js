import React, { useEffect, useState } from "react";
import { EShopPage } from "../_pages";
import { ProductProvider } from "../Providers/ProductsProvider";
import { getProductsByCategory } from "../products";
import products from "../products";

const Shop = ({ products, intro }) => {
  const [prod, set] = useState(products);

  useEffect(() => {
    set(products);
  }, [products]);

  return (
    <ProductProvider value={[prod, set]}>
      <EShopPage intro={intro} />
    </ProductProvider>
  );
};

export async function getServerSideProps(context) {
  if (Object.values(context.query).length === 0) {
    return {
      props: {
        products,
        intro: {
          title: "Film Cameras",
          description:
            "Asperiores consequatur debitis, delectus est et impedit ipsam reiciendis repellendus sint suscipit! A cumque dicta error fuga natus nulla porro ratione saepe.",
        },
      },
    };
  }
  const { category } = context.query;

  const prods = await getProductsByCategory(category);

  return {
    props: {
      products: prods,
      intro: {
        title: "Film Cameras",
        description:
          "Asperiores consequatur debitis, delectus est et impedit ipsam reiciendis repellendus sint suscipit! A cumque dicta error fuga natus nulla porro ratione saepe.",
      },
    },
  };
}

export default Shop;
