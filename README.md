# Games Home Page

A simple, responsive landing page that serves as the central hub for accessing a variety of web-based games. The project offers a modern design with a dark mode toggle, smooth animations, and mobile-friendly layouts. All the games are accessible via clickable tiles that link to individual game projects hosted online.

---

## Installation

1. **Clone the Repository**  
   Run the following command to clone the project locally:
   > git clone https://github.com/ShaneMarusczak/Games-Home-Page.git

2. **Navigate to the Project Folder**  
   > cd Games-Home-Page

3. **Open in Browser**  
   You can directly open the `index.html` file in your preferred web browser. No additional server setup is required for static hosting.

---

## Usage Guide

- **Navigating the Page**:  
  The homepage displays clickable boxes for each game. Simply click a box (e.g., Tanks, Battleship, Space Invaders) to navigate to the respective game page.

- **Dark Mode Toggle**:  
  Click on the "Dark Mode" element at the bottom of the page to switch between light and dark themes. The choice is stored in a cookie (“darkMode”) and persists for one day.

- **Interactive Effects**:  
  - Hover over a game tile to see a subtle shadow effect.
  - Hover over the GitHub icon at the top-right to see a bounce animation.

---

## File and Structure Overview

- **index.html**  
  The main HTML file that structures the homepage, includes meta tags, and links to the CSS and JavaScript files.

- **css/**  
  - `style.css`: Contains the unminified CSS styling for page elements such as fonts, layout, animations, and responsive design.
  - `style.min.css`: The minified version of `style.css` used for production.

- **js/**  
  - `home.js`: The unminified JavaScript file controlling interactive features like dark mode toggling, hover effects, and cookie management.
  - `home.min.js`: The minified version of `home.js`.

- **images/**  
  Contains icons and other image assets, such as the GitHub icon used for external linking.

- **License File**  
  `LICENSE.md` details that this project is released into the public domain under the Unlicense.

---

## Configuration Details

- **Dark Mode Settings**:  
  The dark mode is controlled via a CSS class (`darkBackground`) on the `html` element and is toggled using a cookie named "darkMode". The cookie is set for a duration of one day.

- **Responsive Design**:  
  CSS media queries ensure that elements adjust (e.g., tile widths) appropriately on screens up to 1220px wide.

- **Cookie Management**:  
  The JavaScript functions handle setting and retrieving cookies to remember users’ theme preferences.

- **External Dependencies**:  
  - Google Fonts: "Roboto Mono" and "Roboto" fonts are imported via `<link>` tags in the header.
  - Web manifest and favicons are set for proper device support.

---

## Contribution Guidelines

Contributions to this project are welcome! If you would like to suggest improvements, report issues, or submit pull requests, please follow standard GitHub workflows. For more details on contributing, see the [CONTRIBUTING.md](./CONTRIBUTING.md) file if available.

---

## License

This project is released into the public domain under the Unlicense. See the [LICENSE.md](./LICENSE.md) file for the full details.

---

Happy coding and enjoy gaming!
