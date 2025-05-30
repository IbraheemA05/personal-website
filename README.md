# Ibraheem's Cybersecurity Portfolio

A modern, responsive portfolio website showcasing cybersecurity projects, articles, and TryHackMe writeups.

## Features

- **Modern Design**: Dark-themed cybersecurity aesthetic with terminal animations
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Elements**: Animated terminal simulations, progress bars, and hover effects
- **Content Sections**:
  - Homepage with hero section and featured content
  - Projects showcase with detailed writeups
  - TryHackMe writeups section (coming soon)
  - Articles/blog section (coming soon)
  - Contact information and social links

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Fonts**: Google Fonts (Inter, Fira Code)
- **Icons**: Font Awesome 6
- **Design**: CSS Grid, Flexbox, CSS Variables
- **Animations**: CSS transitions and JavaScript

## Structure

```
├── index.html              # Homepage
├── styles.css              # Global stylesheet
├── script.js               # Interactive JavaScript
├── README.md               # Project documentation
└── posts/
    ├── projects/
    │   ├── index.html       # Projects listing
    │   ├── aws-security-audit.html
    │   └── multi-service-writeup.html
    ├── tryhackme/
    │   └── index.html       # TryHackMe section
    └── articles/
        └── index.html       # Articles section
```

## Local Development

1. Clone or download the repository
2. Open `index.html` in a web browser
3. Or serve locally using a simple HTTP server:

   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js (if you have http-server installed)
   npx http-server

   # PHP
   php -S localhost:8000
   ```

## GitHub Pages Deployment

To deploy this portfolio to GitHub Pages:

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Your site will be available at `https://yourusername.github.io/repository-name`

## Customization

### Colors

The color scheme is defined in CSS variables in `styles.css`:

```css
:root {
  --primary-color: #00ff88; /* Green accent */
  --secondary-color: #0066cc; /* Blue accent */
  --accent-color: #ff6b35; /* Orange accent */
  --background-dark: #0a0a0a; /* Main background */
  --background-medium: #1a1a1a; /* Card background */
  /* ... */
}
```

### Content

- Update personal information in `index.html`
- Add new projects in `posts/projects/`
- Add articles in `posts/articles/`
- Update social media links throughout the site

### Terminal Animation

Customize the terminal commands and outputs in `script.js`:

```javascript
const commands = ["your", "custom", "commands"];
const outputs = ["corresponding", "output", "text"];
```

## Contact Information

- **Email**: ademiloyealhanifibraheem@gmail.com
- **Twitter**: [@IbraheemA50](https://twitter.com/IbraheemA50)
- **LinkedIn**: [Ibraheem's Profile](https://linkedin.com/in/ibraheem)
- **GitHub**: [IbraheemA50](https://github.com/IbraheemA50)

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Ibraheem - Aspiring Cybersecurity Professional
