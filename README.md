# Sonu Kumar — MERN Stack Portfolio

A full-stack portfolio website built with the **MERN stack** (MongoDB, Express, React, Node.js).

## 🗂 Project Structure

```
portfolio/
├── client/          # React frontend (Vite)
│   └── src/
│       ├── components/   # Navbar, Hero, About, Skills, Projects, Contact, Footer
│       ├── hooks/        # useScrollReveal
│       ├── api.js        # Axios instance
│       └── App.jsx
├── server/          # Node.js + Express backend
│   ├── models/      # Contact.js, Project.js  (Mongoose)
│   ├── routes/      # contact.js, projects.js
│   └── index.js
└── package.json     # Root — runs both with concurrently
```

---

## ⚡ Quick Start (Local Development)

### 1. Clone & Install

```bash
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio
npm run install:all
```

### 2. Setup Backend Environment

```bash
cd server
cp .env.example .env
```

Edit `server/.env`:
```
PORT=5000
MONGO_URI=mongodb+srv://<user>:<pass>@cluster0.xxxxx.mongodb.net/portfolio
NODE_ENV=development
```

### 3. Run Both (Frontend + Backend)

From the **root** folder:
```bash
npm run dev
```

- React runs at → http://localhost:5173
- Express API runs at → http://localhost:5000

---

## 🌍 Free Deployment Guide

### Frontend → Vercel (Free)

1. Push your code to GitHub
2. Go to https://vercel.com → New Project → Import your repo
3. Set **Root Directory** to `client`
4. Set **Build Command** to `npm run build`
5. Set **Output Directory** to `dist`
6. Deploy! ✅

### Backend → Render (Free)

1. Go to https://render.com → New Web Service
2. Connect your GitHub repo
3. Set **Root Directory** to `server`
4. Set **Build Command** to `npm install`
5. Set **Start Command** to `node index.js`
6. Add Environment Variables:
   - `MONGO_URI` = your MongoDB Atlas URI
   - `NODE_ENV` = production
7. Deploy! ✅

### Database → MongoDB Atlas (Free)

1. Go to https://cloud.mongodb.com
2. Create a free **M0 cluster**
3. Create a database user
4. Whitelist IP: `0.0.0.0/0` (Allow All)
5. Copy your connection string into `MONGO_URI`

### After Deploy — Update CORS

In `server/index.js`, update the `origin` to your Vercel URL:
```js
origin: 'https://your-portfolio.vercel.app'
```

---

## ✏️ Customization Checklist

- [ ] `client/src/components/Hero.jsx` — update name, role, bio
- [ ] `client/src/components/About.jsx` — update about text
- [ ] `client/src/components/Skills.jsx` — add/remove skill chips
- [ ] `client/src/components/Contact.jsx` — update social links and email
- [ ] `server/routes/projects.js` — update `defaultProjects` array with your real projects
- [ ] `server/.env` — add your MongoDB URI

---

## 🛠 Tech Stack

| Layer    | Technology              |
|----------|-------------------------|
| Frontend | React 18, Vite, CSS Modules |
| Backend  | Node.js, Express        |
| Database | MongoDB, Mongoose       |
| Fonts    | Syne, DM Sans (Google Fonts) |
| HTTP     | Axios                   |
| Deploy   | Vercel + Render + MongoDB Atlas |
