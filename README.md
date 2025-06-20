# 🧑‍💻 Juan Martín Sánchez – Developer Portfolio

Welcome to my **personal portfolio website**. This project showcases who I am, the technologies I work with, and the projects I’ve built as a Fullstack Developer focused on web and mobile development.

Visit it live at: [www.palmxl.cv](https://www.palmxl.cv)

---

## 🚀 Tech Stack

This project is built using:

- **HTML5**, **CSS3**, **JavaScript (ES6+)**
- **Tailwind CSS** for utility-first, responsive styling
- **Font Awesome & Lucide Icons** for UI icons
- **Lottie Animations** for interactive visuals
- **GitHub Pages** for free hosting
- **GitHub Actions** for continuous deployment (CI/CD)

---

## 🧩 Project Structure

```
📦 Portafolio-Web
├── assets/
│   └── icons/, img/, pdf/
├── scripts/
│   └── data/, hero.js, navbar.js, projects.js, form.js
├── styles/
│   └── styles.css, output.css
├── .github/workflows/
│   └── deploy.yml
├── index.html
├── tailwind.config.js
└── postcss.config.js
```

---

## 📄 Features

- 🔥 **Animated Hero Section** with intro and CTA
- 🧠 **About Me Section** with Lottie integration
- 💼 **Projects Section** dynamically rendered from a JS object
- 📂 **Project Modal** with GitHub link and smooth animation
- 🛠 **Skills Section** with icon-based toolset and hover effects
- ⚙️ **Services Section** with AOS animations and card interactivity
- 💬 **Contact Form** powered by Formspree with feedback messages
- 🌙 **Dark Theme** design with animated gradients
- 🔄 **Responsive** layout for mobile and desktop
- 🚀 **Custom domain** setup via DNS and HTTPS

---

## 🛠 Local Setup

1. **Clone the repo**

```bash
git clone https://github.com/Palmxl/Portafolio-web.git
cd Portafolio-web
```

2. **Install dependencies**

```bash
npm install
```

3. **Run Tailwind CLI**

```bash
npx tailwindcss -i ./styles/styles.css -o ./styles/output.css --watch
```

4. Open `index.html` in your browser or use a live server like VSCode Live Server.

---

## ⚙️ GitHub Actions

A GitHub Actions workflow is included to automatically build the Tailwind CSS and deploy the portfolio to GitHub Pages every time you push to the `main` branch.

Path: `.github/workflows/deploy.yml`

---

## ✉️ Contact

Feel free to reach me through the contact form or on:

- [GitHub](https://github.com/Palmxl)
- [LinkedIn](https://www.linkedin.com/in/juan-martín-sánchez-0769a133a)

---

⭐ If you like the project, feel free to **star** the repo!
