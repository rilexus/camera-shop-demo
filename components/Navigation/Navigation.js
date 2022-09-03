import React, { useEffect, useMemo, useRef, useState } from "react";
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
import { Badge } from "../../ui/Badge";

const CartMenu = () => {
  const [products] = useProducts();
  const [cart] = useCart();

  const items = useMemo(() => [], [cart, products]);

  return <ul>{items.map((product) => {})}</ul>;
};

const CartIcon = () => {
  const [menuState, setMenuState] = useState("closed");

  const close = () => {
    setMenuState("closed");
  };
  const open = () => {
    setMenuState("open");
  };

  const [cart, { addProduct, removeProduct }] = useCart();

  const productCount = useMemo(() => {
    return Object.values(cart).reduce((sum, { count }) => {
      return sum + count;
    }, 0);
  }, [cart]);

  const hasProducts = Object.keys(cart).length > 0;

  return (
    <div
      style={{
        cursor: "pointer",
        position: "relative",
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
      {menuState === "open" && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
        ></div>
      )}
    </div>
  );
};

const FavoredIcon = () => {
  const [favouredProducts] = useFavouredProducts();
  const hasProducts = favouredProducts.length > 0;
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {hasProducts ? (
        <HeartFilled width={"1.2em"} height={"1.2em"} fill={"red"} />
      ) : (
        <HeartOutlined width={"1.2em"} height={"1.2em"} />
      )}
      {hasProducts && (
        <div
          style={{
            position: "absolute",
            right: "-.7rem",
            top: "-.7rem",
          }}
        >
          <Badge>{favouredProducts.length}</Badge>
        </div>
      )}
    </div>
  );
};

const Icons = () => {
  const searchInput = useInput({ initialValue: "", name: "search" });
  return (
    <Flex align={ALIGN.center} justify={JUSTIFY.between}>
      <XStack value={"1em"}>
        <SearchInput {...searchInput} />
        <div>
          <PersonOutlined width={"1.2em"} height={"1.2em"} strokeWidth={"40"} />
        </div>
        <div>
          <FavoredIcon />
        </div>
        <div>
          <CartIcon />
        </div>
      </XStack>
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
            <Link href={"/shop"}>Shop</Link>
          </span>
          <span>Services</span>
          <span>Custom</span>
        </XStack>
      }
      icons={<Icons />}
    />
  );
};

export default Navigation;
