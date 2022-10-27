import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { ArrowRight } from "@carbon/react/icons"
import "../../index.scss"

import { C3Navigation } from "./c3-navigation"
import {
	C3NavigationAppProps,
	C3NavigationNavBarProps,
	C3NavigationProps,
	C3NavigationSideBarBaseProps,
} from "./c3-navigation.types"

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

// HELPER FUNCTIONS

function createAppProps(): C3NavigationAppProps {
	return {
		prefix: "Camunda",
		name: "Console",
		ariaLabel: "Camunda Console",
		routeProps: {},
	}
}

function createAppBarProps(options: {
	isOpen: boolean
}): C3NavigationSideBarBaseProps {
	return {
		isOpen: options.isOpen,
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
				href: "https://camunda.com/",
				target: "_blank",
			},
			{
				key: "tasklist",
				label: "Task List",
				active: false,
				subElements: [
					{
						key: "cluster-a",
						label: "Cluster A",
						href: "https://camunda.com/",
						target: "_blank",
					},
					{
						key: "cluster-b",
						label: "Cluster B",
						href: "https://camunda.com/",
						target: "_blank",
					},
				],
			},
		],
	}
}

function createNavBarBarProps(): C3NavigationNavBarProps {
	return {
		elements: [
			{
				key: "dashboard",
				label: "Dashboard",
				isCurrentPage: true,
				routeProps: {},
			},
			{
				key: "clusters",
				label: "Clusters",
				isCurrentPage: false,
				routeProps: {},
			},
		],
		orgName: "Camunda",
		tags: [
			{
				key: "stage",
				label: "Production",
				color: "red",
			},
			{
				key: "githash",
				label: "abcdefg",
				color: "teal",
			},
		],
	}
}

function createInfoSideBarProps(options: {
	isOpen: boolean
}): C3NavigationSideBarBaseProps {
	return {
		isOpen: options.isOpen,
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
	}
}

function createOrgSideBarProps(options: {
	isOpen: boolean
	orgCount: number
}): C3NavigationSideBarBaseProps {
	const elements: any[] = []
	for (let i = 0; i < options.orgCount; i++) {
		elements.push({
			key: `org-${i}`,
			label: `Organization ${i}`,
		})
	}
	return {
		isOpen: options.isOpen,
		toggle: () => {},
		setOpen: (_isOpen: boolean) => {},
		customElements: {
			activeOrganization: {
				activeLabel: "Active Organization",
				otherLabel: "Other Organization",
				orgName: "Camunda",
				action: {
					label: "Manage",
					onClick: () => {},
				},
			},
		},
		elements,
	}
}

function createUserSideBarProps(options: {
	isOpen: boolean
}): C3NavigationSideBarBaseProps {
	return {
		isOpen: options.isOpen,
		toggle: () => {},
		setOpen: (_isOpen: boolean) => {},
		customElements: {
			profile: {
				label: "Profile",
				user: {
					email: "teamcloud@camunda.com",
					name: "Team Cloud",
				},
			},
			themeSelector: {
				currentTheme: "dark",
				onChange: (_theme: string) => {},
			},
			stageToggle: {
				prodFeaturesEnabled: true,
				toggle: () => {},
			},
		},
		elements: [
			{
				key: "cookie",
				label: "Cookie Preferences",
			},
			{
				key: "terms",
				label: "Terms of use",
			},
			{
				key: "delete",
				label: "Delete account",
				kind: "danger--ghost",
			},
		],
		bottomElements: [
			{
				key: "logout",
				label: "Logout",
				kind: "ghost",
				renderIcon: ArrowRight,
			},
		],
	}
}

// TEMPLATES

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic = Template.bind({})
const BasicProps: C3NavigationProps = {
	app: createAppProps(),
	appBar: createAppBarProps({ isOpen: false }),
	navbar: createNavBarBarProps(),
}
Basic.args = BasicProps

export const AppBarOpened = Template.bind({})
const AppBarOpenProps: C3NavigationProps = {
	app: createAppProps(),
	appBar: createAppBarProps({ isOpen: true }),
	infoSideBar: createInfoSideBarProps({ isOpen: false }),
	orgSideBar: createOrgSideBarProps({ isOpen: false, orgCount: 0 }),
	userSideBar: createUserSideBarProps({ isOpen: false }),
	navbar: createNavBarBarProps(),
}
AppBarOpened.args = AppBarOpenProps

export const OrgSideBarOpened = Template.bind({})
const OrgSideBarOpenedProps: C3NavigationProps = {
	app: createAppProps(),
	appBar: createAppBarProps({ isOpen: false }),
	infoSideBar: createInfoSideBarProps({ isOpen: false }),
	orgSideBar: createOrgSideBarProps({ isOpen: true, orgCount: 5 }),
	userSideBar: createUserSideBarProps({ isOpen: false }),
	navbar: createNavBarBarProps(),
}
OrgSideBarOpened.args = OrgSideBarOpenedProps

export const OrgSideBarOpenedNoOrgs = Template.bind({})
const OrgSideBarOpenedNoOrgsProps: C3NavigationProps = {
	app: createAppProps(),
	appBar: createAppBarProps({ isOpen: false }),
	infoSideBar: createInfoSideBarProps({ isOpen: false }),
	orgSideBar: createOrgSideBarProps({ isOpen: true, orgCount: 0 }),
	userSideBar: createUserSideBarProps({ isOpen: false }),
	navbar: createNavBarBarProps(),
}
OrgSideBarOpenedNoOrgs.args = OrgSideBarOpenedNoOrgsProps

export const InfoSideBarOpened = Template.bind({})
const InfoSideBarOpenedProps: C3NavigationProps = {
	app: createAppProps(),
	appBar: createAppBarProps({ isOpen: false }),
	infoSideBar: createInfoSideBarProps({ isOpen: true }),
	orgSideBar: createOrgSideBarProps({ isOpen: false, orgCount: 0 }),
	userSideBar: createUserSideBarProps({ isOpen: false }),
	navbar: createNavBarBarProps(),
}
InfoSideBarOpened.args = InfoSideBarOpenedProps

export const UserSideBarOpened = Template.bind({})
const UserSideBarOpenedProps: C3NavigationProps = {
	app: createAppProps(),
	appBar: createAppBarProps({ isOpen: false }),
	infoSideBar: createInfoSideBarProps({ isOpen: false }),
	orgSideBar: createOrgSideBarProps({ isOpen: false, orgCount: 0 }),
	userSideBar: createUserSideBarProps({ isOpen: true }),
	navbar: createNavBarBarProps(),
}
UserSideBarOpened.args = UserSideBarOpenedProps
