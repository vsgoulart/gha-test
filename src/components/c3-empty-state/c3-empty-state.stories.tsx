import { ComponentMeta, ComponentStory } from "@storybook/react"
import { C3EmptyState } from "./c3-empty-state"
import React from "react"
import { C3EmptyStateProps } from "./c3-empty-state.types"

const Template: ComponentStory<typeof C3EmptyState> = (args) => (
	<C3EmptyState {...args} />
)
export const Basic = Template.bind({})
const BasicProps: C3EmptyStateProps = {
	heading: "the heading",
	description: "the text",
	icon: {
		path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwmcgWlssJR3CAvf5lJ2ekJbn29tb9AWj272UR9JGYMA&s",
		altText: "alternative text",
	},
	button: { label: "the button", onClick: () => console.log("clicked") },
	link: { label: "the link", href: "https://sprichwortrekombinator.de/" },
}
Basic.args = BasicProps

export default {
	title: "Components/C3EmptyState",
	component: C3EmptyState,
	argTypes: {},
} as ComponentMeta<typeof C3EmptyState>
