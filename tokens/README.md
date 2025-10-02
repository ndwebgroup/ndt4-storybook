## Purpose

tokens is the single source of truth for NDT4 design tokens. Storybook and any downstream packages should be generated from these tokens.

## Naming

Prefer semantic tokens in component CSS and docs. Palette tokens exist for brand reference but should not be used directly in components.

## Modes

Light is default. Dark overrides live under $extensions.modes.dark. Storybook should toggle themes by setting data-theme="dark" on the preview root.

## Governance

Changes to semantic tokens require a changelog note.