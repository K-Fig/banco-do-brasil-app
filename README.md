# Banco do Brasil Web Application

A modern web application built with React, Tailwind CSS, and the Banco do Brasil Design System.

## Features

- 🏦 Full banking interface with Banco do Brasil branding
- 📱 Responsive design for desktop and mobile
- 🎨 Official Banco do Brasil Design System components
- ⚡ Built with Vite for fast development
- 🎯 TypeScript support
- 🧩 Comprehensive UI component library (shadcn/radix-ui)

## Tech Stack

- **React 18.3.1** - UI framework
- **Tailwind CSS 4.1** - Styling
- **Vite 6.3** - Build tool
- **Banco do Brasil Design System** - Official component library
- **Material UI** - Additional components
- **Lucide React** - Icons
- **Motion** - Animations

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

### Build

```bash
# Build for production
pnpm run build
```

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── App.tsx              # Main application component
│   │   └── components/
│   │       ├── ui/              # shadcn/ui components
│   │       └── figma/           # Figma-specific components
│   └── styles/
│       ├── index.css            # Main stylesheet
│       ├── theme.css            # Theme tokens
│       ├── fonts.css            # Font imports
│       └── globals.css          # Global styles
├── package.json
├── vite.config.ts
└── postcss.config.mjs
```

## Components

The application includes a comprehensive set of pre-built components:

- **Banco do Brasil DS**: Button, Card, Input, Alert, Navbar, Footer, LogoMark
- **UI Components**: Accordion, Dialog, Dropdown, Sheet, Tabs, Toast, and more
- **Form Components**: Input, Select, Checkbox, Radio, Switch
- **Data Display**: Table, Card, Badge, Avatar
- **Navigation**: Navbar, Breadcrumb, Pagination
- **Feedback**: Alert, Toast (Sonner), Progress

## Design System

This project uses the official `@figmaposaurus/banco-do-brasil-ds` package, which provides:

- Branded components following Banco do Brasil design guidelines
- Theme tokens (colors, typography, spacing)
- Pre-built layouts and patterns

## License

This project is for demonstration purposes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.