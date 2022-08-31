import { v4 as uuid } from "uuid";

const ids = Array.from({ length: 5 }, () => uuid());

const productsByCategory = {
  "instant-cameras": [ids[0], ids[1], ids[2], ids[3], ids[4]],
  "analog-cameras": [],
};

const products = {
  [ids[0]]: {
    id: ids[0],
    category: "instant-camera",
    rating: 4,
    src: "/polaroid_400x400.png",
    price: "300$",
    name: "Polaroid",
    color: "white",
    brand: "Polaroid",
    description:
      "Accusamus aperiam atque aut beatae culpa dolores, enim exercitationem nemo nesciunt nihil nostrum odio possimus quo ratione rem sed velit veniam voluptatum!",
  },
  [ids[1]]: {
    id: ids[1],
    category: "instant-camera",
    rating: 5,
    src: "/intex_sq_400x400.png",
    price: "300$",
    name: "Intex SQ",
    color: "gold",
    brand: "FujiFilm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores facere illo in laudantium maiores necessitatibus optio quos tempore unde voluptates? Autem distinctio ipsum, maiores maxime nulla similique voluptas? Accusamus, reiciendis.",
  },
  [ids[2]]: {
    id: ids[2],
    category: "instant-camera",
    rating: 4,
    src: "/intax_mini_400x400.png",
    price: "300$",
    name: "Intex Mini",
    color: "blue",
    brand: "FujiFilm",
    description:
      "Accusantium aperiam cum deleniti, distinctio ducimus earum excepturi laborum magni maxime minima natus nesciunt nihil numquam odio omnis, quia quidem quo reprehenderit.",
  },

  [ids[3]]: {
    id: ids[3],
    category: "instant-camera",
    rating: 5,
    src: "/polaroid_400x400.png",
    price: "300$",
    name: "Polaroid",
    color: "white",
    brand: "Polaroid",
    description:
      "Accusamus aperiam atque aut beatae culpa dolores, enim exercitationem nemo nesciunt nihil nostrum odio possimus quo ratione rem sed velit veniam voluptatum!",
  },
  [ids[4]]: {
    id: ids[4],
    category: "instant-camera",
    rating: 5,
    src: "/intex_sq_400x400.png",
    price: "300$",
    name: "Intex SQ",
    color: "gold",
    brand: "FujiFilm",
    description:
      "Accusamus aperiam atque aut beatae culpa dolores, enim exercitationem nemo nesciunt nihil nostrum odio possimus quo ratione rem sed velit veniam voluptatum!",
  },
  5: {
    id: 5,
    category: "analog-camera",
    rating: 3,
    src: "/intax_mini_400x400.png",
    price: "300$",
    name: "Intex Mini",
    color: "blue",
    brand: "FujiFilm",
    description:
      "Accusamus aperiam atque aut beatae culpa dolores, enim exercitationem nemo nesciunt nihil nostrum odio possimus quo ratione rem sed velit veniam voluptatum!",
  },
};

const getProductsByCategory = async (category) => {
  if (!category) {
    return {};
  }
  if (!(category in productsByCategory)) {
    return {};
  }

  return productsByCategory[category].reduce((acc, id) => {
    return {
      ...acc,
      [id]: products[id],
    };
  }, {});
};

const getProductsByColor = async (color) => {
  if (!color) {
    return {};
  }

  return Object.values(products).reduce((acc, { id, _color }) => {
    if (_color !== color) {
      return acc;
    }
    return {
      ...acc,
      [id]: products[id],
    };
  }, {});
};

const getProductsByIds = async (ids) => {
  if (ids.length === 0) {
    return {};
  }
  return ids.reduce((acc, id) => {
    if (!(id in products)) {
      return acc;
    }
    return {
      ...acc,
      [id]: products[id],
    };
  }, {});
};

const getProductById = async (id) => {
  if (!id) {
    return {};
  }
  return getProductsByIds([id]);
};

export { getProductsByCategory, getProductById, getProductsByColor };

export default products;
