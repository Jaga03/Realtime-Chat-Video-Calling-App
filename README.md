# 💬 ChatzUp — Real-Time Chat & Video Calling App

![ChatzUp Banner](./screens/banner.png)

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project)  
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

ChatzUp is a modern, full-stack real-time chat and video calling application built with **React 19**, **Node.js**, **Express 5**, **MongoDB**, **Socket.IO**, and **WebRTC**. It allows users to exchange messages, share images, use customizable emojis, initiate audio/video calls with mute syncing, manage profiles, and enjoy real-time features like typing indicators and online presence.

---

## 📸 Screenshots

| Login & Signup | Chat Interface | Video Call | Emoji Picker |
| ---------------| ---------------|------------|--------------|
| ![Login Page](./screens/login-page.JPG) | ![Chat Page](./screens/chat-page.JPG) | ![Video Call](./screens/VideoCall.png) | ![Emoji Picker](./screens/emoji-picker.JPG) |

---

## ✨ Features

- 🔐 **User Authentication**: Secure login/signup with JWT and cookies.
- 💬 **Real-Time Messaging**: Instant messaging with Socket.IO, including message deletion.
- 📷 **Image Sharing**: Upload and compress images (up to 1MB, 1024px max) with preview and progress.
- 😂 **Emoji Support**: Emoji picker with Twitter style, skin tone selection, and outside-click closure.
- 🎥 **Audio & Video Calls**: WebRTC-based calls with mute/unmute syncing.
- 🟢 **Online Presence**: Real-time user status updates.
- 👤 **Profile Management**: Upload profile pictures and change passwords via Cloudinary.
- 🌙 **Theming**: Customizable UI with DaisyUI and Tailwind CSS.
- 🔁 **Typing Indicators**: Debounced typing status with Socket.IO.
- 📊 **State Management**: Efficient state handling with Zustand.

---

## 📦 Tech Stack

### Frontend

- **React**: "^19.0.0" - Component-based UI (beta version).
- **Vite**: Integrated via `@tailwindcss/vite@^4.1.11` - Fast build tool.
- **Zustand**: "^5.0.6" - Lightweight state management.
- **Tailwind CSS**: With `@tailwindcss/line-clamp@^0.4.4` - Utility-first styling.
- **DaisyUI**: Tailwind component library.
- **Lucide Icons**: "^0.525.0" - Custom icons.
- **Typewriter Effect**: "^2.22.0" - Text animations.
- **emoji-picker-react**: "^4.12.3" - Emoji selection with styling.
- **browser-image-compression**: "^2.0.2" - Image compression.
- **axios**: "^1.10.0" - HTTP client.
- **clsx**: "^2.1.1" - Conditional class names.
- **dompurify**: "^3.2.6" - HTML sanitization.
- **lodash**: "^4.17.21" - Utilities (e.g., debounce).
- **react-hot-toast**: "^2.5.2" - Notifications.
- **react-router-dom**: "^7.6.3" - Routing.
- **socket.io-client**: "^4.8.1" - Real-time client.
- **webrtc-adapter**: "^9.0.3" - WebRTC compatibility.

### Backend

- **Node.js**: Runtime environment.
- **Express**: "^5.1.0" - Web framework (pre-release).
- **MongoDB**: Database.
- **Mongoose**: "^8.13.2" - ORM.
- **Socket.IO**: "^4.8.1" - Real-time server.
- **jsonwebtoken**: "^9.0.2" - JWT authentication.
- **cookie-parser**: "^1.4.7" - Cookie handling.
- **cors**: "^2.8.5" - CORS support.
- **dotenv**: "^16.5.0" - Environment variables.
- **bcrypt**: "^5.1.1" - Password hashing.
- **bcryptjs**: "^3.0.2" - Alternative hashing (consider removing if redundant).
- **cloudinary**: "^2.6.0" - Image upload service.

### Real-Time Features

- **WebRTC**: Peer-to-peer streaming with `webrtc-adapter`.
- **STUN Server**: `stun:stun.l.google.com:19302` for NAT traversal.

---

## 🔧 Project Structure

/
├── Backend/
│ ├── routes/ # API endpoints (e.g., /auth, /message)
│ ├── models/ # Mongoose schemas (e.g., User, Message)
│ ├── lib/ # Utility functions (e.g., Axios config)
│ ├── middleware/ # Authentication middleware (e.g., JWT)
│ └── server.js # Main server with Socket.IO
├── Frontend/
│ ├── src/
│ │ ├── Pages/ # React pages (e.g., Login, Chat)
│ │ ├── Components/ # Reusable components (e.g., MessageInput, VideoComponent)
│ │ └── Store/ # Zustand stores (e.g., useChatStore)
├── README.md # Project documentation
├── LICENSE # MIT License
└── screens/ # Screenshot images

---

## 🚀 Deployment

### 🔹 Backend (Render)

1. Visit [https://dashboard.render.com/](https://dashboard.render.com/).
2. Select **New Web Service**.
3. Connect your GitHub repository[](https://github.com/jagathishkumar/chatzup).
4. Set **Root Directory** to `Backend/`.
5. Configure build and start commands:
   Build: npm install
   Start: npm run start

6. Add Environment Variables:

MONGODB_URI = ...

PORT = 5000

JWT_SECRET = ...

CLOUDINARY_CLOUD_NAME = ....

CLOUDINARY_API_KEY = .....

CLOUDINARY_API_SECRET = .....

7. Deploy and note the backend URL (e.g., `https://realtime-chat-video-calling-app.onrender.com`).

### 🔹 Frontend (Vercel)

1. Visit [https://vercel.com](https://vercel.com).
2. Import your GitHub repository[https://github.com/Jaga03/Realtime-Chat-Video-Calling-App](https://github.com/jagathishkumar/chatzup).
3. In project settings:
- **Root Directory**: `Frontend/`
- **Framework Preset**: `Vite`

5. Deploy and share the frontend URL (e.g., `https://chatzup-app.vercel.app/`).

---

## 🛡️ Environment Variables

### `.env` (Backend)
```env
PORT=5000
MONGODB_URI=mongodb+srv://your-username:your-password@cluster0.mongodb.net/chatzup?retryWrites=true&w=majority
JWT_SECRET=your-secret-key-here
NODE_ENV=production
CLOUDINARY_URL=cloudinary://your-cloudinary-api-key:your-cloudinary-api-secret@your-cloud-name

🤝 Contributing

1.Fork the repository.
2.Create a feature branch (git checkout -b feature/new-feature).
3.Commit changes (git commit -m "Add new feature").
4.Push to the branch (git push origin feature/new-feature).
5.Open a Pull Request.

👥 Credits

Created with ❤️ by Jagathish Kumar
Special thanks to the open-source community for libraries like Socket.IO, WebRTC, and emoji-picker-react.

📄 License
This project is licensed under the MIT License. See the LICENSE file for details.