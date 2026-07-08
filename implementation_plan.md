# Convert UI to Production-Ready Next.js Project

The goal is to convert the retrieved `ddf6c8870e7848c2ab4fa49055ee4a6c` screen UI design from the Stitch project (README.md) into a production-ready React project with Next.js (App Router), TypeScript, Tailwind CSS, and shadcn/ui.

## Proposed Architecture

1.  **Project Initialization**
    *   Initialize Next.js App Router project in the current directory (`d:\projects\osborn .3`).
    *   Install and configure Tailwind CSS and shadcn/ui.
2.  **Folder Structure**
    *   `/app`: Route pages and layouts.
    *   `/components/ui`: Base reusable UI components (shadcn/ui primitives, Cards, Grids).
    *   `/components/sections`: Assembled layout sections (Nav, Hero, Feature Grid, CTA, Footer).
3.  **Component Design Strategy**
    *   `Card`: Reusable component with `surface-container-low` styling, hover borders, and `liquid-shadow`.
    *   `BentoGrid` / `BentoCard`: CSS Grid-based structure utilizing `col-span` and `row-span` for desktop and mobile breakpoints.
    *   `Section`: Container component to keep consistent horizontal padding (`px-8 max-w-7xl mx-auto`) and vertical spacing (`py-24`, `py-32`).

## Design Fidelity Details
*   **Colors**: Implement the provided design tokens in `tailwind.config.ts`, mapping custom colors (`primary`, `surface`, `on-surface`, `inverse-surface`, etc.) to semantic variables.
*   **Typography**: Integrate Inter and Lexend Google Fonts as defined, and assign `font-headline` and `font-body`.
*   **Layouts**: Strictly mirror CSS flex and grid declarations, ensuring asymmetric "blueprint" bento grids remain pixel-perfect.
*   **Aesthetics**: Follow the "Technical Brutalism" constraints, using 0px borders/radii, high contrast monochrome scales, and avoiding soft shadows where explicitly instructed.

## User Review Required
> [!IMPORTANT]
> Since the goal explicitly states "No explanations, only clean code" and "Provide Full component code, File names, Folder structure", do you want me to:
> 1. Directly scaffold and commit these files/folders to the `d:\projects\osborn .3` directory?
> 2. Just output the clean text blocks inside our conversation chat window?

Please review and approve so I can begin generating the exact component code!
