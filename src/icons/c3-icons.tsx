import React from "react"
import { C3IconProps } from "./c3-icons.types"

export const C3AppMenuIcon = ({ size }: C3IconProps) => (
	<svg
		width={size}
		height={size}
		viewBox={`0 0 ${size} ${size}`}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill="#fff"
			fill-opacity="1"
			style={{ mixBlendMode: "multiply" }}
			d="M0 0h20v20H0z"
		/>
		<path
			d="M11.5 1h-3v3h3V1ZM4 1H1v3h3V1Zm15 0h-3v3h3V1Zm-7.5 7.5h-3v3h3v-3ZM4 8.5H1v3h3v-3Zm15 0h-3v3h3v-3ZM11.5 16h-3v3h3v-3ZM4 16H1v3h3v-3Zm15 0h-3v3h3v-3Z"
			fill="$icon-primary"
		/>
	</svg>
)
