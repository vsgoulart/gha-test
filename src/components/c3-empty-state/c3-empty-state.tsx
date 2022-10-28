import { Stack, Tile, Button, Link } from "@carbon/react"
import { C3EmptyStateProps } from "./c3-empty-state.types"
import React from "react"

export const C3EmptyState = ({
	icon,
	heading,
	introduction,
	button,
	link,
}: C3EmptyStateProps): JSX.Element => {
	return (
		<Tile
			style={{
				paddingLeft: "5rem",
				paddingTop: "3rem",
				paddingBottom: "3rem",
			}}
		>
			<Stack orientation="horizontal" gap={6}>
				<img src={icon.path} alt={icon.altText} />
				<Stack gap={3}>
					<h2>{heading}</h2>
					<Stack gap={6}>
						<p style={{ maxWidth: "400px" }}>{introduction}</p>

						<Stack gap={5}>
							{button && (
								<Button
									size="md"
									onClick={button.onClick}
									renderIcon={button.icon}
									disabled={button.disabled}
								>
									{button.label}
								</Button>
							)}

							{link && (
								<Link target="_blank" href={link.href} onClick={link.onClick}>
									{link.label}
								</Link>
							)}
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		</Tile>
	)
}
