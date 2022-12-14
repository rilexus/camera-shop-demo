import React, { useEffect } from "react";
import ProductPage from "../../_pages/Product/Product.page";
import { getProductById } from "../../products";
import { useProducts } from "../../Providers/ProductsProvider";

const Product = ({ id, products }) => {
  const [, setProducts] = useProducts();

  useEffect(() => {
    setProducts(products);
  }, [products]);

  return <ProductPage id={id} />;
};

export async function getServerSideProps(context) {
  const { id } = context.params;

  const product = await getProductById(id);

  const hasProducts = Object.keys(product).length > 0;

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
