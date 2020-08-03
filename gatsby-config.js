const path = require('path');

module.exports = {
	siteMetadata: {
		title: 'RedBuild',
		description: "RedBuild company business website",
		author: '@redgato',
	},
	plugins: [
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'assets',
				path: `${__dirname}/src/assets`,
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'gatsby-starter-default',
				short_name: 'boilerplate',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'minimal-ui',
				// icon: 'src/assets/images/logo.png',
			},
		},
		{
			resolve: 'gatsby-plugin-root-import',
			options: {
				src: path.join(__dirname, 'src'),
				assets: path.join(__dirname, 'src/assets'),
				components: path.join(__dirname, 'src/components'),
				layouts: path.join(__dirname, 'src/layouts'),
				pages: path.join(__dirname, 'src/pages'),
				templates: path.join(__dirname, 'src/templates'),
				utils: path.join(__dirname, 'src/utils'),
				views: path.join(__dirname, 'src/views'),
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
