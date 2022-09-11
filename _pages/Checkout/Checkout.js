import React from "react";
import Layout from "../../components/Layout/Layout";
import { Navigation } from "../../components";
import {
  Button,
  Checkbox,
  Container,
  Flex,
  Grid,
  Input,
  Margin,
  Padding,
} from "../../ui";
import Footer from "../../components/Footer/Footer";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import EmailInput from "./components/EmailInput";
import PasswordInput from "./components/PasswordInput";
import Label from "./components/Label";
import NewsLatter from "../../components/NewsLatter/NewsLatter";
import Info from "./components/Info/Info";
import Detail from "../../ui/Details/Details";

const LoginForm = () => {
  return (
    <div>
      <div>
        <EmailInput />
        <PasswordInput />
      </div>
      <div>
        <Label>
          <Flex align={"center"}>
            <Margin value={"0 .5em 0 0"}>
              <Checkbox />
            </Margin>
            <div>Remember Me</div>
          </Flex>
        </Label>
        <Flex justify={"end"}>
          <Button>Login</Button>
        </Flex>
      </div>
    </div>
  );
};

const Login = () => {
  return (
    <div>
      <b
        style={{
          fontSize: "1.2em",
          display: "block",
          padding: "0 0 1em 0",
        }}
      >
        Do you have an account? Please, log in.
      </b>
      <Margin value={"0 0 2em 0"}>
        <LoginForm />
      </Margin>
    </div>
  );
};

const Register = () => {
  return (
    <div>
      <b
        style={{
          fontSize: "1.2em",
          display: "block",
          padding: "0 0 1em 0",
        }}
      >
        New Customer - Billing Address
      </b>
      <Margin>
        <RegistrationForm />
      </Margin>
    </div>
  );
};

const CheckoutPage = () => {
  return (
    <Layout
      navigation={<Navigation />}
      main={
        <div
          style={{
            minHeight: "100vh",
          }}
        >
          <Container>
            <Padding padding={"6em 0 0 0"}>
              <Grid gutter={"4em"}>
                <Grid.Item sm={100} md={50}>
                  <Detail summary={"Login"} open={true}>
                    <Login />
                  </Detail>
                  <hr
                    style={{
                      margin: "1em 0 2em 0",
                    }}
                  />
                  <Margin value={"0 0 0 0"}>
                    <Detail summary={"Register"}>
                      <Register />
                    </Detail>
                  </Margin>
                </Grid.Item>
                <Grid.Item sm={100} md={50}>
                  <Info />
                </Grid.Item>
              </Grid>
              <Padding padding={"10em 0"}>
                <NewsLatter />
              </Padding>
            </Padding>
          </Container>
        </div>
      }
      footer={<Footer />}
    />
  );
};

export default CheckoutPage;
