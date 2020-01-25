import React, { useState, useEffect, useContext, useRef } from "react";
import styled from "styled-components";
import ActiveSlideContext from "./ActiveSlideContext";

const timing = 2000;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  font-family: Roboto, sans-serif;
  scroll-snap-align: start;
  background-size: cover;
  background-position: center;
  font-size: 42pt;
  font-weight: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  width: 100%;
  text-align: center;
  opacity: ${props => (props.opaque ? 1 : 0)};
  transition: opacity ${timing / 2}ms ease-in-out;
`;

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const IntroSlide = ({ text, active }) => {
  const ctx = useContext(ActiveSlideContext);
  const [i, setI] = useState(0);
  const [opaque, setOpaque] = useState(true);

  useInterval(() => {
    setOpaque(!opaque);
    if (!opaque) {
      setI(i + 1);
    }
  }, timing / 2);

  useEffect(() => {
    if (i === text.length && active) {
      ctx.setActiveSlide(1);
    }
  }, [i, active]);

  useEffect(() => {
    if (active) {
      setI(0);
    }
  }, [active]);

  return (
    <Wrapper>
      <Text opaque={opaque}>{text[i]}</Text>
    </Wrapper>
  );
};

export default IntroSlide;
