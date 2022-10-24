import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { C3Navigation } from "./c3-navigation"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "UIShell/C3Navigation",
	component: C3Navigation,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		// "app.prefix": {
		// 	control: { type: "text" },
		// },
		// app: {
		// 	prefix: {
		// 		control: { type: "boolean" },
		// 	},
		// 	name: {
		// 		control: { type: "text" },
		// 	},
		// 	ariaLabel: {
		// 		control: { type: "text" },
		// 	},
		// 	routerProps: {
		// 		control: { type: "any" },
		// 	},
		// },
	},
} as ComponentMeta<typeof C3Navigation>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof C3Navigation> = (args) => (
	<C3Navigation {...args} />
)

export const HelloWorld = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
	app: {
		prefix: "Camunda",
		name: "Console",
		ariaLabel: "Camunda Console",
		routerProps: {},
	},
	appBar: {
		isOpen: false,
		toggle: () => {},
		setOpen: (_isOpen: boolean) => {},
	},
	sideBar: {
		isOpen: false,
		toggle: () => {},
		setOpen: (_isOpen: boolean) => {},
	},
	navbar: {
		elements: [],
	},
}
