# Tiling Decision Tree Engine

A browser-based diagramming tool for creating decision trees with color-coded nodes and labeled connectors.

## Install & Run

```bash
npm install
node server.js
```

Open http://localhost:3000

## Controls

| Action | Effect |
|--------|--------|
| Click canvas | Create node |
| Double-click node | Edit text |
| Click node A, then node B | Connect A → B |
| Click selected connector | Edit label |
| Right-click node | Cycle color (idea → question → viable → non-viable) |
| Drag node | Move |
| Drag canvas | Pan |
| Scroll | Zoom |
| Delete / Backspace | Remove selected |
| Ctrl+Z / Ctrl+Shift+Z | Undo / Redo |
| H | Toggle shortcut HUD |

## Node Colors

- **White** — Idea (default)
- **Green** — Question
- **Dark blue** — Viable solution
- **Red** — Non-viable

## Toolbar

- **Pretty Layout** — spacious auto-layout
- **Compact Layout** — tight contour-based layout
- **Save / Save As** — saves to `figures/` directory as JSON
- **Load** — load a saved figure
- **Export SVG** — download standalone SVG
