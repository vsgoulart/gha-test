import {
	Button,
	FormLabel,
	Header,
	HeaderContainer,
	HeaderGlobalAction,
	HeaderGlobalBar,
	HeaderMenuItem,
	HeaderName,
	HeaderNavigation,
	HeaderPanel,
	HeaderSideNavItems,
	RadioButton,
	RadioButtonGroup,
	SideNav,
	SideNavItems,
	SideNavLink,
	SideNavMenu,
	SideNavMenuItem,
	SkipToContent,
	Stack,
	SwitcherDivider,
	Tag,
	Toggle,
} from "@carbon/react"
import {
	Close,
	Enterprise,
	Help,
	Switcher as SwitcherIcon,
	UserAvatar,
} from "@carbon/react/icons"
import React, { ComponentProps, useEffect } from "react"

import "../../index.scss"
import {
	C3NavigationNavBarProps,
	C3NavigationProps,
	C3NavigationSideBarBaseProps,
} from "./c3-navigation.types"

/**
 * UI SHELL
 * Docs: https://react.carbondesignsystem.com/?path=/story/components-ui-shell--fixed-side-nav
 */

type LinkProps = ComponentProps<any>

const C3NavigationAppBar = ({
	appBar,
	forwardRef,
	navbar,
}: C3NavigationProps): JSX.Element => {
	return (
		<SideNav
			aria-label={appBar.ariaLabel}
			expanded={appBar.isOpen}
			isPersistent={false}
			style={{
				display: "grid",
				gridAutoFlow: "row",
				gridAutoRows: "max-content 1fr",
				borderRight: appBar.isOpen
					? "1px solid var(--cds-border-subtle)"
					: undefined,
			}}
		>
			<SideNavItems>
				{navbar.elements.length > 0 && (
					<HeaderSideNavItems hasDivider={true}>
						{navbar.elements.map((element) => (
							<HeaderMenuItem<LinkProps>
								key={element.key}
								element={forwardRef}
								isCurrentPage={element.isCurrentPage}
							>
								{element.label}
							</HeaderMenuItem>
						))}
					</HeaderSideNavItems>
				)}
				{appBar.elements &&
					appBar.elements.map((element) => {
						if (element.subElements && element.subElements.length > 0) {
							return (
								<SideNavMenu large title={element.label}>
									{element.subElements.map((subElement) => (
										<SideNavMenuItem key={subElement.key} onClick={() => {}}>
											{subElement.label}
										</SideNavMenuItem>
									))}
								</SideNavMenu>
							)
						} else {
							return (
								<SideNavLink<LinkProps>
									element={forwardRef}
									key={element.key}
									large
									isActive={element.active}
								>
									{element.label}
								</SideNavLink>
							)
						}
					})}
			</SideNavItems>
		</SideNav>
	)
}

const C3NavigationSideBar = (props: {
	sideBar?: C3NavigationSideBarBaseProps
}): JSX.Element | null => {
	const { sideBar } = props
	if (sideBar?.elements && sideBar.elements.length > 0) {
		const activeOrganization = sideBar.customElements?.activeOrganization
		return (
			<HeaderPanel aria-label={sideBar.ariaLabel} expanded={sideBar.isOpen}>
				<Stack>
					{activeOrganization && (
						<>
							<div
								style={{
									padding: "1rem",
									paddingTop: "1.5rem",
									paddingBottom: ".5rem",
									display: "grid",
									gridAutoFlow: "column",
									gap: ".25rem",
								}}
							>
								<div
									style={{
										overflow: "hidden",
										display: "grid",
										gap: "4px",
									}}
								>
									<FormLabel>{activeOrganization.activeLabel}</FormLabel>
									<div
										className="textPrimary"
										style={{
											height: "20px", // Set minimum height to allow decenders to be rendered
											lineHeight: "20px",
											fontSize: "14px",
											textOverflow: "ellipsis",
											overflow: "hidden",
											whiteSpace: "nowrap",
										}}
										title={activeOrganization.orgName}
									>
										{activeOrganization.orgName}
									</div>
								</div>
								<Button
									size="md"
									kind="ghost"
									key="org-management"
									onClick={activeOrganization.action.onClick}
								>
									{activeOrganization.action.label}
								</Button>
							</div>
							{sideBar.elements && sideBar.elements.length > 0 && (
								<>
									<SwitcherDivider />

									<FormLabel
										style={{
											paddingTop: ".5rem",
											paddingLeft: "1rem",
											paddingBottom: ".25rem",
										}}
									>
										{activeOrganization.otherLabel}
									</FormLabel>
								</>
							)}
						</>
					)}
					{sideBar.elements.map((element, index) => (
						<Button
							key={element.key}
							style={
								index === 0 && !sideBar.customElements
									? { marginTop: "1.5rem" }
									: undefined
							}
							size="sm"
							kind={element.kind ?? "ghost"}
							className="cds--switcher__item"
							onClick={element.onClick}
						>
							{element.label}
						</Button>
					))}
				</Stack>
			</HeaderPanel>
		)
	}
	return null
}

