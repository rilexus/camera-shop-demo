import React from "react";
import { HeartFilled } from "../../ui/icons";
import HeartOutlined from "../../ui/icons/HeartOutlined/HeartOutlined";
import ButtonStyleless from "../../ui/buttons/ButtonStyleless/ButtonStyleless";
import { useFavouredProducts } from "../../Providers/FavorProvider";
import { useTheme } from "styled-components";
import { colors } from "../../ui/theme/theme";

const HeartIcon = ({ type = "filled", ...props }) => {
  const theme = useTheme();
  return (
    <>
      {type === "filled" ? (
        <HeartFilled
          {...props}
          height={"1.5em"}
          width={"1.5em"}
          fill={colors("red.1")({ theme })}
        />
      ) : null}
      {type === "outlined" ? (
        <HeartOutlined
          {...props}
          height={"1.5em"}
          width={"1.5em"}
          fill={colors("red.1")({ theme })}
        />
      ) : null}
    </>
  );
};

const HeartButton = ({ type, ...props }) => {
  return (
    <ButtonStyleless {...props}>
      <HeartIcon type={type} />
    </ButtonStyleless>
  );
};

const FavourButton = ({ id }) => {
  const [favouredProducts, setFavouredProducts] = useFavouredProducts();
  const favored = favouredProducts.includes(id);

  const favour = (id) => {
    setFavouredProducts((old) => {
      if (!favored) {
        return [...old, id];
      }
      return old.filter((i) => id !== i);
    });
  };

  return (
    <HeartButton
      type={favored ? "filled" : "outlined"}
      onClick={() => favour(id)}
    />
  );
};

export default FavourButton;
