function skipAds() {
  const video = document.querySelector('video');

  const skipAdsButton = document.querySelector('.ytp-ad-skip-button');
  const smallAdsButton = document.querySelector('.ytp-ad-overlay-close-button');

  if (skipAdsButton) {
    video.playbackRate = video.playbackRate != 1 ? 1 : 5;

    setTimeout(() => {
      warnings.innerText = '';
    }, 1000);

    skipAdsButton.click();
  }

  if (smallAdsButton) {
    smallAdsButton.click();
  }
}

(function () {
  skipAds();

  document.onkeyup = function (event) {
    const video = document.querySelector('video');
    let e = event || window.event;

    // ctrl + Enter to skip adds or reset video playbackRate
    if (e.key === 'Enter' && e.ctrlKey) {
      skipAds();
      video.playbackRate = 1;
    }

    // + to decrease the video playback speed
    if (e.key === '+') {
      video.playbackRate += 0.25;
    }

    // - to decrease the video playback speed
    if (e.key === '-' && video.playbackRate > 0.25) {
      video.playbackRate -= 0.25;
    }

    // Ctrl + 0 to reset the video speed
    if (e.key === '0' && e.ctrlKey) {
      video.playbackRate = 1;
    }
  };
})();
