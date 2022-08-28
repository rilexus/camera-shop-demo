import React from "react";
import Head from "next/head";
import { Navigation } from "../../components";
import MerchSection from "./components/MerchSection/MerchSection";
import WhoWeAreSection from "./components/WhoWeAreSection/WhoWeAreSection";
import GallerySection from "./components/GallerySection/GallerySection";
import DontMissNewsSection from "./components/DontMissNews/DontMissNews";
import Footer from "../../components/Footer/Footer";
import CaruselSection from "./components/CaruselSection/CaruselSection";
import NewsLatter from "./components/NewsLatter/NewsLatter";

const Layout = ({ main, navigation }) => {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          zIndex: 100,
          width: "100%",
        }}
      >
        {navigation}
      </div>
      <div>{main}</div>
    </div>
  );
};

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
            <NewsLatter />
            <WhoWeAreSection />
            <GallerySection />
            <DontMissNewsSection />
          </main>
        </div>
      }
      footer={<Footer />}
    />
  );
};

export default Home;
