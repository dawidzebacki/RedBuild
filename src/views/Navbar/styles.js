import styled from 'styled-components';

export const Header = styled.header`
	position: relative;
	max-width: 1360px;
	margin: 0 auto;
	padding: 2em 0;
	${({ theme }) => theme.mq.tabletMid} {
		padding: 0;
	}
`;

export const Wrapper = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 100;
	display: flex;
	justify-content: space-between;
	padding: 0.5rem;
	background: blue;
	${({ theme }) => theme.mq.tabletMid} {
		position: relative;
		z-index: auto;
		padding: 0.5em 0.75rem;
		overflow: hidden;
		background: yellow;
	}
`;

export const StyledLogo = styled.div`
	${({ theme }) => theme.mq.tabletMid} {
		font-size: 1.15em;
	}
`;