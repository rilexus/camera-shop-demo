import React, { useState } from "react";
import {
  Container,
  CoverImage,
  Dialog,
  LargeButton,
  Padding,
  Text,
  YStack,
} from "../../../../ui";
import styled from "styled-components";
import { l, md, sm, xl } from "../../../../ui/css/medias";
import { colors } from "../../../../ui/theme/theme";
import CloseOutlined from "../../../../ui/icons/CloseOutlined/CloseOutlined";
import { useToggle } from "../../../../hooks";

const PhotoSquareStyled = styled.div`
  transition: transform 200ms;
  transform: scale(1);

  width: 150px;
  height: 150px;
  cursor: pointer;
  ${sm`
    width: 170px;
    height: 170px;
  `}
  ${md`
    width: 230px;
    height: 230px;
  `}
  ${l`
    width: 300px;
    height: 300px;
  `}
  ${xl`
    width: 380px;
    height: 380px;
  `}

  &:hover {
    transform: scale(1.03);
    z-index: 100;
  }
`;

const PhotoSquare = ({ children, ...props }) => {
  return <PhotoSquareStyled {...props}>{children}</PhotoSquareStyled>;
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 1rem;
  row-gap: 1rem;
`;

const Item = styled.div`
  grid-area: ${({ area }) => area};
`;

Grid.Item = Item;

const ImageDialog = ({ src, onClick }) => {
  return (
    <Dialog open={src !== ""} onClick={onClick}>
      <img src={src} alt="" width={"600px"} />
    </Dialog>
  );
};

const MediaWidth = styled.div`
  min-width: 500px;
  ${sm`
    min-width: 540px;
  `}
  ${md`
    min-width: 700px;
  `}
`;
const Bg = styled.div`
  background-color: ${colors("gray.1")};
`;

const Border = styled.div`
  border: 2px solid black;
`;

const Input = styled.input`
  outline: none;
  border: 1px solid black;
  width: 100%;
  background-color: transparent;
  padding: 0.5em 0.5em;
  box-sizing: border-box;
`;

const Textarea = styled.textarea`
  box-sizing: border-box;
  outline: none;
  border: 1px solid black;
  width: 100%;
  background-color: transparent;
  padding: 0.5em 0.5em;
`;

const CloseButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        right: "2px",
        top: "2px",
        cursor: "pointer",
        padding: "1.5em",
        border: "none",
      }}
    >
      <CloseOutlined width={"1.5em"} height={"1.5em"} />
    </button>
  );
};

const FormDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open}>
      <section>
        <MediaWidth>
          <Bg>
            <Border>
              <Padding padding={"2em"}>
                <Text align={"right"}>
                  <CloseButton onClick={onClose} />
                </Text>
                <div
                  style={{
                    padding: "0 2em",
                  }}
                >
                  <YStack>
                    <Text align={"center"}>
                      <h1
                        style={{
                          fontSize: "2em",
                        }}
                      >
                        Share your work
                      </h1>
                    </Text>
                    <label>
                      Full name
                      <br />
                      <Input type="text" placeholder={"Full name"} />
                    </label>
                    <label htmlFor="">
                      Email
                      <br />
                      <Input type="email" placeholder={"Email"} />
                    </label>
                    <label>
                      Note
                      <br />
                      <Textarea name="note" id="" cols="30" rows="10" />
                    </label>

                    <Text align={"center"}>
                      <LargeButton onClick={onClose}>Send</LargeButton>
                    </Text>
                  </YStack>
                </div>
              </Padding>
            </Border>
          </Bg>
        </MediaWidth>
      </section>
    </Dialog>
  );
};

const GallerySection = () => {
  const [src, setSrc] = useState("");
  const [formIsOpen, toggleForm] = useToggle(false);

  const open = (src) => {
    return () => {
      setSrc(src);
    };
  };

  return (
    <section>
      <ImageDialog src={src} onClick={() => setSrc("")} />
      <FormDialog open={formIsOpen} onClose={toggleForm} />
      <Text align={"center"}>
        <h1>Gallery</h1>
      </Text>
      <Container>
        <Grid>
          <Grid.Item area={"1/1"}>
            <PhotoSquare
              onClick={open(
                "https://static.boredpanda.com/blog/wp-content/uploads/2021/02/Breathtaking-Analog-Photography-from-the-2020-International-Photography-Awards-603780316d46e__880.jpg"
              )}
            >
              <CoverImage
                url={
                  "https://static.boredpanda.com/blog/wp-content/uploads/2021/02/Breathtaking-Analog-Photography-from-the-2020-International-Photography-Awards-603780316d46e__880.jpg"
                }
              />
            </PhotoSquare>
          </Grid.Item>

          <Grid.Item area={"1/2"}>
            <PhotoSquare
              onClick={open(
                "https://miro.medium.com/max/1400/0*V5_BUbfv8g2d7SHM."
              )}
            >
              <CoverImage
                url={"https://miro.medium.com/max/1400/0*V5_BUbfv8g2d7SHM."}
              />
            </PhotoSquare>
          </Grid.Item>

          <Grid.Item area={"1/3"}>
            <PhotoSquare
              onClick={open(
                "https://static.boredpanda.com/blog/wp-content/uploads/2021/02/Breathtaking-Analog-Photography-from-the-2020-International-Photography-Awards-60377e5908e01__880.jpg"
              )}
            >
              <CoverImage
                url={
                  "https://static.boredpanda.com/blog/wp-content/uploads/2021/02/Breathtaking-Analog-Photography-from-the-2020-International-Photography-Awards-60377e5908e01__880.jpg"
                }
              />
            </PhotoSquare>
          </Grid.Item>

          <Grid.Item area={"2/1"}>
            <PhotoSquare
              onClick={open(
                "https://static.boredpanda.com/blog/wp-content/uploads/2021/02/Breathtaking-Analog-Photography-from-the-2020-International-Photography-Awards-6038f3ad7594a__880.jpg"
              )}
            >
              <CoverImage url="https://static.boredpanda.com/blog/wp-content/uploads/2021/02/Breathtaking-Analog-Photography-from-the-2020-International-Photography-Awards-6038f3ad7594a__880.jpg" />
            </PhotoSquare>
          </Grid.Item>

          <Grid.Item area={"2/2"}>
            <PhotoSquare
              onClick={open(
                "https://static.boredpanda.com/blog/wp-content/uploads/2021/02/Breathtaking-Analog-Photography-from-the-2020-International-Photography-Awards-60377d0181546__880.jpg"
              )}
            >
              <CoverImage url="https://static.boredpanda.com/blog/wp-content/uploads/2021/02/Breathtaking-Analog-Photography-from-the-2020-International-Photography-Awards-60377d0181546__880.jpg" />
            </PhotoSquare>
          </Grid.Item>

          <Grid.Item area={"2/3"}>
            <PhotoSquare
              onClick={open(
                "https://static.boredpanda.com/blog/wp-content/uploads/2021/02/Breathtaking-Analog-Photography-from-the-2020-International-Photography-Awards-6037758d7a643__880.jpg"
              )}
            >
              <CoverImage url="https://static.boredpanda.com/blog/wp-content/uploads/2021/02/Breathtaking-Analog-Photography-from-the-2020-International-Photography-Awards-6037758d7a643__880.jpg" />
            </PhotoSquare>
          </Grid.Item>
        </Grid>
      </Container>

      <Padding padding={"2em"}>
        <Text
          align={"center"}
          style={{
            cursor: "pointer",
            fontSize: "1.5em",
          }}
        >
          If you want to share your work with us{" "}
          <span
            style={{
              color: "red",
            }}
            onClick={toggleForm}
          >
            click here
          </span>
        </Text>
      </Padding>
    </section>
  );
};

export default GallerySection;
