<div align="center">

![Roamly — Collect moments, not tabs](assets/banner.svg)

# Roamly

**Collect moments, not tabs.**

A travel notebook for the little places, thoughtful itineraries, and budgets that make a trip your own.

[**Open the app →**](https://vertex-blip.github.io/roamly/) · [Explore the features](#a-little-space-for-what-matters) · [Run locally](#make-it-yours) · [Contribute](CONTRIBUTING.md)

![PWA](https://img.shields.io/badge/PWA-installable-267d80?style=flat-square) ![Offline](https://img.shields.io/badge/Offline-ready-54735a?style=flat-square) ![Dependencies](https://img.shields.io/badge/Runtime_dependencies-0-535d64?style=flat-square) [![License: MIT](https://img.shields.io/badge/License-MIT-c0a568?style=flat-square)](LICENSE)

</div>

![Roamly desktop workspace](docs/desktop.png)

## A little space for what matters

- Build a day-by-day itinerary with local times, destinations, notes, and booking status.
- Track planned costs in USD and see category totals.
- Keep an editable packing checklist with instant completion toggles.
- Review booked moments and upcoming stops from the travel dashboard.
- **Yours from the first click.** Explore the labeled sample workspace or start with an empty one.
- **At home on your phone.** Responsive navigation, original icons, and a standalone PWA window.
- **Ready without a connection.** Works offline after the initial successful online load.
- **Your data stays with you.** Browser-local storage, JSON backup and restore, no account or analytics.

<table><tr><td width="68%">

### Thoughtful by design

A distinct visual identity, generous spacing, crisp typography, and small interactions that serve a purpose. Every illustration and logo is an original SVG asset included in the repository. The custom brandmark uses layered, filled geometry with an install-ready silhouette. See [the identity guide](docs/BRAND.md). No external font or image service is required at runtime.

### Useful, not just a screenshot

The cards and controls are backed by working state. Create, edit, delete, navigate, and pick up where you left off. Use **Settings & backup** to export your workspace, import a backup, restore the sample, or start fresh.

</td><td width="32%"><img src="docs/mobile.png" alt="Roamly mobile workspace" width="280"></td></tr></table>

## Make it yours

Requires **Node.js 22+** only for the local server and tests. There are no packages to install and no build step.

```sh
git clone https://github.com/Vertex-blip/roamly.git
cd roamly
npm run dev
```

Open **http://127.0.0.1:4173**. Use HTTP rather than opening `index.html` directly: JavaScript modules and service workers need a proper origin.

```sh
npm test
```

The tests cover the product’s data contract, relevant calculations, text escaping, manifest scope, PNG dimensions, and precached files. GitHub Actions runs them on pushes and pull requests.

## Put it on your home screen

1. Open the [live app](https://vertex-blip.github.io/roamly/) online once.
2. Select **Install app**, or use your browser’s installation menu.
3. On iPhone/iPad, open in Safari and choose **Share → Add to Home Screen**.

The app uses its own logo for 192px, 512px, and maskable installation icons. Installation UI depends on browser support; offline caching and local persistence do not require installing.

## A small, understandable codebase

| File | Purpose |
| --- | --- |
| `product.js` | Product views, actions, schema, and example workspace |
| `app.js` | Navigation, editor, persistence, backup, installation |
| `core.js` / `ui.js` | Pure calculations and escaped UI helpers |
| `styles.css` | Responsive interface and visual identity |
| `manifest.webmanifest` / `sw.js` | Install identity and offline app shell |
| `tests/` | Product behavior and PWA asset checks |

Read [the architecture notes](docs/ARCHITECTURE.md) for data flow and update behavior.

## Publish your own

Fork this repository, enable **GitHub Pages → Deploy from a branch → main / root**, and update the repository links in `README.md`, `index.html`, and `app.js`. All app asset paths are relative, including the PWA scope, so project subpaths are supported. Increment the cache version in `sw.js` when releasing runtime changes.

## Honest boundaries

This is a focused, working **v1.1** for a single person and browser. There is no server, account, synchronization, encryption, or hidden external API. Data in local storage can be cleared by the browser or device, so export backups of important work. Sample records are illustrative. All itinerary costs use USD; there is no booking, maps, or currency-conversion API.

## What comes next

Potential improvements, not current features: additional languages, more keyboard shortcuts, and richer import/export formats. Thoughtful contributions are welcome; see [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE) · Built by [Vertex-blip](https://github.com/Vertex-blip).
