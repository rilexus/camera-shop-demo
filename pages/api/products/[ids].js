import products from "../../../products";

export default function productsHandler(req, res) {
  const { query } = req;
  const { ids = "" } = query;

  const parsedIds = ids.split(",").filter(Boolean);

  const prods = parsedIds.reduce((acc, id) => {
    if (id in products) {
      return [...acc, products[id]];
    }
    return acc;
  }, []);

  return res.status(200).json(prods);
}
