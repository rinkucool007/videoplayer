document.addEventListener('DOMContentLoaded', function () {
  const videoList = document.getElementById('videoList');
  const videoPlayer = document.getElementById('videoPlayer');

  function fetchVideos() {
    fetch('/api/videos')
      .then(response => response.json())
      .then(data => displayVideos(data))
      .catch(error => console.error('Error fetching videos:', error));
  }

  function displayVideos(videoFiles) {
    videoList.innerHTML = '';

    videoFiles.forEach(videoFile => {
      const videoLink = document.createElement('button');
      videoLink.textContent = videoFile;
      videoLink.addEventListener('click', () => playVideo(videoFile));
      videoList.appendChild(videoLink);
    });
  }

  function playVideo(videoFile) {
    const videoPath = `/videos/${videoFile}`;
    videoPlayer.src = videoPath;
    videoPlayer.load();
    videoPlayer.play();
  }

  fetchVideos();
});
