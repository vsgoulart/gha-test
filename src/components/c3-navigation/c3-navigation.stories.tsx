import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { C3Navigation } from "./c3-navigation"
import { C3NavigationProps } from "./c3-navigation.types"

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

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic = Template.bind({})
const BasicProps: C3NavigationProps = {
	app: {
		prefix: "Camunda",
		name: "Console",
		ariaLabel: "Camunda Console",
		routeProps: {},
		theme: "dark",
		prodFeaturesEnables: true,
	},
	appBar: {
		isOpen: false,
		toggle: () => {},
		setOpen: (_isOpen: boolean) => {},
		elements: [
			{
				key: "console",
				label: "Console",
				active: true,
			},
		],
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
Basic.args = BasicProps

export const AppBarOpen = Template.bind({})
const AppBarOpenProps: C3NavigationProps = {
	app: {
		prefix: "Camunda",
		name: "Console",
		ariaLabel: "Camunda Console",
		routeProps: {},
		theme: "dark",
		prodFeaturesEnables: true,
	},
	appBar: {
		isOpen: true,
		toggle: () => {},
		setOpen: (_isOpen: boolean) => {},
		elements: [
			{
				key: "console",
				label: "Console",
				active: true,
			},
			{
				key: "modeler",
				label: "Modeler",
				active: false,
			},
			{
				key: "tasklist",
				label: "Task List",
				active: false,
				subElements: [
					{
						key: "cluster-a",
						label: "Cluster A",
					},
					{
						key: "cluster-b",
						label: "Cluster B",
					},
				],
			},
		],
	},
	sideBar: {
		isOpen: false,
		toggle: () => {},
		setOpen: (_isOpen: boolean) => {},
	},
	infoSideBar: {
		isOpen: true,
		toggle: () => {},
		setOpen: (_isOpen: boolean) => {},
		elements: [
			{
				key: "info1",
				label: "Info 1",
			},
			{
				key: "info2",
				label: "Info 2",
			},
		],
	},
	navbar: {
		elements: [],
	},
}

AppBarOpen.args = AppBarOpenProps
