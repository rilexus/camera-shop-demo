const reviews = {
  1: {
    id: "1",
    user: "Stan",
    votes: 10,
    rating: "4",
    text: "Corporis culpa ducimus ipsum non quod sequi voluptates. Assumenda cupiditate eum facere facilis fuga harum, non odit porro provident tenetur totam ullam!",
  },
  2: {
    id: "2",
    user: "Peter",
    votes: 9,
    rating: "5",
    text: "Inventore repudiandae, vero. Dolores doloribus dolorum fuga id itaque minus nisi, numquam officia quos sunt. Facere in maiores modi pariatur possimus unde.",
  },
  3: {
    id: "3",
    user: "Frank",
    votes: 11,
    rating: 4,
    text: "Delectus deserunt iusto quae vitae. Aliquid consequatur debitis dolor dolore eius facilis maiores minus natus possimus quas, quibusdam reiciendis repellendus vitae voluptates.",
  },
};

const products = {
  1: {
    id: "1",
    category: "instant-camera",
    reviews: ["1", "2", "3"],
    condition: "used",
    rating: 4,
    src: "/polaroid_400x400.png",
    price: {
      value: 300,
      currency: "dollar",
    },
    name: "Polaroid",
    color: "white",
    brand: "Polaroid",
    details:
      '"Dimensions: L 5.9 × W 4.3 × H 3.8 in (L 150 × W 111 × H 97 mm) Weight: 1.08 lbs (493 grams) (without film pack) Battery: High performance lithium-ion battery (1100mAh), rechargeable via USB Outer shells: Polycarbonate + ABS plastics External viewfinder barrel Lens: Optical grade polycarbonate lens, coatedShutter system: Custom design using precision step motor',
    description:
      "Dimensions: L 5.9 × W 4.3 × H 3.8 in (L 150 × W 111 × H 97 mm) Weight: 1.08 lbs (493 grams) (without film pack) Battery: High performance lithium-ion battery (1100mAh), rechargeable via USB Outer shells: Polycarbonate + ABS plastics External viewfinder barrel Lens: Optical grade polycarbonate lens, coatedShutter system: Custom design using precision step motor",
  },
  2: {
    id: "2",
    reviews: ["1", "2"],
    category: "instant-camera",
    details:
      '"Dimensions: L 5.9 × W 4.3 × H 3.8 in (L 150 × W 111 × H 97 mm) Weight: 1.08 lbs (493 grams) (without film pack) Battery: High performance lithium-ion battery (1100mAh), rechargeable via USB Outer shells: Polycarbonate + ABS plastics External viewfinder barrel Lens: Optical grade polycarbonate lens, coatedShutter system: Custom design using precision step motor',
    condition: "new",
    rating: 5,
    src: "/intex_sq_400x400.png",
    price: {
      value: 300,
      currency: "dollar",
    },
    name: "Intex SQ",
    color: "gold",
    brand: "FujiFilm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores facere illo in laudantium maiores necessitatibus optio quos tempore unde voluptates? Autem distinctio ipsum, maiores maxime nulla similique voluptas? Accusamus, reiciendis.",
  },
  3: {
    id: "3",
    reviews: [1],
    category: "instant-camera",
    details:
      '"Dimensions: L 5.9 × W 4.3 × H 3.8 in (L 150 × W 111 × H 97 mm) Weight: 1.08 lbs (493 grams) (without film pack) Battery: High performance lithium-ion battery (1100mAh), rechargeable via USB Outer shells: Polycarbonate + ABS plastics External viewfinder barrel Lens: Optical grade polycarbonate lens, coatedShutter system: Custom design using precision step motor',
    condition: "used",
    rating: 4,
    src: "/intax_mini_400x400.png",
    price: {
      value: 300,
      currency: "dollar",
    },
    name: "Intex Mini",
    color: "blue",
    brand: "FujiFilm",
    description:
      "Accusantium aperiam cum deleniti, distinctio ducimus earum excepturi laborum magni maxime minima natus nesciunt nihil numquam odio omnis, quia quidem quo reprehenderit.",
  },

  4: {
    id: "4",
    reviews: [],
    category: "instant-camera",
    condition: "new",
    details:
      '"Dimensions: L 5.9 × W 4.3 × H 3.8 in (L 150 × W 111 × H 97 mm) Weight: 1.08 lbs (493 grams) (without film pack) Battery: High performance lithium-ion battery (1100mAh), rechargeable via USB Outer shells: Polycarbonate + ABS plastics External viewfinder barrel Lens: Optical grade polycarbonate lens, coatedShutter system: Custom design using precision step motor',
    rating: 5,
    src: "/polaroid_400x400.png",
    price: {
      value: 300,
      currency: "dollar",
    },
    name: "Polaroid",
    color: "white",
    brand: "Polaroid",
    description:
      "Accusamus aperiam atque aut beatae culpa dolores, enim exercitationem nemo nesciunt nihil nostrum odio possimus quo ratione rem sed velit veniam voluptatum!",
  },
  5: {
    id: "5",
    reviews: ["1", "2", "3"],
    category: "instant-camera",
    condition: "used",
    details:
      '"Dimensions: L 5.9 × W 4.3 × H 3.8 in (L 150 × W 111 × H 97 mm) Weight: 1.08 lbs (493 grams) (without film pack) Battery: High performance lithium-ion battery (1100mAh), rechargeable via USB Outer shells: Polycarbonate + ABS plastics External viewfinder barrel Lens: Optical grade polycarbonate lens, coatedShutter system: Custom design using precision step motor',
    rating: 5,
    src: "/intex_sq_400x400.png",
    price: {
      value: 300,
      currency: "dollar",
    },
    name: "Intex SQ",
    color: "gold",
    brand: "FujiFilm",
    description:
      "Accusamus aperiam atque aut beatae culpa dolores, enim exercitationem nemo nesciunt nihil nostrum odio possimus quo ratione rem sed velit veniam voluptatum!",
  },
  6: {
    id: "6",
    reviews: ["1", "2", "3"],
    category: "analog-camera",
    details:
      '"Dimensions: L 5.9 × W 4.3 × H 3.8 in (L 150 × W 111 × H 97 mm) Weight: 1.08 lbs (493 grams) (without film pack) Battery: High performance lithium-ion battery (1100mAh), rechargeable via USB Outer shells: Polycarbonate + ABS plastics External viewfinder barrel Lens: Optical grade polycarbonate lens, coatedShutter system: Custom design using precision step motor',
    condition: "new",
    rating: 3,
    src: "/intax_mini_400x400.png",
    price: {
      value: 300,
      currency: "dollar",
    },
    name: "Intex Mini",
    color: "blue",
    brand: "FujiFilm",
    description:
      "Accusamus aperiam atque aut beatae culpa dolores, enim exercitationem nemo nesciunt nihil nostrum odio possimus quo ratione rem sed velit veniam voluptatum!",
  },
  7: {
    id: "7",
    reviews: ["2"],
    category: "merge",
    condition: "new",
    details:
      '"Dimensions: L 5.9 × W 4.3 × H 3.8 in (L 150 × W 111 × H 97 mm) Weight: 1.08 lbs (493 grams) (without film pack) Battery: High performance lithium-ion battery (1100mAh), rechargeable via USB Outer shells: Polycarbonate + ABS plastics External viewfinder barrel Lens: Optical grade polycarbonate lens, coatedShutter system: Custom design using precision step motor',
    rating: 4,
    src: "/shirt_transparent_400x400.png",
    price: {
      value: 15,
      currency: "dollar",
    },
    name: "T-Shirt Conceptional",
    color: "green",
    brand: "analog",
    description:
      "Accusamus aperiam atque aut beatae culpa dolores, enim exercitationem nemo nesciunt nihil nostrum odio possimus quo ratione rem sed velit veniam voluptatum!",
  },
  8: {
    id: "8",
    reviews: ["1", "2", "3"],
    category: "merge",
    condition: "new",
    rating: 4,
    src: "/bag_400x400.png",
    details:
      '"Dimensions: L 5.9 × W 4.3 × H 3.8 in (L 150 × W 111 × H 97 mm) Weight: 1.08 lbs (493 grams) (without film pack) Battery: High performance lithium-ion battery (1100mAh), rechargeable via USB Outer shells: Polycarbonate + ABS plastics External viewfinder barrel Lens: Optical grade polycarbonate lens, coatedShutter system: Custom design using precision step motor',
    price: {
      value: 25,
      currency: "dollar",
    },
    name: "Shopping Bag",
    color: "yellow",
    brand: "analog",
    description:
      "Accusamus aperiam atque aut beatae culpa dolores, enim exercitationem nemo nesciunt nihil nostrum odio possimus quo ratione rem sed velit veniam voluptatum!",
  },
  9: {
    id: "9",
    reviews: ["1", "2", "3"],
    category: "merge",
    condition: "new",
    rating: 4,
    details:
      '"Dimensions: L 5.9 × W 4.3 × H 3.8 in (L 150 × W 111 × H 97 mm) Weight: 1.08 lbs (493 grams) (without film pack) Battery: High performance lithium-ion battery (1100mAh), rechargeable via USB Outer shells: Polycarbonate + ABS plastics External viewfinder barrel Lens: Optical grade polycarbonate lens, coatedShutter system: Custom design using precision step motor',
    src: "/phone_400x400.png",
    price: {
      value: 10,
      currency: "dollar",
    },
    name: "iPhone 12 Case",
    color: "blue",
    brand: "analog",
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
      [id]: {
        ...products[id],
        reviews: products[id].reviews.reduce((acc, reviewId) => {
          return {
            ...acc,
            [reviewId]: reviews[reviewId],
          };
        }, {}),
      },
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
