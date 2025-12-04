# 🎵 Moody Music Player

An intelligent music player that detects your facial expressions in real-time and recommends songs matching your current mood. Using AI-powered facial recognition technology, the app analyzes your emotions and curates a personalized playlist to match how you're feeling.

## ✨ Features

- **Real-time Facial Expression Detection**: Uses face-api.js to detect emotions like happy, sad, angry, surprised, neutral, disgusted, and fearful
- **Mood-based Song Recommendations**: Automatically fetches and displays songs that match your detected mood
- **Live Webcam Integration**: Captures your facial expressions through your device's camera
- **Audio Playback**: Play and pause recommended songs directly in the browser
- **Modern UI**: Clean, responsive interface built with React and Tailwind CSS
- **RESTful API**: Backend API for managing songs and mood-based queries
- **Cloud Storage**: Audio files stored securely using ImageKit CDN

## 🚀 Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **face-api.js** - Facial expression detection
- **Axios** - HTTP client
- **Tailwind CSS** - Styling framework

### Backend
- **Node.js** - Runtime environment
- **Express 5** - Web framework
- **MongoDB & Mongoose** - Database and ODM
- **Multer** - File upload handling
- **ImageKit** - Cloud storage for audio files
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- MongoDB (local or Atlas connection)
- npm or yarn package manager
- A webcam-enabled device
- ImageKit account (for audio storage)

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd "7-Project 2 (Moody Player)"
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:

```env
MONGO_URI=your_mongodb_connection_string
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

Start the backend server:

```bash
node server.js
```

The server will run on `http://localhost:3000`

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will run on `http://localhost:5173` (or the port shown in your terminal)

## 📖 Usage

### For Users

1. **Open the Application**: Navigate to the frontend URL in your browser
2. **Allow Camera Access**: Grant permission when prompted to access your webcam
3. **Detect Your Mood**: Click the "Detect Mood" button to analyze your facial expression
4. **Enjoy Music**: Browse the recommended songs and click play to listen

### For Developers - Adding Songs

Use the API to add songs to the database:

```bash
POST http://localhost:3000/songs
Content-Type: multipart/form-data

Fields:
- title: Song title
- artist: Artist name
- audio: Audio file (MP3)
- mood: Mood category (happy, sad, angry, surprised, neutral, disgusted, fearful)
```

Example using curl:

```bash
curl -X POST http://localhost:3000/songs \
  -F "title=Happy Song" \
  -F "artist=Artist Name" \
  -F "mood=happy" \
  -F "audio=@/path/to/song.mp3"
```

### Getting Songs by Mood

```bash
GET http://localhost:3000/songs?mood=happy
```

## 🎭 Supported Moods

The application detects and categorizes the following facial expressions:
- **Happy** 😊
- **Sad** 😢
- **Angry** 😠
- **Surprised** 😮
- **Neutral** 😐
- **Disgusted** 🤢
- **Fearful** 😨

## 📁 Project Structure

```
.
├── backend/
│   ├── src/
│   │   ├── app.js              # Express app configuration
│   │   ├── db/
│   │   │   └── db.js           # MongoDB connection
│   │   ├── models/
│   │   │   └── song.model.js   # Song schema
│   │   ├── routes/
│   │   │   └── song.routes.js  # API routes
│   │   └── service/
│   │       └── storage.service.js  # ImageKit upload service
│   ├── server.js               # Server entry point
│   └── package.json
│
└── frontend/
    ├── public/
    │   └── models/             # face-api.js pre-trained models
    ├── src/
    │   ├── components/
    │   │   ├── FacialExpression.jsx  # Mood detection component
    │   │   └── Songs.jsx              # Song list component
    │   ├── App.jsx             # Main app component
    │   ├── main.jsx            # App entry point
    │   └── index.css           # Global styles
    └── package.json
```

## 🔑 Environment Variables

### Backend `.env`

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGO_URI` | MongoDB connection string | Yes |
| `IMAGEKIT_PUBLIC_KEY` | ImageKit public API key | Yes |
| `IMAGEKIT_PRIVATE_KEY` | ImageKit private API key | Yes |
| `IMAGEKIT_URL_ENDPOINT` | ImageKit CDN endpoint URL | Yes |

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style and conventions
- Test your changes thoroughly before submitting
- Update documentation for any new features
- Keep commits atomic and well-described

## 🐛 Troubleshooting

### Camera Not Working
- Ensure your browser has camera permissions enabled
- Check if another application is using the camera
- Try using a different browser (Chrome/Firefox recommended)

### Models Not Loading
- Verify the face-api.js model files exist in `frontend/public/models/`
- Check browser console for any CORS or loading errors
- Ensure the dev server is running properly

### Songs Not Playing
- Check if audio files are properly uploaded to ImageKit
- Verify CORS is enabled on the backend
- Ensure the audio URLs are accessible

### Connection Issues
- Confirm MongoDB is running and accessible
- Verify backend is running on port 3000
- Check if environment variables are correctly set

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Maintainer

This project is maintained by Neeraj. For questions or support, please open an issue in the repository.

## 🙏 Acknowledgments

- [face-api.js](https://github.com/justadudewhohacks/face-api.js) - Facial recognition library
- [ImageKit](https://imagekit.io/) - Cloud storage solution
- [MongoDB](https://www.mongodb.com/) - Database platform

---

**Note**: This application requires a webcam and browser permissions to function properly. Make sure to allow camera access when prompted.
