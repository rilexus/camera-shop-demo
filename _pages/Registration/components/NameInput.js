import Label from "./Label";
import { Input } from "../../../ui";

const NameInput = () => {
  return (
    <Label>
      Name
      <br />
      <Input placeholder={"Name"} />
    </Label>
  );
};
export default NameInput;
