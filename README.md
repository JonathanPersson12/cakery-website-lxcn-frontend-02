# Sweet Bliss Cakery Website

Welcome to the **Sweet Bliss Cakery** website repository! 
This project is a responsive and visually appealing website for a fictional bakery that specializes in cupcakes and wedding cakes. 
The website showcases the bakery's products, provides information about the business, and allows customers to contact the bakery.

## Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Pages Overview](#pages-overview)
- [Credits](#credits)

---

## Features

- **Responsive Design**: The website is fully responsive and works seamlessly on desktop, tablet, and mobile devices.
- **Dynamic Components**: The navbar and footer are dynamically loaded across all pages using JavaScript.
- **Product Showcase**: Displays a gallery of cupcakes and wedding cakes with descriptions, prices, and "Buy Now" buttons.
- **Contact Form**: A functional contact form for customers to send inquiries.
- **Google Maps Integration**: Displays the bakery's location on a map.
- **Social Media Links**: Links to the bakery's social media profiles.

---

## Folder Structure
'''
cakery-website-lxcn-frontend-02/
├── index.html                # Main homepage of the website
├── assets/                   # Contains all static assets (images, icons, scripts)
│   ├── images/               # All image files (cupcakes, wedding cakes, logo, etc.)
│   ├── icons/                # Social media icons or custom SVG icons
│   └── js/                   # General JavaScript files
│       └── dynamicLoader.js  # Script to dynamically load components like navbar/footer
├── components/               # Reusable layout components used across pages
│   ├── navbar/
│   │   ├── navbar.html       # HTML structure of the website navigation bar
│   │   ├── navbar.css        # Styling for the navbar
│   │   └── hamburgermenu.js  # JavaScript for responsive mobile menu toggle
│   └── footer/
│       ├── footer.html       # HTML structure of the website footer
│       └── footer.css        # Styling for the footer
├── css/                      # Page-specific and global stylesheets
│   ├── main.css              # Main global stylesheet for base styles (fonts, layout, etc.)
│   ├── about.css             # Styles specific to the About page
│   ├── contact.css           # Styles specific to the Contact page
│   ├── cupcakes.css          # Styles specific to the Cupcakes product page
│   ├── products.css          # Styles for a general products or shop page
│   └── wedding-cakes.css     # Styles specific to the Wedding Cakes page
├── pages/                    # All internal or sub-pages of the site
│   ├── about.html            # About Us page content
│   ├── contact.html          # Contact form and details page
│   ├── cupcakes.html         # Product listing for cupcakes
│   ├── products.html         # General product/shop overview page
│   └── wedding-cakes.html    # Product listing for wedding cakes
'''

---

## Technologies Used

- **HTML5**: For structuring the content.
- **CSS3**: For styling and layout, including responsive design.
- **JavaScript**: For dynamic loading of components and interactivity.
- **Font Awesome**: For icons used in the contact page.
- **Google Maps Embed API**: For displaying the bakery's location.

---

## Setup Instructions

1. Clone the repository:
   ```bash
   *git clone https://github.com/JonathanPersson12/cakery-website-lxcn-frontend-02.git*

2. Navigate to the project directory:
cd cakery-website-lxcn-frontend-02

3. Open Index.html in your browser to view the website.

Pages Overview
1. Homepage (Index.html)
Features a hero section with a welcome message and a call-to-action button.
Highlights featured products (cupcakes and wedding cakes).
Includes an "About Us" section with a link to the detailed About page.

2. Products Page (pages/products.html)
Displays a grid of featured cupcakes and wedding cakes with descriptions and prices.

3. Cupcakes Page (pages/cupcakes.html)
Showcases a gallery of cupcakes with detailed descriptions and prices.

4. Wedding Cakes Page (pages/wedding cakes.html)
Displays a gallery of wedding cakes with detailed descriptions and prices.

5. About Page (pages/about.html)
Provides information about the bakery's mission, history, values, and team.

6. Contact Page (pages/contact.html)
Includes a contact form for inquiries and displays the bakery's location on a map.

Credits
Images: All images are stored in the Bilder/ folder.
Icons: Social media icons are sourced from Font Awesome.
Design Inspiration: Custom design inspired by modern bakery websites.
