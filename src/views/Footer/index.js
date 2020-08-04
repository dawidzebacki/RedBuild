import React from 'react';
import Conditional from 'components/Conditional';

import StyledFooter from './styles';

const Footer = () => {

    const developingYear = 2020;
    let yearMessage = "";

    if (developingYear !== new Date().getFullYear()) {
        yearMessage = `${developingYear} - ${new Date().getFullYear()}`;
    } else {
        yearMessage = `${new Date().getFullYear()}`;
    }

    return (
        <StyledFooter>
            <Conditional to="https://www.linkedin.com/in/dawidzebacki/">Dawid Zębacki</Conditional>, {yearMessage}
        </StyledFooter>
    )
}

export default Footer;