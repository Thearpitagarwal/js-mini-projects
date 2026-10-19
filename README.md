# 🚀 webdev-projects

A collection of mini web development projects built while learning **HTML, CSS, and JavaScript** — covering frontend apps, Node.js backends, CLI tools, and CSS fundamentals.

---

## 📁 Projects

### 🛒 [ecommerce/](ecommerce/)
A simple **shopping cart** built with vanilla JS. Products are rendered dynamically, users can add/remove items, and cart state persists via `localStorage`. Includes checkout functionality that clears the cart.

**Tech:** HTML · CSS · JavaScript (DOM, localStorage)

---

### 🌦️ [weather/](weather/)
A **weather app** that fetches real-time weather data from the [OpenWeatherMap API](https://openweathermap.org/). Enter a city name and get the temperature (°C) and weather description.

**Tech:** HTML · CSS · JavaScript (Fetch API, async/await)

---

### ✅ [todo-app/](todo-app/)
A dark-themed **To-Do List** web app. Add tasks, mark them as completed (with strikethrough), or delete them. Tasks are saved to `localStorage` so they survive page refreshes.

**Tech:** HTML · CSS · JavaScript (DOM, localStorage)

---

### 📝 [todo/](todo/)
A **CLI-based task manager** built with Node.js. Tasks are stored in a local JSON file. Supports adding, listing, and removing tasks from the terminal.

```bash
node todo.js add "Buy groceries"
node todo.js list
node todo.js remove 1
```

**Tech:** Node.js (fs, process.argv)

---

### 📊 [Logger/](Logger/)
An **event logger** using Node.js `EventEmitter`. Extends `EventEmitter` to create a custom `Logger` class that writes timestamped messages to `eventLog.txt`. Also logs system memory usage every 3 seconds.

**Tech:** Node.js (events, fs, os, timers)

---

### 🖥️ [nginx-server/](nginx-server/)
A **bare-bones HTTP server** built from scratch using Node.js `http` module — no Express, no frameworks. Serves static HTML files with proper MIME types and handles 404 errors.

**Tech:** Node.js (http, fs, path)

---

### 📚 [notes/](notes/)
Interactive **CSS reference pages** with live examples covering:
- **Box Model** — `content-box` vs `border-box`, inline vs block elements
- **Selectors** — universal, type, class, ID, attribute, pseudo-class, pseudo-element, combinators
- **CSS Grid** — template areas, auto-fit/minmax, nested grids, alignment
- **Responsive Design** — media queries and breakpoints with color-changing demo

**Tech:** HTML · CSS

---

## 🛠 Tech Stack

| Category | Technologies |
|----------|-------------|
| Frontend | HTML5, CSS3, JavaScript (ES6+) |
| Backend  | Node.js |
| APIs     | OpenWeatherMap |
| Storage  | localStorage, JSON file |

---

## ⚡ Getting Started

**Frontend projects** (`ecommerce`, `todo-app`, `weather`) — just open `index.html` in a browser.

**Node.js projects** (`todo`, `Logger`, `nginx-server`) — run with Node:
```bash
cd <project-folder>
node <entry-file>.js
```

---

## 📄 License

Open source — use however you like.