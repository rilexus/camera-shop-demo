import styled from "styled-components";
import { l, md, sm, xl, xsm } from "../css/medias";

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  ${xsm`
    width: 95%;
  `}
  ${sm`
    max-width: 540px
  `}
  ${md`
    max-width: 720px;
  `}
  ${l`
    max-width: 960px;
  `}
  ${xl`
    max-width: 1140px;
  `}
`;

export default Container;
