# E-Salax Web

Full-stack web application built with React, TypeScript, Vite (frontend) and Node.js, Express, TypeScript (backend).

## Project Structure

```
├── frontend/     # React + TypeScript + Vite
├── backend/      # Node.js + Express + TypeScript
├── package.json  # Root workspace configuration
└── README.md
```

## Getting Started

### Install Dependencies

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend && npm install && cd ..

# Install backend dependencies
cd backend && npm install && cd ..
```

### Backend Environment Setup

1. Copy the example environment file:
```bash
cd backend
cp env.example .env
```

2. Edit `.env` and add your email credentials:
   - `SMTP_USER`: Your Gmail address
   - `SMTP_PASS`: Gmail App Password (generate at https://myaccount.google.com/apppasswords)
   - `CONTACT_EMAIL`: Daaahir8@gmail.com (already set)

### Development

Start both servers:

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

- Frontend: http://localhost:5173
- Backend: http://localhost:5000

### Build

```bash
# Build frontend
cd frontend && npm run build

# Build backend
cd backend && npm run build
```

## Tech Stack

### Frontend
- React
- TypeScript
- Vite

### Backend
- Node.js
- Express
- TypeScript

### Package Manager
- npm
