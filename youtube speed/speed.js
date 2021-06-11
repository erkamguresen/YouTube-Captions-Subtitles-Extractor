javascript: (function () {
  const v = document.querySelector('video');
  v.playbackRate = v.playbackRate != 1 ? 1 : 5;

  setTimeout(() => {
    warnings.innerText = '';
  }, 1000);
  const skipAdsButton = document.querySelector('.ytp-ad-skip-button');
  let isSkipped = false;
  skipAdsButton.click();
})();
