function skipAds() {
  const v = document.querySelector('video');
  v.playbackRate = v.playbackRate != 1 ? 1 : 5;

  setTimeout(() => {
    warnings.innerText = '';
  }, 1000);
  const skipAdsButton = document.querySelector('.ytp-ad-skip-button');

  skipAdsButton.click();
}

(function () {
  skipAds();

  document.onkeyup = function (event) {
    let e = event || window.event;
    if (e.key === 'Enter') {
      skipAds();
    }
  };
})();