export const C3Navigation = ({
	app,
	appBar,
	sideBar,
	forwardRef,
	navbar,
	orgSideBar,
	infoSideBar,
	userSideBar,
}: C3NavigationProps): JSX.Element => {
	return (
		<HeaderContainer
			render={({ isSideNavExpanded, onClickSideNavExpand }) => {
				sideBar.setOpen(isSideNavExpanded)
				const resizeHandler = () => {
					if (sideBar.isOpen) {
						onClickSideNavExpand()
					}
				}
				useEffect(() => {
					window.addEventListener("resize", resizeHandler)

					return () => {
						window.removeEventListener("resize", resizeHandler)
					}
				}, [])
				return (
					<Header aria-label="Camunda Console">
						<SkipToContent />
						<HeaderGlobalAction
							aria-label="App Switcher"
							isActive={appBar.isOpen}
							onClick={() => appBar.toggle()}
							tooltipAlignment="start"
						>
							{appBar.isOpen ? <Close size={20} /> : <SwitcherIcon size={20} />}
						</HeaderGlobalAction>

						<HeaderName<LinkProps> element={forwardRef} prefix={app.prefix}>
							<span>{app.name}</span>
						</HeaderName>
						<HeaderNavigation aria-label={app.ariaLabel}>
							{navbar.elements.map((element) => (
								<HeaderMenuItem<LinkProps>
									key={element.key}
									element={forwardRef}
									isCurrentPage={element.isCurrentPage}
									{...element.routeProps}
								>
									<span>{element.label}</span>
								</HeaderMenuItem>
							))}
						</HeaderNavigation>

						<HeaderGlobalBar>
							<div
								style={{
									display: "grid",
									gridAutoFlow: "column",
									gap: ".5rem",
									paddingRight: ".5rem",
								}}
							>
								{navbar.tags &&
									navbar.tags.length > 0 &&
									navbar.tags.map((tag) => (
										<Tag key={tag.key} className="headerTag" type={tag.color}>
											{tag.label}
										</Tag>
									))}
								{navbar.orgName && (
									<div
										className="bodyText"
										style={{
											fontSize: "14px",
											lineHeight: "3rem",
											textOverflow: "ellipsis",
											whiteSpace: "nowrap",
											overflow: "hidden",
											maxWidth: "150px",
										}}
									>
										{navbar.orgName}
									</div>
								)}
							</div>

							{orgSideBar && (
								<HeaderGlobalAction
									aria-label={orgSideBar.ariaLabel}
									onClick={orgSideBar.toggle}
									isActive={orgSideBar.isOpen}
								>
									<Enterprise size={20} />
								</HeaderGlobalAction>
							)}

							{infoSideBar && (
								<HeaderGlobalAction
									aria-label={infoSideBar.ariaLabel}
									onClick={infoSideBar.toggle}
									isActive={infoSideBar.isOpen}
								>
									<Help size={20} />
								</HeaderGlobalAction>
							)}

							{userSideBar && (
								<HeaderGlobalAction
									aria-label={userSideBar.ariaLabel}
									onClick={userSideBar.toggle}
									isActive={userSideBar.isOpen}
									tooltipAlignment="end"
								>
									<UserAvatar size={20} />
								</HeaderGlobalAction>
							)}
						</HeaderGlobalBar>

						{/* {organizations && (
							<HeaderPanel
								aria-label="Organizations Panel"
								expanded={orgSideBar?.isOpen}
							>
								<Stack>
									<div
										style={{
											padding: "1rem",
											paddingTop: "1.5rem",
											paddingBottom: ".5rem",
											display: "grid",
											gridAutoFlow: "column",
											gap: ".25rem",
										}}
									>
										<div
											style={{
												overflow: "hidden",
												display: "grid",
												gap: "4px",
											}}
										>
											<FormLabel>Active Organization</FormLabel>
											<div
												className="textPrimary"
												style={{
													height: "20px", // Set minimum height to allow decenders to be rendered
													lineHeight: "20px",
													fontSize: "14px",
													textOverflow: "ellipsis",
													overflow: "hidden",
													whiteSpace: "nowrap",
												}}
												title={organizations.active}
											>
												{organizations.active}
											</div>
										</div>
										<Button
											size="md"
											kind="ghost"
											key="org-management"
											onClick={organizations.manage.onClick}
										>
											{organizations.manage.label}
										</Button>
									</div>
									{organizations.other.length > 0 && (
										<>
											<SwitcherDivider />

											<FormLabel
												style={{
													paddingTop: ".5rem",
													paddingLeft: "1rem",
													paddingBottom: ".25rem",
												}}
											>
												Other Organizations
											</FormLabel>

											{organizations.other.map((org) => (
												<Button
													size="sm"
													kind="ghost"
													key={org.key}
													className="cds--switcher__item"
													onClick={org.onClick}
												>
													{org.label}
												</Button>
											))}
										</>
									)}
								</Stack>
							</HeaderPanel>
						)} */}

						{/* INFO SIDE BAR */}

						<C3NavigationSideBar sideBar={orgSideBar} />
						<C3NavigationSideBar sideBar={infoSideBar} />

						{/* {infoSideBar?.elements && infoSideBar.elements.length > 0 && (
							<HeaderPanel
								aria-label={infoSideBar.ariaLabel}
								expanded={infoSideBar.isOpen}
							>
								{infoSideBar.elements.map((element, index) => (
									<Button
										key={element.key}
										style={index === 0 ? { marginTop: "1.5rem" } : undefined}
										size="sm"
										kind="ghost"
										className="cds--switcher__item"
										onClick={element.onClick}
									>
										{element.label}
									</Button>
								))}
							</HeaderPanel>
						)} */}

						{/* USER SIDE BAR */}

						{userSideBar && (
							<HeaderPanel
								aria-label={userSideBar.ariaLabel}
								expanded={userSideBar.isOpen}
								style={{
									display: "grid",
									gridAutoFlow: "row",
									gridAutoRows: "max-content 1fr",
								}}
							>
								<Stack>
									<div
										style={{
											padding: "1rem",
											paddingTop: "1.5rem",
											paddingBottom: ".5rem",
										}}
									>
										<Stack gap={2}>
											<FormLabel>{userSideBar.profile.label}</FormLabel>
											<Stack>
												<div
													className="textPrimary"
													style={{ fontSize: "14px" }}
												>
													{userSideBar.profile.user.name}
												</div>
												<div
													className="textPrimary"
													style={{ fontSize: "12px" }}
												>
													{userSideBar.profile.user.email}
												</div>
											</Stack>
										</Stack>
									</div>

									{userSideBar.themeSelector && (
										<>
											<SwitcherDivider />

											<div
												style={{
													padding: ".5rem 1rem",
												}}
											>
												<RadioButtonGroup
													name="theme-radio-group"
													defaultSelected={app.theme}
													legendText="Theme"
													orientation="vertical"
													onChange={(newValue: string) => {
														userSideBar.themeSelector!.onChange(newValue)
													}}
												>
													<RadioButton
														id="light"
														labelText="Light"
														value="light"
													/>
													<RadioButton
														id="system"
														labelText="System"
														value="system"
													/>
													<RadioButton
														id="dark"
														labelText="Dark"
														value="dark"
													/>
												</RadioButtonGroup>
											</div>
										</>
									)}

									{userSideBar.stageToggle && (
										<>
											<SwitcherDivider />

											<div style={{ padding: ".5rem 1rem" }}>
												<Toggle
													size="sm"
													id="toggle-productionfeatures"
													defaultToggled={app.prodFeaturesEnables}
													onClick={userSideBar.stageToggle!.toggle}
													labelText="Simulate Production Features"
												/>
											</div>
										</>
									)}

									{userSideBar.actions.length > 0 && (
										<>
											<SwitcherDivider />
											{userSideBar.actions.map((action, index) => (
												<Button
													aria-label={action.ariaLabel}
													key={action.key}
													style={
														index === 0 ? { paddingTop: ".5rem" } : undefined
													}
													size="sm"
													kind={action.kind}
													className="cds--switcher__item"
													onClick={action.onClick}
												>
													{action.label}
												</Button>
											))}
										</>
									)}
								</Stack>

								{userSideBar.bottomActions.map((action) => (
									<Button
										kind={action.kind}
										key={action.key}
										className="cds--switcher__item"
										renderIcon={action.renderIcon}
										onClick={action.onClick}
										style={{ alignSelf: "end" }}
									>
										{action.label}
									</Button>
								))}
							</HeaderPanel>
						)}

						{/* *************************************************************
							KARL!!!!!
							HERE'S WHERE THE MAGIC HAPPENS
					************************************************************* */}

						<C3NavigationAppBar
							app={app}
							sideBar={sideBar}
							appBar={appBar}
							forwardRef={forwardRef}
							navbar={navbar}
						/>

						{/* *************************************************************
						 ************************************************************* */}
					</Header>
				)
			}}
		></HeaderContainer>
	)
}
