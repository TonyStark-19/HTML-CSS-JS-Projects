# 🤝 Contributing to HTML-CSS-JS Mini Projects Hub

Thank you for your interest in contributing! 🎉

This project is part of a **#100DaysOfCode** journey and aims to build a growing collection of clean, beginner-friendly **HTML, CSS, and JavaScript mini projects**.

We welcome creative tools, UI components, games, animations, and interactive projects 🚀

---

## 🚀 How to Contribute Your Mini Project

### 1️⃣ Fork the Repository

Click the **Fork** button at the top right of this repo.

---

### 2️⃣ Clone Your Fork

After forking the repository, copy the URL of **your fork** and clone it:

```bash
git clone https://github.com/YOUR-USERNAME/HTML-CSS-JS-Projects.git
cd HTML-CSS-JS-Projects
```

> Replace `YOUR-USERNAME` with your GitHub username.

---

### 3️⃣ Add Your Project

Go inside the `Projects` folder.

Create a new folder with your project name:

```bash
Projects/Your Project Name/
```

---

## 🏷 Naming Guidelines

- Use clear and readable project names  
- Use spaces or hyphens
- Make the name describe the UI or functionality

Good Examples

- `Quote Generator`
- `Glassmorphism Login Form`
- `Digital Clock`

Animated Sidebar Menu

- `Avoid`
- `project1`
- `test123`
- `abc`

---

### 📁 Project Structure Rules

Please follow these structure rules carefully:

### ✅ Inside your project folder:

```css
Your Project Name/
│
├── index.html      ← Main entry file (required)
│
├── Pages/          ← If your project has multiple pages
│   └── about.html
│
├── CSS/            ← All CSS files
│   └── style.css
│
├── JS/             ← All JavaScript files
│   └── script.js
│
└── Images/         ← Images used inside your project
```
---

### 🖼 Image Rules

- Add your project preview image inside:

```swift
Images/Projects/
```

- Use a clear file name, for example:

```css
quote-generator.png
digital-clock.png
animated-sidebar.png
```

---

## 📸 Preview Image Tips

- Use a clear screenshot of your project  
- Avoid blurry or cropped images  
- Recommended size: 800px width  
- Show the main UI clearly

---

## 🧹 Code Quality Requirements

Before submitting, make sure:

- Your code is clean and properly formatted
- Your project is responsive
- No unnecessary files
- Proper folder structure followed
- No console errors
- Works in modern browsers

---

## 🧠 JavaScript Project Rules

- Keep JS inside the JS folder
- Avoid large libraries unless necessary
- APIs must be free and public
- No API keys exposed

---

## 🧩 Add Your Project to the Website

Open:

```css
Page/Project.html
```

Inside the `project-grid` div, add your project card using this layout:

```html
<div class="project-card reveal">
    <div class="card-image">
        <img src="/Images/Projects/YOUR-PROJECT-IMAGE.png" alt="Project Name">
    </div>
    <div class="card-content">
        <h3>Your Project Name</h3>
        <div class="button-group">
            <a target="_blank"
                href="#"
                class="icon-btn" title="View Code">
                <i class="fa-solid fa-code"></i>
            </a>
            <a target="_blank" href="/Projects/Your Project Name/index.html" class="icon-btn" title="Live Demo">
                <i class="fa-solid fa-up-right-from-square"></i>
            </a>
        </div>
    </div>
</div>
```

⚠️ Note: You can leave the code link (`href="#"`) empty — the maintainer will update it after review.

---

### 4️⃣ Commit Your Changes

```bash
git add .
git commit -m "Added: Your Project Name"
```

---

### 5️⃣ Push to Your Fork

```bash
git push origin main
```

---

### 6️⃣ Create a Pull Request

Go to GitHub → Your fork → Click "Compare & Pull Request"
Add a short description of your project.

---

## 🎯 What Type of Projects Are Accepted?

- UI Components
- Forms
- Tools
- Mini Games
- Animations
- Layouts
- Cards
- Navigation Menus
- API-based mini apps
- Creative frontend experiments

---

Thank you for helping grow this project! 🚀 <br />
Happy Coding 💙
