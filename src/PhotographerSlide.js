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
	width: 100vw;
	height: 100vh;
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
	font-size: 30pt;
	font-weight: 100;
	animation: ${(props) => (props.active ? fadeIn : null)} 2s forwards;
`;

const Image = styled.img`
	opacity: 0;
	max-height: 30vh;
	animation: ${(props) => (props.active ? fadeIn : null)} 2s 600ms forwards;
`;

const Subtitle = styled.div`
	opacity: 0;
	font-size: 15pt;
	font-weight: 200;
	animation: ${(props) => (props.active ? fadeIn : null)} 2s 300ms forwards;
`;

const Link = styled.a`color: #007bff;`;

const Text = styled.div`
	font-size: 11pt;
	max-width: 70vw;
	font-weight: 200;
`;

const PhotographerSlide = ({ title, subtitle, text, link, img, active }) => {
	return (
		<Wrapper>
			<Title active={active}>{title}</Title>
			<Subtitle active={active}>{subtitle}</Subtitle>
			<Image active={active} src={img} />
			<Text>{text}</Text>
			<Link href={link.href}>{link.text}</Link>
		</Wrapper>
	);
};

export default PhotographerSlide;
