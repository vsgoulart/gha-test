# Camunda Composite Components

Storybook: [Link](https://shiny-sniffle-e6e1a28f.pages.github.io/)

## Dev

```bash
# install
# yarn

# start storybook
yarn storybook

# build components
yarn build
```

## Release

Bump version in `package.json` and create a [new release](https://github.com/camunda-cloud/camunda-composite-components/releases/new). This will start a github action to publish the package to the github package repository.

Pushing to `main` will update the storybook available under [github page](https://shiny-sniffle-e6e1a28f.pages.github.io/).

## Usage

Example for navbar:

```tsx
import { C3NavigationElementProps } from "@camunda-cloud/camunda-composite-components"

// ...

return (
	<C3Navigation
		app={{
			ariaLabel: "Camunda Console",
			name: "Console",
			prefix: "Camunda",
			routeProps: { route: routes.home, router: router },
		}}
		// ...
	/>
)
```
