// routes/productRoutes.js
const express = require('express');
const multer = require('multer');
const router = express.Router();

// Set up multer for file uploads
const upload = multer({ dest: 'uploads/' }); // Change to your desired directory

// POST request to handle product requests
router.post('/request-product', upload.single('image'), (req, res) => {
  const { size, color } = req.body;
  const imagePath = req.file.path; // Get the path of the uploaded file

  // Here you can save the request to your database or perform any other logic
  console.log('Product request received:', { size, color, imagePath });

  // Send a response back to the client
  res.status(200).json({ message: 'Product request submitted successfully!' });
});

module.exports = router;
