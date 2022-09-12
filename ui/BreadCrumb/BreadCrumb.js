import { Flex } from "../index";
import Link from "next/link";
import styled from "styled-components";
import { colors } from "../theme/theme";

const A = styled.a`
  cursor: pointer;
  color: ${({ current, theme }) => {
    return current ? "gray" : colors("red.1")({ theme });
  }};
`;

const BreadCrumb = ({ crumbs }) => {
  return (
    <Flex align={"center"}>
      {crumbs.map(({ label, href, current }, idx) => {
        return (
          <Flex
            align={"center"}
            key={href}
            style={{
              marginRight: ".3em",
            }}
          >
            <Link href={href}>
              <A current={current}>{label}</A>
            </Link>
            <span
              style={{
                margin: ".3em",
              }}
            >
              {idx === crumbs.length - 1 ? null : "·"}
            </span>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default BreadCrumb;
