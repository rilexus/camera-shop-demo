import React, { useMemo, useState } from "react";
import { Flex, Margin } from "../../ui";
import { ALIGN, JUSTIFY } from "../../ui/Flex";
import { BagOutlined, HeartFilled, HeartOutlined } from "../../ui/icons";
import { useInput } from "../../hooks";
import PersonOutlined from "../../ui/icons/PersonOutlined/PersonOutlined";
import styled, { useTheme } from "styled-components";
import EyeOutlined from "../../ui/icons/EyeOutlined/EyeOutlined";
import { sm } from "../../ui/css/medias";
import { useFavouredProducts } from "../../Providers/FavorProvider";
import Layout from "./components/Layout/Layout";
import SearchInput from "./components/SearchInput/SearchInput";
import Link from "next/link";
import { useCart } from "../../Providers/CartProvider/CartProvider";
import { useProducts } from "../../Providers/ProductsProvider";
import { Badge } from "../../ui/Badge";
import { useRouter } from "next/router";
import { colors } from "../../ui/theme/theme";

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

  const [cart] = useCart();
  const router = useRouter();

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

      <BagOutlined
        width={"1.2em"}
        height={"1.2em"}
        onClick={() => {
          router.push("/cart");
        }}
      />
    </div>
  );
};

const FavoredIcon = () => {
  const [favouredProducts] = useFavouredProducts();
  const hasProducts = favouredProducts.length > 0;
  const theme = useTheme();
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {hasProducts ? (
        <HeartFilled
          width={"1.2em"}
          height={"1.2em"}
          fill={colors("red.1")({ theme })}
        />
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
      <Margin value={"0 1em 0 0"}>
        <SearchInput {...searchInput} />
      </Margin>
      <Margin value={"0 1em 0 0"}>
        <div>
          <PersonOutlined width={"1.2em"} height={"1.2em"} strokeWidth={"40"} />
        </div>
      </Margin>
      <Margin value={"0 1em 0 0"}>
        <div>
          <FavoredIcon />
        </div>
      </Margin>
      <Margin value={"0 1em 0 0"}>
        <div>
          <CartIcon />
        </div>
      </Margin>
    </Flex>
  );
};

const MediaHide = styled.div`
  display: none;
  ${sm`
    display: inherit;
  `}
`;

const A = styled.a`
  cursor: pointer;
  &:hover {
    color: ${colors("red.1")};
  }
`;

const Navigation = () => {
  return (
    <Layout
      logo={
        <Link href={"/"}>
          <A>
            <Flex justify={JUSTIFY.center} align={"center"}>
              <Margin value={"0 .2em 0 0"}>
                <EyeOutlined width={"2em"} height={"2em"} />
              </Margin>
              <Margin value={"0 .2em 0 0"}>
                <MediaHide>ANALOG</MediaHide>
              </Margin>
            </Flex>
          </A>
        </Link>
      }
      main={
        <div>
          <Flex>
            <Margin value={"0 1em 0 0"}>
              <span>
                <Link href={"/shop"}>
                  <A>Shop</A>
                </Link>
              </span>
            </Margin>
            <Margin value={"0 1em 0 0"}>
              <span
                style={{
                  cursor: "not-allowed",
                  color: "gray",
                }}
              >
                Services
              </span>
            </Margin>
            <Margin>
              <span
                style={{
                  cursor: "not-allowed",
                  color: "gray",
                }}
              >
                Custom
              </span>
            </Margin>
          </Flex>
        </div>
      }
      icons={<Icons />}
    />
  );
};

export default Navigation;
