import React from 'react';
import styled, { keyframes } from 'styled-components';
import ActiveSlideContext from './ActiveSlideContext';
const fadeInOut = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	font-family: Roboto, sans-serif;
	scroll-snap-align: start;
	background-size: cover;
	background-position: center;
	font-size: 40pt;
	font-weight: 100;
`;

const Text = styled.div`
	position: relative;
	text-align: center;
	top: 10%;
	opacity: 0;
	animation: ${(props) => (props.active ? fadeInOut : null)} 2s ${(props) => props.delay}s forwards;
`;

class IntroSlide extends React.Component {
	static contextType = ActiveSlideContext;

	componentDidMount() {
		setTimeout(() => {
			if (this.props.active) this.context.setActiveSlide(1);
		}, 6000);
	}

	render() {
		const { text, active } = this.props;
		return (
			<Wrapper>
				{text.map((textItem, i) => (
					<Text active={active} delay={i * 2}>
						{textItem}
					</Text>
				))}
			</Wrapper>
		);
	}
}

export default IntroSlide;
