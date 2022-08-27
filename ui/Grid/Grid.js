import React, { Children, cloneElement } from "react";
import styled from "styled-components";
import {
  md as mdMedia,
  sm as smMedia,
  l as lMedia,
  xl as xlMedia,
  xxl as xxlMedia,
} from "./medias";

const ItemStyled = styled.div`
  position: relative;
  flex-basis: 100%;
  padding-left: ${({ gutter }) => gutter};
  padding-top: ${({ gutter }) => gutter};

  ${({ sm }) => {
    if (sm) {
      return smMedia`
        flex-basis: ${sm}%
      `;
    }
    return "";
  }};

  ${({ md }) => {
    if (md) {
      return mdMedia`
        flex-basis: ${md}%
      `;
    }
    return "";
  }};

  ${({ l }) => {
    if (l) {
      return lMedia`
        flex-basis: ${l}%
      `;
    }
    return "";
  }};

  ${({ xl }) => {
    if (xl) {
      return xlMedia`
        flex-basis: ${xl}%
      `;
    }
    return "";
  }};

  ${({ xxl }) => {
    if (xxl) {
      return xxlMedia`
        flex-basis: ${xxl}% 
      `;
    }
    return "";
  }};
`;

const Item = ({ sm, md, l, xl, xxl, gutter, ...props }) => {
  return (
    <ItemStyled
      sm={sm}
      md={md}
      l={l}
      xl={xl}
      xxl={xxl}
      gutter={gutter}
      {...props}
    />
  );
};

const GridStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-top: calc(-1 * ${({ gutter }) => gutter});
  margin-left: calc(-1 * ${({ gutter }) => gutter});
`;

const Grid = ({ gutter = "0px", children, ...props }) => {
  return (
    <GridStyled {...props} gutter={gutter}>
      {Children.toArray(children).map((child) => {
        return cloneElement(child, { gutter, ...props });
      })}
    </GridStyled>
  );
};

Grid.Item = Item;

export default Grid;
