import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay, Pagination } from "swiper";
import {
  CoverImage,
  Flex,
  FullScreen,
  Grid,
  LargeButton,
  Text,
} from "../../../../ui";
import { ALIGN, JUSTIFY } from "../../../../ui/Flex";
import styled from "styled-components";
import elasticFontSize from "../../../../ui/css/elasticFontSize";

const LargeWhiteButton = styled(LargeButton)`
  color: white;
  border: 2px solid white;

  &:hover {
    color: white;
    border: 2px solid white;
    background-color: rgba(236, 236, 236, 0.22);
  }
`;

const Title = styled.h1`
  color: white;
  line-height: 1.2;
  font-weight: 600;
  margin-bottom: 0.5em;
  margin-top: 0em;
  ${elasticFontSize(20, 60, 1, 1000)};
`;

const Subtitle = styled.p`
  color: white;
  line-height: 1.2;
  margin-bottom: 1.3em;
  ${elasticFontSize(10, 24, 1, 500)};
`;

const CaruselSection = () => {
  return (
    <section>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <FullScreen>
            <CoverImage
              url={
                "https://images.unsplash.com/photo-1479064118661-04dd16543243?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5hbG9nJTIwY2FtZXJhfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              }
            >
              <Flex
                align={ALIGN.center}
                style={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <Grid>
                  <Grid.Item sm={10} md={10} />
                  <Grid.Item sm={80} md={70} l={55}>
                    <Text align={"center"}>
                      <div
                        style={{
                          fontWeight: 900,
                          color: "red",
                        }}
                      >
                        NEW
                      </div>
                      <Title>NISHIKA N8000 35mm 3-D</Title>
                      <Subtitle>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aspernatur deserunt dolorem, doloremque dolorum
                        explicabo itaque minima molestiae quibusdam! Aliquam
                        architecto at commodi debitis eum inventore magnam
                        officia recusandae sequi tenetur! Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit. Deleniti earum,
                        quia. Culpa cupiditate debitis dolore, dolorum error
                        exercitationem expedita hic id illo labore minus
                        mollitia nesciunt provident quam velit voluptatibus?
                      </Subtitle>
                      <LargeWhiteButton>Buy now</LargeWhiteButton>
                    </Text>
                  </Grid.Item>
                </Grid>
              </Flex>
            </CoverImage>
          </FullScreen>
        </SwiperSlide>
        <SwiperSlide>
          <FullScreen>
            <CoverImage
              url={
                "https://vradenburg.net/wp-content/uploads/2017/01/P1220026.jpg"
              }
            >
              <Flex
                align={ALIGN.center}
                justify={JUSTIFY.center}
                style={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <Text align={"center"}>
                  <h1
                    style={{
                      fontSize: "3rem",
                      lineHeight: "1.2",
                      color: "white",
                      marginBottom: "0",
                    }}
                  >
                    Movie Development
                  </h1>
                  <p
                    style={{
                      color: "white",
                      lineHeight: "1.2",
                      fontSize: "1.3rem",
                    }}
                  >
                    Develop your films where professionals do it
                  </p>
                  <LargeWhiteButton>More Info</LargeWhiteButton>
                </Text>
              </Flex>
            </CoverImage>
          </FullScreen>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default CaruselSection;
