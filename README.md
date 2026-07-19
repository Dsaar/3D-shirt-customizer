# 👕 3D Shirt Customizer

An interactive AI-powered 3D shirt customization application built with **React**, **Three.js**, **React Three Fiber**, **Tailwind CSS**, and **Node.js**. Users can personalize a 3D T-shirt model by changing colors, uploading custom logos or textures, and generating unique designs using AI image generation.

---

## 🚀 Features

- 🎨 Interactive 3D shirt customization
- 🌈 Real-time color picker
- 🖼️ Upload custom logos and full-shirt textures
- 🤖 AI-generated shirt designs from text prompts
- 🔄 Live 3D rendering with React Three Fiber
- 📥 Download the customized design
- ⚡ Smooth animations with Framer Motion
- ☁️ Cloudinary image storage support

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Three.js
- React Three Fiber
- React Three Drei
- Tailwind CSS
- Framer Motion
- Valtio
- React Color

### Backend
- Node.js
- Express.js
- OpenAI API
- Cloudinary
- Dotenv
- CORS

---

## 📂 Project Structure

```text
shirt-customizer/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── canvas/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── store/
│   └── package.json
│
├── server/
│   ├── routes/
│   ├── package.json
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Dsaar/3D-shirt-customizer.git

cd 3D-shirt-customizer
```

---

### 2. Install dependencies

#### Client

```bash
cd client
npm install
```

#### Server

```bash
cd ../server
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **server** directory.

```env
OPENAI_API_KEY=your_api_key
```

---

## ▶️ Running the Application

### Start the backend

```bash
cd server
npm run dev
```

### Start the frontend

```bash
cd client
npm run dev
```

The frontend will typically run at:

```
http://localhost:5173
```

---

## 📸 Screenshots

Add screenshots or GIFs here to showcase the application.

Example:

```
/screenshots/home.png
/screenshots/customizer.gif
```

---

## 🎯 Future Improvements

- Multiple shirt models
- Save customized designs
- User authentication
- Design history
- More AI image providers
- Mobile optimization
- Additional clothing items (hoodies, hats, etc.)

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/my-feature
```

3. Commit your changes

```bash
git commit -m "Add awesome feature"
```

4. Push to the branch

```bash
git push origin feature/my-feature
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Dani Saar**

GitHub: https://github.com/Dsaar