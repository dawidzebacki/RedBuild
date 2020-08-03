import React from 'react';
import PropTypes from 'prop-types';
import Conditional from 'components/Conditional';

const Layout = ({ children }) => {
	const developingYear = 2020;
	let yearMessage = "";

	if (developingYear !== new Date().getFullYear()) {
		yearMessage = `${developingYear} - ${new Date().getFullYear()}`;
	} else {
		yearMessage = `${new Date().getFullYear()}`;
	}

	return (
		<>
			<main>
				{children}
			</main>
			<footer>
				<Conditional to="https://www.linkedin.com/in/dawidzebacki/">Dawid Zębacki</Conditional>, {yearMessage}	
			</footer>
		</>
	);
}


Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
