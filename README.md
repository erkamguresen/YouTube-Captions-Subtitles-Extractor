# YouTube-Captions-Subtitles-Extracter

This is a small Bookmarklet that extracts captions from a Youtube Video (if exists) and opens a panel on the right side of the page to display all the captions.

This project is inspired from the youtuber techlead ([techlead youtube video](https://www.youtube.com/watch?v=r7SO-Oq3d5E)) and created for personal needs.

## Additional Data on website:

[medium article details](https://medium.com/@cafraser/how-to-download-public-youtube-captions-in-xml-b4041a0f9352)
{ "baseUrl": <a URL that starts with https://www.youtube.com/api/timedtext>,
"name": <how the subtitle is described on youtube>,
"vssId": <describes the type and language of captions: English captions are ".en", auto-generated English captions are "a.en">,
"languageCode": <"en" for English>,
"kind": <"asr" for auto-generated, "standard" for normal>,
"isTranslatable": <true|false> }

-For available languages
https://www.youtube.com/api/timedtext?v={$videoID}&type=list

-And working versions
http://video.google.com/timedtext?v={$videoID}&lang={$lang_code}&name={$name}

https://www.nicesnippets.com/blog/youtube-videos-download-source-code

## Bookmarklet

[Bookmarklet-wiki](https://en.wikipedia.org/wiki/Bookmarklet):
A bookmarklet is a bookmark stored in a web browser that contains JavaScript commands that add new features to the browser. Bookmarklets are unobtrusive JavaScripts stored as the URL of a bookmark in a web browser or as a hyperlink on a web page. Bookmarklets are usually JavaScript programs. Regardless of whether bookmarklet utilities are stored as bookmarks or hyperlinks, they add one-click functions to a browser or web page. When clicked, a bookmarklet performs one of a wide variety of operations, such as running a search query or extracting data from a table. For example, clicking on a bookmarklet after selecting text on a webpage could run an Internet search on the selected text and display a search engine results page.

Example usage :
<a href="javascript:(function() {
function se(d) {
    return d.selection ? d.selection.createRange().text : d.getSelection()
} 
s = se(document); 
for (i=0; i<frames.length && (s==null || s==''); i++) s = se(frames[i].document); 
if (!s || s=='') s = prompt('Enter%20search%20terms%20for%20Wikipedia',''); 
open('https://en.wikipedia.org' + (s ? '/w/index.php?title=Special:Search&search=' + encodeURIComponent(s) : '')).focus();
})();">Wiki Search Page</a> (Drag to bookmark bar)

-

- like subtitles
- arrange them in groups and keep them on the screen until the next one is available.
- use pauses between words to differentiate the sentences.

- this can be used in youtube video as subtitles
- @feature: organize into centances by using std or tree clustering method to combine each word into readable subtitle
- @feature: divide web page into 2 and on the left open the subtitle
- @feature: divide web page into 3: one left yuotube and 2 in the right. upper is the text and in the bottom is the translation of the subtitle.
- @feature: signature to "@author" find a text handwriting and link to repository

- Check auto google translate exmaple webapge (code) of this [website](https://bestsale.be/index.php?route=product/manufacturer)

[ ] TODO: add close button click to small onscreen ads
<button class="ytp-ad-overlay-close-button"><svg height="100%" viewBox="0 0 24 24" width="100%"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#fff"></path></svg></button>

<div class="ytp-ad-overlay-image"><img src="https://tpc.googlesyndication.com/simgad/11820373986082079758" width="728" height="90"></div>
<div class="ytp-ad-overlay-image"><img src="https://tpc.googlesyndication.com/simgad/11417019570824759654" width="728" height="90"></div>

<div class="ytp-ad-overlay-slot" id="invideo-overlay:n" style=""><div class="ytp-ad-overlay-container"><div class="ytp-ad-text-overlay" style="display: none;"><div class="ytp-ad-overlay-ad-info-button-container"></div><div class="ytp-ad-overlay-close-container"><button class="ytp-ad-overlay-close-button"><svg height="100%" viewBox="0 0 24 24" width="100%"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#fff"></path></svg></button></div><div class="ytp-ad-overlay-title"></div><div class="ytp-ad-overlay-desc"></div><div class="ytp-ad-overlay-link-inline-block ytp-ad-overlay-link"></div></div><div class="ytp-ad-text-overlay ytp-ad-enhanced-overlay" style="display: none;"><div class="ytp-ad-overlay-ad-info-button-container"></div><div class="ytp-ad-overlay-close-container"><button class="ytp-ad-overlay-close-button"><svg height="100%" viewBox="0 0 24 24" width="100%"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#fff"></path></svg></button></div><div class="ytp-ad-overlay-text-image"><img></div><div class="ytp-ad-overlay-title"></div><div class="ytp-ad-overlay-desc"></div><div class="ytp-ad-overlay-link-inline-block ytp-ad-overlay-link"></div></div><div class="ytp-ad-image-overlay" style="max-width: 728px;"><div class="ytp-ad-overlay-ad-info-button-container"><span class="ytp-ad-hover-text-button ytp-ad-info-hover-text-button" id="ad-info-hover-text-button:o" style=""><button class="ytp-ad-button ytp-ad-button-link ytp-ad-clickable" id="button:p" aria-label="Why this ad?" style=""><span class="ytp-ad-button-icon"><svg fill="#fff" height="100%" version="1.1" viewBox="0 0 48 48" width="100%"><path d="M0 0h48v48H0z" fill="none"></path><path d="M22 34h4V22h-4v12zm2-30C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"></path></svg></span></button><div class="ytp-ad-hover-text-container ytp-ad-info-hover-text-short">Why this ad?</div></span></div><div class="ytp-ad-overlay-close-container"><button class="ytp-ad-overlay-close-button"><svg height="100%" viewBox="0 0 24 24" width="100%"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#fff"></path></svg></button></div><div class="ytp-ad-overlay-image"><img src="https://tpc.googlesyndication.com/simgad/11417019570824759654" width="728" height="90"></div></div></div></div>
