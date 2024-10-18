// server.js
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

// Create an instance of express
const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Folder to store uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Add a timestamp to the file name
  },
});

const upload = multer({ storage });

// Endpoint to handle product requests
app.post('/api/request-product', upload.single('image'), (req, res) => {
  const { size, color } = req.body;
  const imagePath = req.file ? req.file.path : null;

  // Log the request data
  console.log('Received product request:', { size, color, imagePath });

  // Here, you would typically save the data to a database

  // Send a response
  res.status(200).json({ message: 'Product request submitted successfully' });
});

// Serve uploaded files (optional)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
