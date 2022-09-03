import products from "../../../products";

export default function productHandler(req, res) {
  const { query } = req;
  const { id } = query;
  if (!(id in products)) {
    return res
      .status(404)
      .json({ message: `Product with id: ${id} not found.` });
  }

  const product = products[id];
  return res.status(200).json(product);
}
