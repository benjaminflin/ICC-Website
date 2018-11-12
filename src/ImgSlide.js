import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	font-family: Roboto, sans-serif;
	scroll-snap-align: start;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	overflow: hidden;
`;

const Title = styled.div`
	opacity: 0;
	text-align: center;
	font-size: 30pt;
	font-weight: 100;
	animation: ${(props) => (props.active ? fadeIn : null)} 2s forwards;
`;

const Image = styled.img`
	opacity: 0;
	max-width: 50vw;
	animation: ${(props) => (props.active ? fadeIn : null)} 2s 300ms forwards;
`;

const ImgSlide = ({ title, img, active }) => {
	return (
		<Wrapper>
			<Title active={active}>{title}</Title>
			<Image active={active} src={img} />
		</Wrapper>
	);
};

export default ImgSlide;
