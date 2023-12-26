const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs').promises;

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, '../public')));

// Serve video files from the 'videos' folder
app.use('/videos', express.static(path.join(__dirname, '../videos')));

app.get('/api/videos', async (req, res) => {
    try {
      const videoFolderPath = path.join(__dirname, '../videos');
      const videoFiles = await getVideoFiles(videoFolderPath);
      res.json(videoFiles);
    } catch (error) {
      console.error('Error fetching videos:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  async function getVideoFiles(folderPath) {
    const files = await fs.readdir(folderPath);
    const videoFiles = files.filter(file => file.endsWith('.mp4'));
    return videoFiles;
  }
  

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
