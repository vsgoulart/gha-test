export interface C3NavigationAppProps {
	prefix: string
	name: string
	ariaLabel: string
	routeProps: any
}

export interface C3NavigationElementProps {
	ariaLabel?: string
	key: string
	label: string
	kind?: "ghost" | "danger--ghost"
	active?: boolean
	renderIcon?: any
	routeProps?: any
	href?: string
	onClick?: () => void
	subElements?: C3NavigationElementProps[]
}

export interface C3NavigationSideBarBaseProps {
	ariaLabel?: string
	isOpen: boolean
	toggle: () => void
	setOpen: (isOpen: boolean) => void
	customElements?: {
		activeOrganization?: {
			activeLabel: string
			otherLabel: string
			orgName: string
			action: {
				label: string
				onClick: () => void
			}
		}
		profile?: {
			label: string
			user: {
				name: string
				email: string
			}
		}
		themeSelector?: {
			currentTheme: string
			onChange: (newValue: string) => void
		}
		stageToggle?: {
			prodFeaturesEnabled: boolean
			toggle: () => void
		}
	}
	elements?: C3NavigationElementProps[]
	bottomElements?: C3NavigationElementProps[]
}

export interface C3NavigationNavBarProps {
	elements: Array<{
		label: string
		key: string
		routeProps: any
		isCurrentPage: boolean
	}>
	tags?: Array<{
		label: string
		key: string
		color?: "red" | "green" | "purple" | "teal"
	}>
	orgName?: string
}

export interface C3NavigationProps {
	app: C3NavigationAppProps
	appBar: C3NavigationSideBarBaseProps
	sideBar: C3NavigationSideBarBaseProps
	orgSideBar?: C3NavigationSideBarBaseProps
	infoSideBar?: C3NavigationSideBarBaseProps
	userSideBar?: C3NavigationSideBarBaseProps
	navbar: C3NavigationNavBarProps
	forwardRef?: React.ForwardRefExoticComponent<any>
}
