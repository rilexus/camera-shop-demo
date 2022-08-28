import React from "react";
import styled, { useTheme } from "styled-components";
import { colors } from "../../ui/theme/theme";
import { Flex, Padding, XStack } from "../../ui";
import { JUSTIFY, WRAP } from "../../ui/Flex";
import FacebookFilled from "../../ui/icons/FacebookFilled/FacebookFilled";
import InstagramFilled from "../../ui/icons/InstagramFilled/InstagramFilled";
import TwitterFilled from "../../ui/icons/TwitterFilled/TwitterFilled";

const StyledFooter = styled.footer`
  background-color: ${colors("gray.2")};
`;

const Title = styled.div`
  font-weight: 600;
  margin-bottom: 1em;
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    padding: 0.3em 0;
  }
`;

const ShopList = () => {
  return (
    <div>
      <Title>Shop</Title>
      <Ul>
        <li>Film Cameras</li>
        <li>Film</li>
        <li>Photo paper</li>
        <li>Merch</li>
      </Ul>
    </div>
  );
};

const ServiceList = () => {
  return (
    <div>
      <Title>Service</Title>
      <Ul>
        <li>Film development</li>
        <li>Renovation</li>
        <li>Custom</li>
      </Ul>
    </div>
  );
};

const AnalogList = () => {
  return (
    <div>
      <Title>Analog</Title>
      <Ul>
        <li>About us</li>
        <li>Gallery</li>
        <li>Contact</li>
      </Ul>
    </div>
  );
};

const Address = () => {
  return (
    <div>
      <Title>Offline shop</Title>
      <div>Some Street 12, 22222 Location</div>
      <div>Monday - Friday, 11:00AM-6:00PM</div>
      <div>email@mail.com</div>
      <div>+1 786 9987</div>
    </div>
  );
};

const Footer = () => {
  const theme = useTheme();
  return (
    <StyledFooter>
      <Padding padding={"2em 2em 0 2em"}>
        <Flex justify={JUSTIFY.around} wrap={WRAP.wrap}>
          <Address />
          <AnalogList />
          <ServiceList />
          <ShopList />
        </Flex>
        <Padding padding={"2em"}>
          <Flex justify={"center"}>
            <XStack>
              <FacebookFilled
                height={"1.4em"}
                width={"1.4em"}
                fill={colors("gray.3")({ theme })}
              />
              <InstagramFilled
                height={"1.4em"}
                width={"1.4em"}
                fill={colors("gray.3")({ theme })}
              />
              <TwitterFilled
                height={"1.4em"}
                width={"1.4em"}
                fill={colors("gray.3")({ theme })}
              />
            </XStack>
          </Flex>
        </Padding>
      </Padding>
    </StyledFooter>
  );
};

export default Footer;
