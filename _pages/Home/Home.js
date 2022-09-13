import React from "react";
import Head from "next/head";
import { Navigation } from "../../components";
import MerchSection from "./components/MerchSection/MerchSection";
import WhoWeAreSection from "./components/WhoWeAreSection/WhoWeAreSection";
import GallerySection from "./components/GallerySection/GallerySection";
import Footer from "../../components/Footer/Footer";
import CaruselSection from "./components/CaruselSection/CaruselSection";
import NewsLatter from "./components/NewsLatter/NewsLatter";
import Layout from "../../components/Layout/Layout";
import { Margin } from "../../ui";

const Home = ({ mergeProducts }) => {
  return (
    <Layout
      navigation={<Navigation />}
      main={
        <div>
          <Head>
            <title>Home</title>
            <meta name="description" content="camera shop" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <Margin value={"0 0 10vh 0"}>
              <CaruselSection />
            </Margin>
            <Margin value={"0 0 10vh 0"}>
              <MerchSection mergeProducts={mergeProducts} />
            </Margin>
            <Margin value={"0 0 10vh 0"}>
              <WhoWeAreSection />
            </Margin>
            <Margin value={"0 0 10vh 0"}>
              <GallerySection />
            </Margin>
            <Margin value={"0 0 10vh 0"}>
              <NewsLatter />
            </Margin>
          </main>
        </div>
      }
      footer={<Footer />}
    />
  );
};

export default Home;
