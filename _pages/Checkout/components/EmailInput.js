import { Input } from "../../../ui";
import Label from "./Label";

const EmailInput = () => {
  return (
    <Label>
      Email
      <br />
      <Input placeholder={"Email"} />
    </Label>
  );
};

export default EmailInput;
