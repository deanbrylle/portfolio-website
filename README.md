# Portfolio Website

This project is now a polished single-page portfolio for Dean Brylle Maguate, featuring a premium editorial aesthetic, responsive sections, project highlights, and a clean contact area.

## Project structure

```
portfolio-website
├── index.html          # Main portfolio landing page
├── css
│   └── styles.css      # Responsive styling and layout system
├── js
│   └── main.js         # Menu toggle and reveal-on-scroll interactions
├── assets
│   └── fonts/
│   └── icons/
├── sections/
│   ├── about.html      # Legacy about page
│   ├── projects.html   # Legacy projects page
│   └── contact.html    # Legacy contact page
├── README.md           # Project documentation
└── ...                 # Screenshot assets used in project cards
```

## Run locally

From this folder, you can start a static web server:

```bash
cd "C:/Users/Admin/Portfolio/portfolio-website"
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Customize content

- Update name, bio, and project details in `index.html`
- Adjust design tokens and spacing in `css/styles.css`
- Add or change animations in `js/main.js`

## Notes

The project uses the existing portfolio screenshots located in the parent `Portfolio` directory, so the page can showcase real design work immediately without requiring new assets.