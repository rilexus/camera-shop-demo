import products from "../../../products";

export default function productHandler(req, res) {
  const { query } = req;
  const { id } = query;
  if (!(id in products)) {
    res.status(404).json({ message: `User with id: ${id} not found.` });
    return null;
  }

  const product = products[id];
  return res.status(200).json(product);
}
