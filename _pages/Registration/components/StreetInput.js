import Label from "./Label";
import { Input } from "../../../ui";

const StreetInput = () => {
  return (
    <Label>
      Street
      <br />
      <Input placeholder={"Street"} />
    </Label>
  );
};

export default StreetInput;
