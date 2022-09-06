import React from "react";
import styled from "styled-components";
import { colors } from "../../../../ui/theme/theme";
import StarRating from "../../../../components/StarRating/StarRating";
import { Flex, Margin, Padding } from "../../../../ui";
import scrollbarCss from "../../../../ui/css/scrollbar.css";
import { DownvoteOutlined, UpvoteOutlined } from "../../../../ui/icons";

const BG = styled.div`
  background-color: ${colors("gray.2")};
`;

const ReviewTile = ({ name, rating, text, title }) => {
  return (
    <div
      style={{
        maxWidth: "450px",
        whiteSpace: "normal",
      }}
    >
      <BG>
        <Padding padding={"1em"}>
          <Flex>
            <Flex
              direction={"column"}
              align={"center"}
              style={{
                marginRight: "1em",
              }}
            >
              <UpvoteOutlined width={"1.3em"} height={"1.3em"} />
              <div
                style={{
                  fontSize: ".9em",
                  margin: ".3em 0",
                }}
              >
                300
              </div>
              <DownvoteOutlined width={"1.3em"} height={"1.3em"} />
            </Flex>
            <div>
              <Margin value={"0 0 1em 0"}>
                <div>{name}</div>
              </Margin>

              <Margin value={"0 0 .5em 0"}>
                <Flex>
                  <StarRating rating={rating} size={"small"} />
                  <div
                    style={{
                      marginLeft: ".75em",
                      fontWeight: 600,
                    }}
                  >
                    {title}
                  </div>
                </Flex>
              </Margin>

              <div
                style={{
                  lineHeight: "1.5",
                }}
              >
                {text}
              </div>
            </div>
          </Flex>
        </Padding>
      </BG>
    </div>
  );
};

const Scroll = styled.div`
  ${scrollbarCss};
  overflow-x: scroll;
`;

const Reviews = ({ id }) => {
  return (
    <div>
      <div
        style={{
          fontWeight: 600,
        }}
      >
        Top Reviews
      </div>
      <Scroll>
        <Padding padding={"2em 0"}>
          <div
            style={{
              whiteSpace: "nowrap",
            }}
          >
            <div
              style={{
                verticalAlign: "top",
                display: "inline-block",
              }}
            >
              <Margin value={"0 2em 0 0"}>
                <ReviewTile
                  name={"Jakob"}
                  title={"Some"}
                  text={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque corporis culpa cum eaque est eum illum incidunt iure libero magnam natus nemo nesciunt, obcaecati officiis porro quaerat quod vitae."
                  }
                  rating={3}
                />
              </Margin>
            </div>
            <div
              style={{
                verticalAlign: "top",
                display: "inline-block",
              }}
            >
              <Margin value={"0 2em 0 0"}>
                <ReviewTile
                  title={"Some"}
                  name={"Jakob"}
                  text={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque corporis culpa cum eaque est eum illum incidunt iure libero magnam natus nemo nesciunt, obcaecati officiis porro quaerat quod vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque corporis culpa cum eaque est eum illum incidunt iure libero magnam natus nemo nesciunt, obcaecati officiis porro quaerat quod vitae."
                  }
                  rating={3}
                />
              </Margin>
            </div>
            <div
              style={{
                verticalAlign: "top",
                display: "inline-block",
              }}
            >
              <Margin value={"0 2em 0 0"}>
                <ReviewTile
                  title={"Some"}
                  name={"Jakob"}
                  text={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque corporis culpa cum eaque est eum illum incidunt iure libero magnam natus nemo nesciunt, obcaecati officiis porro quaerat quod vitae."
                  }
                  rating={3}
                />
              </Margin>
            </div>
            <div
              style={{
                verticalAlign: "top",
                display: "inline-block",
              }}
            >
              <Margin value={"0 2em 0 0"}>
                <ReviewTile
                  title={"Some"}
                  name={"Jakob"}
                  text={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque corporis culpa cum eaque est eum illum incidunt iure libero magnam natus nemo nesciunt, obcaecati officiis porro quaerat quod vitae."
                  }
                  rating={3}
                />
              </Margin>
            </div>
          </div>
        </Padding>
      </Scroll>
    </div>
  );
};

export default Reviews;
