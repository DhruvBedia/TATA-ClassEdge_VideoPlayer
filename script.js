const video = document.getElementById('videoPlayer');
const videoTitle = document.getElementById('videoTitle');

function togglePlay() {
  video.paused ? video.play() : video.pause();
}

function toggleFullScreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
}

// Optional: Update title from file name
video.addEventListener('loadedmetadata', () => {
  const filename = video.currentSrc.split('/').pop().replace(/\.[^/.]+$/, "");
  videoTitle.textContent = filename.replace(/_/g, ' ');
});
