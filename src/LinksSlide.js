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

const Link = styled.a`
	opacity: 0;
	color: #007bff;
	animation: ${(props) => (props.active ? fadeIn : null)} 2s 300ms forwards;
	display: inline;
`;

const Links = styled.div`max-width: 70vw;`;
const Text = styled.div`
	opacity: 0;
	font-size: 11pt;
	max-width: 70vw;
	font-weight: 200;
	animation: ${(props) => (props.active ? fadeIn : null)} 2s forwards;
`;

const LinksSlide = ({ text, links, active }) => (
	<Wrapper>
		<Text active={active}>{text}</Text>
		<Links>
			{links.map((link, i, { length }) => {
				const last = i === length - 1;
				const secondToLast = i === length - 2;
				if (last)
					return (
						<React.Fragment>
							<Link key={i} active={active} href={link.href}>
								{link.text}
							</Link>
							{'.'}
						</React.Fragment>
					);
				if (secondToLast)
					return (
						<React.Fragment>
							<Link key={i} active={active} href={link.href}>
								{link.text}
							</Link>
							{' and '}
						</React.Fragment>
					);
				return (
					<React.Fragment>
						<Link key={i} active={active} href={link.href}>
							{link.text}
						</Link>
						{', '}
					</React.Fragment>
				);
			})}
		</Links>
	</Wrapper>
);

export default LinksSlide;
