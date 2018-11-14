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
	opacity: 0;
	width: 100%;
	height: 100%;
	font-family: Roboto, sans-serif;
	scroll-snap-align: start;
	background-size: cover;
	background-position: center;
	background-image: url(${(props) => props.background});
	font-size: 5vmax;
	font-weight: 100;
	display: grid;
	place-content: center;
	text-align: center;
	animation: ${(props) => (props.active ? fadeIn : null)} 2s forwards;
	overflow: hidden;
`;

const BlankSlide = ({ title, active }) => {
	return <Wrapper active={active}>{title}</Wrapper>;
};

export default BlankSlide;
