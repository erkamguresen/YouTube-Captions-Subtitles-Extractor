javascript: (function () {
  const v = document.querySelector('video');
  v.playbackRate = v.playbackRate != 1 ? 1 : 5;

  let isSkipped = false;
  while (!isSkipped) {
    try {
      const skipAdsButton = document.querySelector('.ytp-ad-skip-button');

      if (Array.isArray(skipAdsButton) && skipAdsButton.length) {
        const clickEvent = new Event('click');
        skipAdsButton.dispatchEvent(clickEvent);
        isSkipped = true;
        console.log(skipAdsButton);
      }
    } catch (error) {
      console.log(error);
    }
  }
})();
