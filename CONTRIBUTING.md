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

## 📁 Project Structure Rules

Please follow these structure rules carefully.

---

### ✅ Inside your project folder:

**1. For a single CSS and JavaScript file, keep them in the root directory.** Do not create separate `css/` or `js/` folders unless multiple files are required.

```text
Your Project Name/
│
├── index.html      ← Main entry file (required)
├── style.css       ← Single CSS file
├── script.js       ← Single JavaScript file
│
├── Pages/          ← If your project has multiple pages
│   └── about.html
│
└── Images/         ← Images used inside your project
```
---

**2. If your project requires multiple CSS or JavaScript files, create the respective folders.**

```text
Your Project Name/
│
├── index.html      ← Main entry file (required)
│
├── Pages/          ← If your project has multiple pages
│   └── about.html
│
├── css/            ← Create only if multiple CSS files are needed
│   ├── style.css
│   └── responsive.css
│
├── js/             ← Create only if multiple JavaScript files are needed
│   ├── script.js
│   └── validation.js
│
└── Images/         ← Images used inside your project
```
---

### 📌 Important Rules

- **`index.html` is mandatory** and must be present in the project root.
- **Single CSS file:** Keep `style.css` in the root directory.
- **Single JavaScript file:** Keep `script.js` in the root directory.
- **Multiple CSS files:** Create a `css/` folder and place all CSS files inside it.
- **Multiple JavaScript files:** Create a `js/` folder and place all JavaScript files inside it.
- **Pages folder:** Create `Pages/` only when the project contains multiple HTML pages.
- **Images folder:** Store project images in the `Images/` folder.
- **Avoid unnecessary folders:** Keep the project structure simple, clean, and organized according to the actual requirements.
---

## 🖼 Image Rules

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


## 📝 README.md Update Rule

- After creating your project, add an entry for it to the project table in the main `README.md` file.
- Follow the existing table format and maintain the correct numbering sequence.
- Include the project number, project name, and a short description.

**Example:**

| No. | Project Name | Description |
|---:|---|---|
| 25 | Word Counter | A simple word counter |

**Important:** Do not
forget to update `README.md` whenever you add a new project. Ensure the project name and description are clear, concise, and consistent with the existing entries.

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
