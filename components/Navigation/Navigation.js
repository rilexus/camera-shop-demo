import React, { useEffect, useMemo, useRef } from "react";
import { ButtonStyleless, Flex, Padding, Shadow, XStack } from "../../ui";
import { ALIGN, JUSTIFY } from "../../ui/Flex";
import {
  BagOutlined,
  HeartFilled,
  HeartOutlined,
  SearchOutlined,
} from "../../ui/icons";
import { useInput, useToggle } from "../../hooks";
import PersonOutlined from "../../ui/icons/PersonOutlined/PersonOutlined";
import styled from "styled-components";
import EyeOutlined from "../../ui/icons/EyeOutlined/EyeOutlined";
import { sm } from "../../ui/css/medias";
import { useFavouredProducts } from "../../Providers/FavorProvider";
import useClickOutside from "../../hooks/useClickOutside/useClickOutside";
import Layout from "./components/Layout/Layout";
import SearchInput from "./components/SearchInput/SearchInput";
import Link from "next/link";
import { useCart } from "../../Providers/CartProvider/CartProvider";
import { useProducts } from "../../Providers/ProductsProvider";

const StyledBadge = styled(Flex)`
  background-color: red;
  font-size: 0.6rem;
  border-radius: 1rem;
  color: white;
  border: 1px solid white;
  height: 17px;
  width: 17px;
  justify-items: center;
  box-shadow: 0px 2px 3px 0px #5e5e5e;
  pointer-events: none;
`;

const Badge = ({ children }) => {
  return (
    <StyledBadge justify={"center"} align={"center"}>
      {children}
    </StyledBadge>
  );
};

const CartMenu = () => {
  const [products] = useProducts();
  const [cart] = useCart();

  const items = useMemo(() => [], [cart, products]);

  return <ul>{items.map((product) => {})}</ul>;
};

const CartIcon = () => {
  const [cart, { addProduct, removeProduct }] = useCart();
  const productCount = useMemo(() => {
    return Object.entries(cart).reduce((sum, [id, count]) => {
      return sum + count;
    }, 0);
  }, [cart]);
  const hasProducts = Object.keys(cart).length > 0;
  return (
    <div
      style={{
        cursor: "pointer",
      }}
    >
      {hasProducts && (
        <div
          style={{
            position: "absolute",
            top: "-.7em",
            right: "-.7em",
          }}
        >
          <Badge>{productCount}</Badge>
        </div>
      )}

      <BagOutlined width={"1.2em"} height={"1.2em"} />
    </div>
  );
};

const Icons = () => {
  const [favouredProducts] = useFavouredProducts();

  const hasProducts = favouredProducts.length > 0;
  return (
    <Flex
      align={ALIGN.center}
      justify={JUSTIFY.between}
      style={{
        width: "200px",
      }}
    >
      <SearchInput />
      <div>
        <PersonOutlined width={"1.2em"} height={"1.2em"} strokeWidth={"40"} />
      </div>
      <div>
        {hasProducts ? (
          <HeartFilled width={"1.2em"} height={"1.2em"} fill={"red"} />
        ) : (
          <HeartOutlined width={"1.2em"} height={"1.2em"} />
        )}
      </div>
      <div>
        <CartIcon />
      </div>
    </Flex>
  );
};

const MediaHide = styled.div`
  display: none;
  ${sm`
    display: inherit;
  `}
`;

const Navigation = () => {
  const searchInput = useInput({ initialValue: "", name: "search" });

  return (
    <Layout
      logo={
        <XStack value={".2em"}>
          <EyeOutlined width={"2em"} height={"2em"} />
          <MediaHide>ANALOG</MediaHide>
        </XStack>
      }
      main={
        <XStack>
          <span>
            <a href={"/shop?category=instant-camera"}>Shop</a>
          </span>
          <span>Services</span>
          <span>Custom</span>
        </XStack>
      }
      icons={<Icons {...searchInput} />}
    />
  );
};

export default Navigation;
