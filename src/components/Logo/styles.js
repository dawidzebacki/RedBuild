import styled from 'styled-components';

export const LogoWrapper = styled.a`
	margin: 0;
	padding: 0;
	color: ${({ theme }) => theme.colors.dark};
	font-size: 1em;
	text-align: left;
	text-decoration: none;
	background: transparent;
	border: none;
`;

export const LogoImg = styled.img`
	display: block;
	width: 16em;
`;
