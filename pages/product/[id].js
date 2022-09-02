import React, { useState } from "react";
import ProductPage from "../../_pages/ProductPage/Product.page";
import { getProductById } from "../../products";
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

  const product = await getProductById(id);

  const hasProducts = Object.keys(product).length > 0;
  console.log({ id, product });

  if (!hasProducts) {
    context.res.writeHead(301, {
      Location: "/" /* TODO create 404 page */,
    });
    context.res.end();
    return true;
  }

  return {
    props: {
      id: id,
      products: product,
    },
  };
}

export default Product;
