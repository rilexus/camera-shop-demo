import React from "react";
import TownInput from "../TownInput";
import EmailInput from "../EmailInput";
import PhoneInput from "../PhoneInput";
import NameInput from "../NameInput";
import StreetInput from "../StreetInput";
import PostcodeInput from "../PostcodeInput";
import CountrySelect from "../CountrySelect";

const RegistrationForm = () => {
  return (
    <div>
      <NameInput />
      <StreetInput />
      <PostcodeInput />
      <CountrySelect />
      <TownInput />
      <div>
        <EmailInput />
        <PhoneInput />
      </div>
    </div>
  );
};

export default RegistrationForm;
