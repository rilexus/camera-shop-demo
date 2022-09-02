import React, { useEffect, useState } from "react";
import { EShopPage } from "../_pages";
import { ProductProvider } from "../Providers/ProductsProvider";
import { filter, getByColors, getProductsByCategory } from "../products";
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

const parseQuery = (query) => {
  return query.split(",").filter(Boolean);
};

export async function getServerSideProps(context) {
  const query = context.query;

  if (Object.values(query).length === 0) {
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
  const {
    category = "",
    color = "",
    brand = "",
    condition = "",
  } = context.query;
  const parsedColor = parseQuery(color); // ['white', 'black']
  const parsedBrand = parseQuery(brand);
  const parsedCondition = parseQuery(condition);

  const queriedProducts = filter(products, {
    category,
    color: parsedColor,
    brand: parsedBrand,
    condition: parsedCondition,
  });

  return {
    props: {
      products: queriedProducts,
      intro: {
        title: "Film Cameras",
        description:
          "Asperiores consequatur debitis, delectus est et impedit ipsam reiciendis repellendus sint suscipit! A cumque dicta error fuga natus nulla porro ratione saepe.",
      },
    },
  };
}

export default Shop;
