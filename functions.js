function ourReusableFunction() {
  console.log("Hey World!");
}

ourReusableFunction();

function dividedWindow() {
  var asideDiv = document.getElementsByClassName("asideDiv");

  // check if the div exists
  if (asideDiv.length === 0) {
    //create aside div
    asideDiv = document.createElement("div");
    asideDiv.className = "asideDiv";

    //create 2 divs' within the aside div
    var newDiv = document.createElement("div");
    newDiv.className = "asideDiv upperAsideDiv";

    var tag = document.createElement("h1");
    var text = document.createTextNode("this is the first part");
    tag.appendChild(text);
    newDiv.appendChild(tag);
    newDiv.setAttribute("id", "asideUpper");

    asideDiv.appendChild(newDiv);

    newDiv = document.createElement("div");
    newDiv.className = "asideDiv lowerAsideDiv";

    tag = document.createElement("h1");
    text = document.createTextNode("this is the second part");
    tag.appendChild(text);
    newDiv.appendChild(tag);

    asideDiv.appendChild(newDiv);

    //append to the body element
    document.body.appendChild(asideDiv);

    //style with borders
    asideDiv.style.cssText = "height:100%;" + "border: 2px solid red";
    newDiv.style.cssText = "height:50%; border:2px solid green";
    document.getElementById("asideUpper").style.cssText =
      "height:50%;" + "border:2px solid blue";

    // make grid 2fr 1 fr
    var body = document.body;
    body.style.cssText =
      "width:100%;" +
      "height:100vh;" +
      "border: 2px solid yellowgreen;" +
      "padding:10px;" +
      "display:grid; " +
      "grid-template-columns:2fr 1fr";

    //alert
    alert("3 window will be initiated");
  } else {
    //alert
    alert("3 window is already exists");
  }
}

function caseInSwitch(value) {
  var returnVar = "";
  switch (value) {
    case 1:
      returnVar = "alpha";
      break;
    case 2:
      returnVar = "beta";
      break;
    case 3:
      returnVar = "gamma";
      break;
    case 4:
      returnVar = "delta";
      break;
    default:
      returnVar = "theta";
      break;
  }

  return returnVar;
}

console.log(caseInSwitch(4));

//long way
const createdPerson = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender,
  };
};

console.log(createdPerson("Zodiac Hasbro", 56, "male"));

//short way
const createdPerson2 = (name, age, gender) => ({
  name,
  age,
  gender,
});

console.log(createdPerson2("Zodiac Hasbro", 56, "male"));

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