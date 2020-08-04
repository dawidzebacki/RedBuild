import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Logo from 'components/Logo';

import {
    Header,
    Wrapper,
    StyledLogo,
} from './styles';

const Navbar = () => {
    const { file, site } = useStaticQuery(graphql`
		query {
			file(name: { eq: "logo" }) {
				childImageSharp {
					fluid(maxWidth: 1360) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);


    return (
        <Header>
            <Wrapper id="navbar">
                <StyledLogo
                    as={Logo}
                    to="/"
                    image={file.childImageSharp.fluid}
                />
            </Wrapper>
        </Header>
    );
};

export default Navbar;
