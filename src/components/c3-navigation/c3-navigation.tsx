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
	SkipToContent,
	Stack,
	SwitcherDivider,
	Tag,
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

/**
 * UI SHELL
 * Docs: https://react.carbondesignsystem.com/?path=/story/components-ui-shell--fixed-side-nav
 */

export interface C3NavigationProps {
	/**
	 * that's the title!
	 */
	app: {
		prefix: string
		name: string
		ariaLabel: string
		routeProps: any
	}
	appBar: {
		isOpen: boolean
		toggle: () => void
		setOpen: (isOpen: boolean) => void
	}
	sideBar: {
		isOpen: boolean
		toggle: () => void
		setOpen: (isOpen: boolean) => void
	}
	orgSideBar?: {
		ariaLabel?: string
		isOpen: boolean
		toggle: () => void
		setOpen: (isOpen: boolean) => void
	}
	infoSideBar?: {
		ariaLabel?: string
		isOpen: boolean
		toggle: () => void
		setOpen: (isOpen: boolean) => void
	}
	userSideBar?: {
		ariaLabel?: string
		isOpen: boolean
		toggle: () => void
		setOpen: (isOpen: boolean) => void
	}
	navbar: {
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

type LinkProps = ComponentProps<any>

export const C3Navigation = ({
	app,
	appBar,
	sideBar,
	forwardRef,
	navbar,
	organizations,
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
								{organizations && (
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
										{organizations.active}
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

						{organizations && (
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
						)}

						{/* <HeaderPanel
								aria-label="Info Panel"
								expanded={navbar.infoPanelIsOpen}
							>
								<Button
									style={{ marginTop: "1.5rem" }}
									size="sm"
									kind="ghost"
									className="cds--switcher__item"
									onClick={() => {
										events.send({
											id: `navBar:documentation:click`,
											message: `Navbar: documentation clicked`,
											level: "mixpanel",
										})
										window.open(EXTERNAL_LINKS.help.docsMain, "_blank")
										navbar.toggleInfoPanel()
									}}
								>
									{t("info.documentation")}
								</Button>

								<Button
									size="sm"
									kind="ghost"
									className="cds--switcher__item"
									onClick={() => {
										events.send({
											id: `navBar:feedback:click`,
											message: `Navbar: feedback clicked`,
											level: "mixpanel",
										})
										if (navbar.isEnterprise()) {
											window.open(EXTERNAL_LINKS.help.jira, "_blank")
										} else {
											window.open(EXTERNAL_LINKS.help.forum, "_blank")
										}
										navbar.toggleInfoPanel()
									}}
								>
									{t("info.feedbackAndSupport")}
								</Button>

								<Button
									size="sm"
									kind="ghost"
									className="cds--switcher__item"
									onClick={() => {
										events.send({
											id: `navBar:slack:click`,
											message: `Navbar: slack clicked`,
											level: "mixpanel",
										})
										window.open(EXTERNAL_LINKS.help.slack, "_blank")
										navbar.toggleInfoPanel()
									}}
								>
									{t("info.slackCommunityChannel")}
								</Button>
							</HeaderPanel>

							<HeaderPanel
								aria-label="Personal Panel"
								expanded={navbar.personalPanelIsOpen}
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
											<FormLabel>Profile</FormLabel>
											<Stack>
												<div
													className="textPrimary"
													style={{ fontSize: "14px" }}
												>
													{(auth.user as any).name}
												</div>
												<div
													className="textPrimary"
													style={{ fontSize: "12px" }}
												>
													{(auth.user as any).email}
												</div>
											</Stack>
										</Stack>
									</div>

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
											onChange={(newValue) => {
												app.updateTheme({
													theme: newValue as "light" | "dark" | "system",
													storeInSettings: true,
												})
											}}
										>
											<RadioButton id="light" labelText="Light" value="light" />
											<RadioButton
												id="system"
												labelText="System"
												value="system"
											/>
											<RadioButton id="dark" labelText="Dark" value="dark" />
										</RadioButtonGroup>
									</div>

									<SwitcherDivider />

									{api.visibilities.visibilities().features.prodStageToggle
										.visible ? (
										<>
											<div style={{ padding: ".5rem 1rem" }}>
												<Toggle
													size="sm"
													id="toggle-productionfeatures"
													defaultToggled={app.productionFeaturesEnabled}
													onClick={app.toggleProductionFeatures}
													labelText="Simulate Production Features"
												/>
											</div>
											<SwitcherDivider />
										</>
									) : null}

									<Button
										style={{ paddingTop: ".5rem" }}
										size="sm"
										kind="ghost"
										className="cds--switcher__item"
										onClick={() => Osano.openPanel()}
									>
										Cookie preferences
									</Button>

									<Button
										size="sm"
										kind="ghost"
										className="cds--switcher__item"
										onClick={() => {
											events.send({
												id: `navBar:terms:click`,
												message: `Navbar: terms clicked`,
												level: "mixpanel",
											})
											window.open(EXTERNAL_LINKS.help.terms, "_blank")
										}}
									>
										{t("info.termsOfUse")}
									</Button>

									<Button
										size="sm"
										kind="ghost"
										className="cds--switcher__item"
										onClick={() => {
											events.send({
												id: `navBar:privacy:click`,
												message: `Navbar: privacy clicked`,
												level: "mixpanel",
											})
											window.open(EXTERNAL_LINKS.help.privacy, "_blank")
										}}
									>
										{t("info.privacyPolicy")}
									</Button>

									<Button
										size="sm"
										kind="ghost"
										className="cds--switcher__item"
										onClick={() => {
											events.send({
												id: `navBar:imprint:click`,
												message: `Navbar: imprint clicked`,
												level: "mixpanel",
											})
											window.open(EXTERNAL_LINKS.help.imprint, "_blank")
										}}
									>
										{t("info.imprint")}
									</Button>

									<Button
										size="sm"
										kind="danger--ghost"
										className="cds--switcher__item"
										onClick={() => deleteAccount.open()}
									>
										{t("info.deleteAccount")}
									</Button>
								</Stack>

								<Button
									kind="ghost"
									key="logout"
									className="cds--switcher__item"
									renderIcon={ArrowRight}
									onClick={() => {
										auth.logout({ returnTo: window.location.origin })
									}}
									style={{ alignSelf: "end" }}
								>
									{t("settings.logOut")}
								</Button>
							</HeaderPanel> */}

						{/* *************************************************************
							KARL!!!!!
							HERE'S WHERE THE MAGIC HAPPENS
					************************************************************* */}

						{/* <SideNav
								aria-label="App Panel"
								expanded={navbar.appNavIsOpen}
								isPersistent={false}
								style={{
									display: "grid",
									gridAutoFlow: "row",
									gridAutoRows: "max-content 1fr",
									borderRight: navbar.appNavIsOpen
										? "1px solid var(--cds-border-subtle)"
										: undefined,
								}}
							>
								<SideNavItems>
									<HeaderSideNavItems hasDivider={true}>
										<HeaderMenuItem<LinkProps>
											element={ForwardRefLink}
											route={routes.home as any}
											router={router as any}
											isCurrentPage={
												router.currentRoute?.path === routes.dashboard.path
											}
										>
											{t("navItems.dashboard")}
										</HeaderMenuItem>
										<HeaderMenuItem<LinkProps>
											element={ForwardRefLink}
											route={routes.clusters as any}
											router={router as any}
											params={{ orgId }}
											isCurrentPage={router.currentRoute?.path.startsWith(
												routes.clusters.path,
											)}
										>
											{t("navItems.clusters")}
										</HeaderMenuItem>
									</HeaderSideNavItems>
									<SideNavLink<LinkProps>
										element={ForwardRefLink}
										route={routes.clusters as any}
										router={router as any}
										params={{ orgId }}
										large
										isActive
									>
										Console
									</SideNavLink>{" "}
									{api.visibilities.visibilities().navbar.webIde.visible &&
										renderApplicationMenuItem("modeler", orgId, t, "side")}
									{renderApplicationMenuItem(
										"operate",
										navbar.getClustersEligableForRendering(orgId, "operate"),
										t,
										"side",
									)}
									{renderApplicationMenuItem(
										"tasklist",
										navbar.getClustersEligableForRendering(orgId, "tasklist"),
										t,
										"side",
									)}
									{renderApplicationMenuItem(
										"optimize",
										navbar.getClustersEligableForRendering(orgId, "optimize"),
										t,
										"side",
									)}
								</SideNavItems>
							</SideNav> */}

						{/* *************************************************************
						 ************************************************************* */}
					</Header>
				)
			}}
		></HeaderContainer>
	)
}
