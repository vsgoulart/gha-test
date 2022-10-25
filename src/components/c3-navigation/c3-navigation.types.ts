export interface C3NavigationAppProps {
	prefix: string
	name: string
	ariaLabel: string
	routeProps: any
	theme: string
	prodFeaturesEnables: boolean
}

export interface C3NavigationSideBarBaseProps {
	ariaLabel?: string
	isOpen: boolean
	toggle: () => void
	setOpen: (isOpen: boolean) => void
	elements?: Array<{
		ariaLabel?: string
		key: string
		label: string
		active?: boolean
		routeProps?: any
		href?: string
		onClick?: () => void
		subElements?: Array<{
			ariaLabel?: string
			key: string
			label: string
			routeProps?: any
			href?: string
			onClick?: () => void
		}>
	}>
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
}

export interface C3NavigationProps {
	app: C3NavigationAppProps
	appBar: C3NavigationSideBarBaseProps
	sideBar: C3NavigationSideBarBaseProps
	orgSideBar?: {
		ariaLabel?: string
		isOpen: boolean
		toggle: () => void
		setOpen: (isOpen: boolean) => void
	}
	infoSideBar?: C3NavigationSideBarBaseProps
	userSideBar?: {
		ariaLabel?: string
		isOpen: boolean
		toggle: () => void
		setOpen: (isOpen: boolean) => void
		profile: {
			label: string
			user: {
				name: string
				email: string
			}
		}
		themeSelector?: {
			onChange: (newValue: string) => void
		}
		stageToggle?: {
			toggle: () => void
		}
		actions: Array<{
			ariaLabel?: string
			key: string
			label: string
			kind?: "ghost" | "danger--ghost"
			onClick: () => void
		}>
		bottomActions: Array<{
			ariaLabel?: string
			key: string
			label: string
			kind?: "ghost" | "danger--ghost"
			renderIcon?: any
			onClick: () => void
		}>
	}
	navbar: C3NavigationNavBarProps
	forwardRef?: React.ForwardRefExoticComponent<any>
	organizations?: {
		active: string
		manage: {
			onClick: () => void
			label: string
			ariaLabel: string
		}
		other: Array<{
			label: string
			key: string
			onClick: () => void
		}>
	}
}
