# VilStay — MERN Stack Application

A **production-ready MERN stack** starter with Tailwind CSS v3, JWT authentication, role-based access control, and a premium dark design system.

## 🏗️ Project Structure

```
vilstay/
├── backend/          # Node.js + Express + MongoDB API
│   ├── controllers/  # Route handlers
│   ├── middleware/   # JWT auth middleware
│   ├── models/       # Mongoose schemas
│   ├── routes/       # Express routers
│   ├── .env          # Environment variables
│   └── server.js     # Entry point
└── frontend/         # Vite + React + Tailwind CSS
    ├── src/
    │   ├── api/      # Axios instance
    │   ├── components/ # Navbar, etc.
    │   ├── context/  # AuthContext
    │   └── pages/    # Home, Login, Register, Dashboard, About
    └── tailwind.config.js
```

## ⚙️ Prerequisites

- **Node.js** v18+
- **MongoDB** (local or [MongoDB Atlas](https://cloud.mongodb.com))

## 🚀 Getting Started

### 1. Backend

```bash
cd backend
# Copy and edit .env
# Set MONGO_URI to your MongoDB connection string
npm run dev       # Starts on http://localhost:5000
```

### 2. Frontend

```bash
cd frontend
npm run dev       # Starts on http://localhost:5173
```

## 🔑 Environment Variables (backend/.env)

| Variable    | Description                        |
|-------------|------------------------------------|
| `PORT`      | Server port (default: 5000)        |
| `MONGO_URI` | MongoDB connection string          |
| `JWT_SECRET`| Secret key for JWT signing         |
| `NODE_ENV`  | `development` or `production`      |

## 📡 API Endpoints

| Method | Endpoint              | Auth | Description         |
|--------|-----------------------|------|---------------------|
| POST   | `/api/auth/register`  | ❌   | Register user       |
| POST   | `/api/auth/login`     | ❌   | Login user          |
| GET    | `/api/auth/me`        | ✅   | Get own profile     |
| GET    | `/api/users`          | Admin| List all users      |
| GET    | `/api/users/:id`      | ✅   | Get user by ID      |
| PUT    | `/api/users/:id`      | ✅   | Update user         |
| DELETE | `/api/users/:id`      | Admin| Delete user         |

## 🛠️ Tech Stack

- **MongoDB** — NoSQL database
- **Express.js** — REST API framework
- **React 19 + Vite** — Frontend
- **Node.js** — Runtime
- **Tailwind CSS v3** — Utility-first styling
- **JWT + bcryptjs** — Authentication
- **react-router-dom v7** — Client-side routing
- **react-hot-toast** — Notifications
- **lucide-react** — Icons
