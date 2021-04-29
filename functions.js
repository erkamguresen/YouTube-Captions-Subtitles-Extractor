function dividedWindow() {
  let asideDiv = document.getElementsByClassName("asideDiv");

  // check if the div exists
  if (asideDiv.length === 0) {
    //create aside div
    asideDiv = document.createElement("div");
    asideDiv.className = "asideDiv";

    //create 2 divs within the aside div
    let newDiv = document.createElement("div");
    newDiv.className = "asideDiv upperAsideDiv";

    let tag = document.createElement("h1");
    let text = document.createTextNode("this is the first part");
    tag.appendChild(text);
    newDiv.appendChild(tag);
    newDiv.setAttribute("id", "asideUpper");

    asideDiv.appendChild(newDiv);

    let newDiv2 = document.createElement("div");
    newDiv2.className = "asideDiv lowerAsideDiv";

    tag = document.createElement("h1");
    text = document.createTextNode("this is the second part");
    tag.appendChild(text);
    newDiv2.appendChild(tag);

    asideDiv.appendChild(newDiv2);

    //append to the body element
    document.body.appendChild(asideDiv);

    //style with borders
    asideDiv.style.height = "height:100%";
    asideDiv.style.border = "2px solid red";

    newDiv2.style.height = "50%";
    newDiv2.style.border = "border:2px solid green";

    document.getElementById("asideUpper").style.cssText =
      "height:50%;" + "border:2px solid blue";

    // make grid 2fr 1 fr
    let body = document.body;
    body.style.width = "100%";
    body.style.height = "100vh";
    body.style.border = "2px solid yellowgreen";
    body.style.padding = "10px";
    body.style.display = "grid";
    body.style.gridTemplateColumns = "2fr 1fr";

    /*cssText =
      "width:100%;" +
      "height:100vh;" +
      "border: ;" +
      "padding:10px;" +
      "display:grid; " +
      "grid-template-columns:2fr 1fr";*/

    //alert
    alert("3 window will be initiated");
  } else {
    //alert
    alert("3 window is already exists");
  }
}

function dividedWindowWithIFrame() {
  const url = window.location.href;

  let asideDiv = document.getElementsByClassName("asideDiv");

  if (asideDiv.length === 0) {
    const originalPage = document.querySelector("body");

    document.documentElement.removeChild(originalPage);

    let newBody = document.createElement("body");
    document.documentElement.appendChild(newBody);

    let mainPanel = document.createElement("main");
    newBody.appendChild(mainPanel);

    let iFrame = document.createElement("IFRAME");
    iFrame.setAttribute("src", url);
    mainPanel.appendChild(iFrame);

    asideDiv = document.createElement("div");
    asideDiv.className = "asideDiv";

    document.body.appendChild(asideDiv);

    let upperDiv = document.createElement("div");
    upperDiv.className = "asideDiv upperAsideDiv";

    let tag = document.createElement("h1");
    let text = document.createTextNode("this is the first part");
    tag.appendChild(text);
    upperDiv.appendChild(tag);
    upperDiv.setAttribute("id", "asideUpper");

    asideDiv.appendChild(upperDiv);

    let lowerDiv = document.createElement("div");
    lowerDiv.className = "asideDiv lowerAsideDiv";

    tag = document.createElement("h1");
    text = document.createTextNode("this is the second part");
    tag.appendChild(text);
    lowerDiv.appendChild(tag);

    asideDiv.appendChild(lowerDiv);

    let body = document.body;
    body.style.cssText =
      "margin: auto;" +
      "width:98%;" +
      "height:95vh;" +
      "border: 2px solid yellowgreen;" +
      "padding:10px;" +
      "display:grid; " +
      "grid-template-columns:2fr 1fr";

    lowerDiv.style.cssText = "height:50%; border:2px solid green";

    document.getElementById("asideUpper").style.cssText =
      "height:50%;" + "border:2px solid blue";

    mainPanel.style.cssText = "display:flex !important";

    iFrame.style.cssText = "width:100% !important";

    alert("3 window will be initiated");
  } else {
    alert("3 window is already exists");
  }
}

/*
//To move/re-place an HTML element:

<div id="target">1</div>
<span id="to_be_moved">-2</span>

document.getElementById('target').appendChild(  document.getElementById('to_be_moved') );
*/

// function(){
//     var regexp %3D new RegExp(
//         %2FplayerCaptionsTracklistRenderer.*%3F(
//             youtube.com%5C%2Fapi%5C%2Ftimedtext.*%3F
//             )
//     "%2F
//     )
//     %3B%0Avar match %3D regexp.exec
//     (document.body.innerHTML)%3B%0Aif (!match) %7B%0A
//     alert ("No captions found")%3B%0A
//     return%3B%0A%7D%0Avar url %3D regexp.exec(document.body.innerHTML)
//     %5B1%5D%3B%0Aopen("http%3A%2F%2Ftechleadpro.com%2Fytcaption%2Fcaption.php%3Furl%3D" %2B encodeURIComponent(url))%3B }

function getSubTitle() {
  var regexp = new RegExp(
    /playerCaptionsTracklistRenderer.*?(youtube.com\/api\/timedtext.*?)"/
  );
  var match = regexp.exec(document.body.innerHTML);
  if (!match) {
    alert("No captions found");
    return;
  }
  var url = regexp.exec(document.body.innerHTML)[1];
  open(
    "http://techleadpro.com/ytcaption/caption.php?url=" +
      encodeURIComponent(url)
  );
}

/*
A method to teg an element inside an iFrame
*/
//www.w3schools.com/jsref/prop_frame_contentdocument.asp

//cross browser versions
https: function myFunction() {
  var x = document.getElementById("myframe");
  var y = x.contentWindow || x.contentDocument;
  if (y.document) y = y.document;
  y.body.style.backgroundColor = "red";
}

function myFunction2() {
  var x = document.getElementById("myframe");
  var y = x.contentDocument;
  y.body.style.backgroundColor = "red";
}
