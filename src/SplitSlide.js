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
	background-size: cover;
	background-position: center;
	background-image: url(${(props) => props.background});
	display: grid;
	grid-template-rows: repeat(2, 50%);
	grid-template-columns: repeat(2, 45%);
	grid-column-gap: 10%;
	font-weight: 100;
	grid-auto-flow: row;
	overflow: hidden;
`;

const Title = styled.div`
	opacity: 0;
	font-size: 25pt;
	color: white;
	text-align: center;
	place-self: center;
	grid-row: ${(props) => (props.reverse ? '2' : '1')};
	grid-column: span 2;
	animation: ${(props) => (props.active ? fadeIn : null)} 2s forwards;
`;

const Description = styled.div`
	opacity: 0;
	color: white;
	font-weight: 300;
	font-size: 9pt;
	line-height: 1.5;
	margin: 50px 0;
	padding: 10px;
	place-self: ${(props) => (props.reverse ? 'start center' : 'end start')};
	grid-row: ${(props) => (props.reverse ? '1' : '2')};
	grid-column: 2;
	animation: ${(props) => (props.active ? fadeIn : null)} 2s 300ms forwards;

	@media only screen and (max-width: 900px) {
		grid-column: span 2;
	}
`;

const Disclaimer = styled.div`
	opacity: 0;
	color: white;
	font-weight: 300;
	font-size: 7pt;
	line-height: 1.5;
	place-self: ${(props) => (props.reverse ? 'start center' : 'end start')};
	margin: 50px 0;
	padding: 10px;
	grid-row: ${(props) => (props.reverse ? '1' : '2')};
	grid-column: 1;
	animation: ${(props) => (props.active ? fadeIn : null)} 2s 600ms forwards;

	@media only screen and (max-width: 900px) {
		display: none;
	}
`;

const SplitSlide = ({ title, background, disclaimer, desc, reverse, active }) => (
	<Wrapper background={background}>
		<Title active={active} reverse={reverse}>
			{title}
		</Title>
		<Disclaimer active={active} reverse={reverse}>
			{disclaimer}
		</Disclaimer>
		<Description active={active} reverse={reverse}>
			<b>{desc.caption}</b>
			<div>{desc.text}</div>
			<i>{desc.location}</i>
		</Description>
	</Wrapper>
);

export default SplitSlide;
