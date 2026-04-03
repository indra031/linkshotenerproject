# UI Components Guidelines

This document defines the standards for building UI in this project.

## Core Principle

**ALL UI elements must use [shadcn/ui](https://ui.shadcn.com/) components.**

- **DO NOT** create custom UI components from scratch
- **DO NOT** install other component libraries (e.g. MUI, Chakra, Radix primitives directly)
- **ALWAYS** use an existing shadcn/ui component if one exists for your use case

## Adding Components

Use the shadcn CLI to add components:

```bash
npx shadcn@latest add <component-name>
```

Components are installed into `components/ui/`. Do not modify generated files unless absolutely necessary.

## Usage

Import components from the `components/ui/` directory:

```typescript
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
```

## Available Components

Check `components/ui/` for currently installed components. If a needed component isn't there, add it via the CLI — do not build a custom alternative.

## Styling

- Use Tailwind CSS utility classes for layout and spacing
- Use shadcn/ui's built-in variants (e.g. `variant="outline"`) before adding custom styles
- Do not override shadcn component internals with arbitrary CSS unless there is no other option
