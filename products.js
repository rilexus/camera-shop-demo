const products = {
  1: {
    id: 1,
    category: "instant-camera",
    condition: "used",
    rating: 4,
    src: "/polaroid_400x400.png",
    price: "300$",
    name: "Polaroid",
    color: "white",
    brand: "Polaroid",
    description:
      "Accusamus aperiam atque aut beatae culpa dolores, enim exercitationem nemo nesciunt nihil nostrum odio possimus quo ratione rem sed velit veniam voluptatum!",
  },
  2: {
    id: 2,
    category: "instant-camera",
    condition: "new",
    rating: 5,
    src: "/intex_sq_400x400.png",
    price: "300$",
    name: "Intex SQ",
    color: "gold",
    brand: "FujiFilm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores facere illo in laudantium maiores necessitatibus optio quos tempore unde voluptates? Autem distinctio ipsum, maiores maxime nulla similique voluptas? Accusamus, reiciendis.",
  },
  3: {
    id: 3,
    category: "instant-camera",
    condition: "used",
    rating: 4,
    src: "/intax_mini_400x400.png",
    price: "300$",
    name: "Intex Mini",
    color: "blue",
    brand: "FujiFilm",
    description:
      "Accusantium aperiam cum deleniti, distinctio ducimus earum excepturi laborum magni maxime minima natus nesciunt nihil numquam odio omnis, quia quidem quo reprehenderit.",
  },

  4: {
    id: 4,
    category: "instant-camera",
    condition: "new",
    rating: 5,
    src: "/polaroid_400x400.png",
    price: "300$",
    name: "Polaroid",
    color: "white",
    brand: "Polaroid",
    description:
      "Accusamus aperiam atque aut beatae culpa dolores, enim exercitationem nemo nesciunt nihil nostrum odio possimus quo ratione rem sed velit veniam voluptatum!",
  },
  5: {
    id: 5,
    category: "instant-camera",
    condition: "used",
    rating: 5,
    src: "/intex_sq_400x400.png",
    price: "300$",
    name: "Intex SQ",
    color: "gold",
    brand: "FujiFilm",
    description:
      "Accusamus aperiam atque aut beatae culpa dolores, enim exercitationem nemo nesciunt nihil nostrum odio possimus quo ratione rem sed velit veniam voluptatum!",
  },
  6: {
    id: 6,
    category: "analog-camera",
    condition: "new",
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

const filter = (products, filterObject) => {
  const filterKeys = Object.keys(filterObject);

  if (filterKeys.length === 0) {
    return products;
  }
  // look for the based on the first filter
  const filterKey = filterKeys[0];

  const p = Object.values(products).reduce((acc, product) => {
    if (!(filterKey in product)) return acc;
    if (Array.isArray(filterObject[filterKey])) {
      if (filterObject[filterKey].length === 0) {
        return {
          ...acc,
          [product.id]: product,
        };
      }
      if (filterObject[filterKey].includes(product[filterKey])) {
        return {
          ...acc,
          [product.id]: product,
        };
      }
    }
    if (product[filterKey] === filterObject[filterKey]) {
      return {
        ...acc,
        [product.id]: product,
      };
    }
    return acc;
  }, {});

  // remove first key and filter "p" again with the restFilters
  const { [filterKey]: remove, ...restFilters } = filterObject;
  return filter(p, restFilters);
};

const getProductsByCategory = async (category) => {
  if (!category) {
    return {};
  }
  return Object.values(products).reduce((acc, product) => {
    if (!(category in product)) {
      return acc;
    }

    return {
      ...acc,
      [product.id]: product,
    };
  }, {});
};

const getByColors = async (products, colors) => {
  if (colors === "") {
    return products;
  }
  return Object.values(products).reduce((acc, product) => {
    if (!colors.includes(product.color)) {
      return acc;
    }
    return {
      ...acc,
      [product.id]: product,
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

export {
  getProductsByCategory,
  getProductById,
  getProductsByColor,
  getByColors,
  filter,
};

export default products;
