import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
		line-height: 1.15;
		text-size-adjust: 100%;
	}

	body {
		margin: 0;
		background: ${({ theme }) => theme.colors.mainBg};
	}

	*,
	*::before,
	*::after {
		box-sizing: inherit;
	}
`;

export default GlobalStyle;
