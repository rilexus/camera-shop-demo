import React, {
  Children,
  cloneElement,
  forwardRef,
  useMemo,
  useRef,
  useState,
} from "react";
import useInterval from "./hooks/useInterval/useInterval";

const swap = (array) => {
  const temp = array[array.length - 1];
  array[array.length - 1] = array[0];
  array[0] = temp;
  return array;
};

const Slider = ({ children }) => {
  const [visibleSlider, setVisibleSlider] = useState(0);

  const refs = useRef({});
  const wrapper = useRef(null);

  const increment = () => {
    setVisibleSlider((s) => (s + 1) % Children.toArray(children).length);
  };

  useInterval(increment, 2000);

  const translate = visibleSlider * 100;

  console.log(swap([1, 2, 3]));

  if (wrapper.current) {
    const rect = wrapper.current.getBoundingClientRect();
  }

  const currSlideWidth = Object.values(refs.current)[visibleSlider]?.width || 0;

  const trans = visibleSlider * currSlideWidth;

  return (
    <div>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <div
          ref={wrapper}
          style={{
            transition: "transform 1000ms",
            transform: `translate(calc(${visibleSlider} * -${currSlideWidth}px))`,
          }}
        >
          {Children.toArray(children).map((child, idx) => {
            return cloneElement(child, {
              ref: (element) => {
                if (element) {
                  const rect = element.getBoundingClientRect();
                  refs.current = { ...refs.current, [idx]: rect };
                }
              },
            });
          })}
        </div>
      </div>
    </div>
  );
};

const Slide = forwardRef(function Slide({ children, id }, ref) {
  return (
    <div
      id={id}
      ref={ref}
      style={{
        width: "100%",
        display: "inline-block",
      }}
    >
      {children}
    </div>
  );
});

Slider.Slide = Slide;

export default Slider;
