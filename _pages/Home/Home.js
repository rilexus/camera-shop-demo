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

const Home = () => {
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
            <CaruselSection />

            <MerchSection />
            <WhoWeAreSection />
            <GallerySection />
            <NewsLatter />
          </main>
        </div>
      }
      footer={<Footer />}
    />
  );
};

export default Home;
