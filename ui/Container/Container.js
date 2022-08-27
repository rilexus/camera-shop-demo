import styled from "styled-components";
import { l, md, sm, xl } from "../css/medias";

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
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
