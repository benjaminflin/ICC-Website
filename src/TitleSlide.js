import React from 'react';
import styled, { keyframes } from 'styled-components';
import LangContext from './LangContext';

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
	grid-template-columns: 33% 33% 33%;
	grid-template-rows: 33% 30fr 20% 100fr;
	grid-template-areas: "header header header" "main main main" "sub sub sub" "footer footer footer";
	grid-auto-flow: column;
	grid-auto-columns: 10%;
	text-align: center;
	color: white;
	overflow: hidden;
`;

const Title = styled.div`
	opacity: 0;
	font-size: 40pt;
	font-weight: 100;
	grid-area: main;
	animation: ${(props) => (props.active ? fadeIn : null)} 3s forwards;
`;

const Subtitle = styled.div`
	opacity: 0;
	font-size: 20pt;
	font-weight: 100;
	grid-area: sub;
	animation: ${(props) => (props.active ? fadeIn : null)} 3s 300ms forwards;
`;

const Credit = styled.div`
	opacity: 0;
	grid-area: header;
	grid-column: 3;
	font-size: 12pt;
	font-weight: 100;
	place-self: center;
	animation: ${(props) => (props.active ? fadeIn : null)} 3s 900ms forwards;
`;

const Logo = styled.img`
	opacity: 0;
	grid-area: header;
	grid-column: 1;
	width: 100px;
	place-self: center;
	animation: ${(props) => (props.active ? fadeIn : null)} 3s 600ms forwards;
`;
const SwitchLang = styled.a`
	opacity: 0;
	grid-area: footer;
	place-self: center;
	font-size: 10pt;
	text-decoration: none;
	color: #007bff;
	animation: ${(props) => (props.active ? fadeIn : null)} 3s 1200ms forwards;
`;

const TitleSlide = ({ title, background, subtitle, credit, logo, link, active }) => (
	<LangContext.Consumer>
		{({ switchLang }) => (
			<Wrapper background={background}>
				<Title active={active}>{title}</Title>
				<Subtitle active={active}>{subtitle}</Subtitle>
				<Credit active={active}>{credit}</Credit>
				<Logo active={active} src={logo} />
				<SwitchLang active={active} href="#" onClick={switchLang}>
					{link}
				</SwitchLang>
			</Wrapper>
		)}
	</LangContext.Consumer>
);

export default TitleSlide;
