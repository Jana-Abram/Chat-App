# 💬 Full-Stack Real-Time Chat Application

A modern full-stack chat application with secure authentication, real-time messaging, image sharing, email notifications, and a responsive user interface.

---

## ✨ Features

* 🔐 JWT-based authentication
* 💬 Real-time messaging with Socket.io
* 🟢 Online and offline user status
* 🖼️ Image sharing with Cloudinary
* 🔔 Notification and typing sounds (toggleable)
* 📧 Welcome emails after registration
* 🚦 API rate limiting with Arcjet
* 📱 Responsive interface built with React and Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend

* React
* Tailwind CSS
* DaisyUI
* Zustand
* Axios
* Socket.io Client

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Socket.io
* JWT Authentication
* Cloudinary
* Resend
* Arcjet

---

## 🚀 Live Demo

Coming Soon

---

## ⚙️ Environment Variables

### Backend (`/backend/.env`)

```env
PORT=3000
MONGO_URI=your_mongo_uri_here

NODE_ENV=development

JWT_SECRET=your_jwt_secret

RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=your_email_from_address
EMAIL_FROM_NAME=your_email_from_name

CLIENT_URL=http://localhost:5173

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development
```

---

## 📦 Installation

```bash
cd backend
npm install
```

Install frontend dependencies

```bash
cd ../frontend
npm install
```

---

## ▶️ Running the Project

Start the backend

```bash
cd backend
npm run dev
```

Start the frontend

```bash
cd frontend
npm run dev
```

---


