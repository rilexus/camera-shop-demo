import React from "react";
import Layout from "../../components/Layout/Layout";
import { Navigation } from "../../components";
import { Container, Grid, Padding } from "../../ui";
import Footer from "../../components/Footer/Footer";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";

const RegistrationPage = () => {
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
              <Grid>
                <Grid.Item sm={"40"}>
                  <RegistrationForm />
                </Grid.Item>
              </Grid>
            </Padding>
          </Container>
        </div>
      }
      footer={<Footer />}
    />
  );
};

export default RegistrationPage;
