module.exports = {
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		{
			name: "storybook-addon-sass-postcss",
			options: {
				sassLoaderOptions: {
					implementation: require("sass"),
				},
			},
		},
	],
	framework: "@storybook/react",
}
