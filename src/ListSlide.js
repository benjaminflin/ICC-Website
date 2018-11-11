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
	text-align: center;
	font-size: 20pt;
	font-weight: 100;
	animation: ${(props) => (props.active ? fadeIn : null)} 2s forwards;
`;

const Text = styled.div`
	font-size: 11pt;
	font-weight: 200;
`;

const Link = styled.a`color: #007bff;`;

const Image = styled.img`
	opacity: 0;
	max-width: 50vw;
	animation: ${(props) => (props.active ? fadeIn : null)} 2s 600ms forwards;
`;
const OrderedList = styled.ol`
	opacity: 0;
	animation: ${(props) => (props.active ? fadeIn : null)} 2s 300ms forwards;
`;
const UnorderedList = styled.ul`
	opacity: 0;
	animation: ${(props) => (props.active ? fadeIn : null)} 2s 300ms forwards;
`;

const ListSlide = ({ title, list, img, active, ordered }) => {
	const listItems = list.map((item, i) => (
		<li key={i}>
			<Text>{item.text}</Text>
			{item.link && <Link href={item.link.href}>{item.link.text}</Link>}
		</li>
	));
	return (
		<Wrapper>
			<Title active={active}>{title}</Title>

			{ordered ? (
				<OrderedList active={active}>{listItems}</OrderedList>
			) : (
				<UnorderedList active={active}>{listItems}</UnorderedList>
			)}
			<Image active={active} src={img} />
		</Wrapper>
	);
};

export default ListSlide;
