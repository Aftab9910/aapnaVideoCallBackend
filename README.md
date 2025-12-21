<<<<<<< HEAD
# Backend – Aapna Video Call App

This is the **backend server** for the Aapna Video Call application. It handles API requests, socket connections, and database interactions.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- Socket.io (for real-time communication)
- MongoDB (Database)
- Mongoose
- CORS

---

## 📂 Folder Structure

```
server/
│── controllers/
│── routes/
│── models/
│── config/
│── utils/
│── index.js / server.js
│── package.json
│── README.md
```

---

## ⚙️ Prerequisites

Make sure you have installed:

- Node.js (v16 or higher)
- npm
- MongoDB (Atlas or local)

---

## 🔐 Environment Variables

Create a `.env` file in the backend root folder:

```
PORT=4000
MONGO_URI=your_mongodb_connection_string
```

> ⚠️ Do not push `.env` file to GitHub

---

## 🛠️ Installation

Clone the repository and install dependencies:

```bash
npm install
```

---

## ▶️ Run the Backend Server

### Development mode

```bash
npm run dev
```

### Production mode

```bash
npm start
```

Server will run on:

```
http://localhost:4000/
```

---

## 🔌 API Features

- User connection handling
- Real-time socket communication
- Secure API endpoints
- MongoDB data storage

---

## 🧪 Scripts

- `npm start` – Start server
- `npm run dev` – Start server with nodemon

---

## 🐞 Common Issues

- **MongoDB not connecting**: Check `MONGO_URI`
- **Port already in use**: Change PORT in `.env`
- **CORS error**: Verify frontend URL in CORS config

---

## 📌 Notes

- Make sure frontend is running before testing sockets
- Use Postman to test APIs if needed

---

## 👤 Author

**Aftab Ansari**

---

## 📄 License

This project is for educational and learning purposes.
=======
# aapnaVideoCallBackend
>>>>>>> f52d73ae7ab2ba0d8b5dea48e2bd217d78ab8346
