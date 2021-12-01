window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }
    //document.getElementById("pplaceholder").innerHTML="replacement text"
  }

function changeColor(newColor) {
  var elem = document.getElementById('para');
  elem.style.color = newColor;
}
document.getElementById("pplaceholder").innerText="this text has been replaced"

/*function replaceHolder() {
  document.getElementById("pplaceholder").innerText="replacement text"
}

replaceHolder();*/
//document.getElementById("pplaceholder").innerHTML="replacement text"

const p1={
  "name" : "Elon",
  "stripe: ["r","g","b"]
 }
 //alert(p1.stripe[1])
 alert(p1.name)