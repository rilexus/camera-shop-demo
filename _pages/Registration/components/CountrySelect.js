import Label from "./Label";
import { Select } from "../../../ui";
import styled from "styled-components";

const Option = styled.option``;
const CountrySelect = () => {
  return (
    <Label>
      Country
      <br />
      <Select>
        <Option value={"austria"}>Austria</Option>
        <Option value={"germany"}>Germany</Option>
        <Option value={"switzerland"}>Switzerland</Option>
      </Select>
    </Label>
  );
};
export default CountrySelect;
