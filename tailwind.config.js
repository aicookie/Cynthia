const colors = require("tailwindcss/colors");
module.exports = {
	content: ["./*.html"],
	darkMode: "class", // or 'media' or 'class'
	variants: {
		extend: {},
	},
	plugins: [],
	theme: {
		backgroundSize: {
			auto: "auto",
			cover: "cover",
			contain: "contain",
			"50%": "50%",
			16: "4rem",
		},
		extend: {
			backgroundImage: {
				bg1: "url('/assets/image/backround.jpeg')",
			},
		},
	},
};
