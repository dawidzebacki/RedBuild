import React from 'react';
import PropTypes from 'prop-types';

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
				Dawid Zębacki, {yearMessage}	
			</footer>
		</>
	);
}


Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
