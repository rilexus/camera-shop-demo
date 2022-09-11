import { Flex } from "../index";
import Link from "next/link";

const BreadCrumb = ({ crumbs }) => {
  return (
    <Flex align={"center"}>
      {crumbs.map(({ label, href }, idx) => {
        return (
          <Flex
            align={"center"}
            key={href}
            style={{
              marginRight: ".3em",
            }}
          >
            <Link href={href}>
              <a>{label}</a>
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
