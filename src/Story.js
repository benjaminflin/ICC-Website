import React from "react";
import styled from "styled-components";
import Modal from "./Modal";

const StoryButton = styled.button`
  border-radius: 50%;
  background: #007bff;
  width: 40px;
  height: 40px;
  display: grid;
  place-content: center;
  color: white;
  border: none;
  outline: none;
  transition: box-shadow 300ms;
  font-family: Roboto, sans-serif;
  font-size: 15pt;
  :hover {
    box-shadow: 0px 0px 0px 5px rgba(76, 162, 255, 0.5);
  }
  :active {
    box-shadow: 0px 0px 0px 5px rgba(76, 162, 255, 0.9);
  }
`;

const Wrapper = styled.div`
  display: grid;
  place-content: center;
  width: 100%;
  height: 100%;
  font-family: Roboto, sans-serif;
`;

const Container = styled.div`
  background: white;
  border-radius: 3px;
`;

const Header = styled.div`
  border-bottom: 1px solid #ddd;
  padding-bottom: 0;
  font-weight: 100;
  font-size: 18pt;
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  font-size: 12pt;
  padding: 10px;
  max-width: 70vw;
`;

const Title = styled.span`
  padding: 10px;
`;

const CloseButton = styled.button`
  outline: none;
  border: none;
  font-family: Roboto, sans-serif;
  color: #aaa;
  font-weight: 100;
  font-size: 13pt;
  align-self: start;
  padding: 8px;
  padding-top: 0;
  background: transparent;
  :hover {
    color: black;
  }
`;

const Caption = styled.div`
  font-size: 7pt;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Link = styled.a`
  font-size: 9pt;
  color: #007bff;
`;

const Text = styled.p`
  margin-bottom: 0;
  font-size: 11pt;
  font-weight: 400;
  i {
    font-weight: 200;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #ccc;
`;

class Story extends React.Component {
  state = { open: false };

  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  open() {
    this.setState({ open: true });
  }

  close() {
    this.setState({ open: false });
  }

  render() {
    const { title, text, caption, desc, textLink, captionLink } = this.props;
    return (
      <React.Fragment>
        <StoryButton onClick={this.open}>...</StoryButton>
        <Modal open={this.state.open} onClose={this.close}>
          <Wrapper>
            <Container>
              <Header>
                <Title>{title}</Title>
                <CloseButton onClick={this.close}>x</CloseButton>
              </Header>
              <Content>
                <Text>{text}</Text>
                {textLink && <Link href={textLink.href}>{textLink.text}</Link>}
                <Caption>
                  {caption.map
                    ? caption.map(text => <div>{text}</div>)
                    : caption}
                </Caption>
                {captionLink && (
                  <Link href={captionLink.href}>{captionLink.text}</Link>
                )}
                {text && desc && <Line />}
                {desc && (
                  <React.Fragment>
                    <Text>
                      <b>{desc.caption}</b>
                      <div>{desc.text}</div>
                      <i>{desc.location}</i>
                    </Text>
                  </React.Fragment>
                )}
              </Content>
            </Container>
          </Wrapper>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Story;
