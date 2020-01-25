import React from "react";
import styled from "styled-components";

import BlankSlide from "./BlankSlide";
import TitleSlide from "./TitleSlide";
import SplitSlide from "./SplitSlide";
import SplitStory from "./SplitStory";
import ImgSlide from "./ImgSlide";
import ListSlide from "./ListSlide";
import PhotographerSlide from "./PhotographerSlide";
import LinksSlide from "./LinksSlide";
import IntroSlide from "./IntroSlide";

const Wrapper = styled.div`
  height: ${props => props.height}px;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

class SlideShow extends React.Component {
  state = {
    slides: []
  };

  constructor(props) {
    super(props);
    this.getSlides();
    this.ref = React.createRef();
  }

  async getSlides() {
    const slides = await fetch(
      `/assets/slides-${this.props.lang}.json.txt`
    ).then(res => res.json());
    const disclaimer = await fetch(
      `/assets/disclaimer-${this.props.lang}.txt`
    ).then(res => res.text());

    this.setState({
      slides,
      disclaimer
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.lang !== this.props.lang) this.getSlides();
  }
  render() {
    return (
      <Wrapper
        height={Math.min(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        )}
        ref={this.ref}
      >
        {this.state.slides.map((slide, index) => {
          const active = index === this.props.activeSlide;
          if (Math.abs(index - this.props.activeSlide) > 10) {
            return (
              <BlankSlide key={index} index={index} active={active} title="" />
            );
          }
          switch (slide.layout) {
            case "title":
              return (
                <TitleSlide
                  key={index}
                  index={index}
                  {...slide}
                  disclaimer={this.state.disclaimer}
                  active={active}
                />
              );
            case "blank":
              return (
                <BlankSlide
                  key={index}
                  index={index}
                  {...slide}
                  disclaimer={this.state.disclaimer}
                  active={active}
                />
              );
            case "split":
              return (
                <SplitSlide
                  key={index}
                  index={index}
                  {...slide}
                  disclaimer={this.state.disclaimer}
                  active={active}
                />
              );
            case "split-reverse":
              return (
                <SplitSlide
                  key={index}
                  index={index}
                  {...slide}
                  disclaimer={this.state.disclaimer}
                  active={active}
                  reverse
                />
              );
            case "split-story":
            case "split-story-link":
              return (
                <SplitStory
                  key={index}
                  index={index}
                  {...slide}
                  disclaimer={this.state.disclaimer}
                  active={active}
                />
              );
            case "split-story-reverse":
              return (
                <SplitStory
                  key={index}
                  index={index}
                  {...slide}
                  disclaimer={this.state.disclaimer}
                  active={active}
                  reverse
                />
              );
            case "img":
              return <ImgSlide key={index} active={active} {...slide} />;
            case "ordered-list":
              return (
                <ListSlide key={index} active={active} {...slide} ordered />
              );
            case "unordered-list":
              return <ListSlide key={index} active={active} {...slide} />;
            case "photographer":
              return (
                <PhotographerSlide key={index} active={active} {...slide} />
              );
            case "links":
              return <LinksSlide key={index} active={active} {...slide} />;
            case "intro":
              return <IntroSlide key={index} active={active} {...slide} />;
            default:
              return (
                <BlankSlide
                  key={index}
                  index={index}
                  active={active}
                  title="Invalid Slide"
                />
              );
          }
        })}
      </Wrapper>
    );
  }
}

export default SlideShow;
