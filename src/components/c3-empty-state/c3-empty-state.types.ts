export interface C3EmptyStateProps {
	icon: { path: string; altText: string }
	heading: string
	introduction: any
	button?: {
		onClick: () => void
		disabled?: boolean
		label: string
		icon?: any
	}
	link?: { href: string; label: string; onClick?: () => void }
}
