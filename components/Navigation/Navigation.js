import React, { useEffect, useRef } from "react";
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

const Icons = () => {
  const [favouredProducts] = useFavouredProducts();

  const hasProducts = favouredProducts.length > 0;
  return (
    <Flex align={ALIGN.center}>
      <XStack value={".75em"}>
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
          <BagOutlined width={"1.2em"} height={"1.2em"} />
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
            <Link href={"/shop"}>
              <a>Shop</a>
            </Link>
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
