import React, { useState } from "react";
import ProductPage from "../../_pages/ProductPage/Product.page";
import products from "../../products";
import { ProductProvider } from "../../Providers/ProductsProvider";

const Product = ({ id, ...props }) => {
  const products = useState(props.products);

  return (
    <ProductProvider value={products}>
      <ProductPage id={id} />
    </ProductProvider>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;

  if (!id) {
    return {
      props: {
        id: null,
        products: {},
      },
    };
  }

  const product = products[id];

  if (!product) {
    return {
      props: {
        id: null,
        products: {},
      },
    };
  }
  return {
    props: {
      id: id,
      products: { [id]: products[id] },
    },
  };
}

export default Product;
