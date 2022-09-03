import { HomePage } from "../_pages";
import products, { filter } from "../products";

export default function Home({ mergeProducts }) {
  return <HomePage mergeProducts={mergeProducts} />;
}

export async function getServerSideProps(context) {
  const mergeProducts = filter(products, {
    category: "merge",
  });
  return {
    props: {
      mergeProducts,
    },
  };
}
