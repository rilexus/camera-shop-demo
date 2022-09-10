import Label from "./Label";
import { Input } from "../../../ui";

const PostcodeInput = () => {
  return (
    <Label>
      Post Code
      <br />
      <Input placeholder={"Post Code"} />
    </Label>
  );
};

export default PostcodeInput;
