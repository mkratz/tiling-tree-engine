Build a minimal Node.js diagramming tool for creating tiling decision trees.

Stack: Express server serving a single HTML page with a vanilla SVG canvas. No frontend frameworks, no heavy diagramming libraries.

Core features only:

- Click empty canvas to create a rectangular node with placeholder text
- Double-click any node to edit its text inline
- Click a node then click another node to draw a directed connector (arrow) between them
- Click a connector to add/edit a label on it (for branch conditions like "Software" or "Hardware")
- Click to select a node or connector, Delete key to remove it
- Nodes are draggable; connectors follow their source/destination nodes
- Auto-layout button that arranges nodes into a clean top-down tree hierarchy based on connector relationships (use Reingold-Tilford algorithm)
- Curved connectors using cubic bezier curves with a small arrowhead at the destination
- Save layout to a local JSON file (persists node positions, text, connections, and styles)
- Load layout from a previously saved JSON file
- Export to SVG button that downloads the current diagram as a clean standalone SVG file

Visual style:
- Two node styles: outlined (default) and filled/dark — toggled by right-clicking a node
- Clean, minimal aesthetic: thin strokes, small readable font, neutral colors
- toggelable HUD showing controls 

Explicitly out of scope — do not implement:

- Undo/redo
- Snap to grid
- Multiple selection

Output: A single server.js and a single index.html. Run with node server.js, open localhost:3000.