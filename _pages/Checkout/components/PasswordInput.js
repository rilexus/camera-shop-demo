import { Input } from "../../../ui";
import Label from "./Label";

const PasswordInput = () => {
  return (
    <Label>
      Email
      <br />
      <Input placeholder={"Password"} type={"password"} />
    </Label>
  );
};

export default PasswordInput;
