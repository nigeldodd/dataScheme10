window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }
    //document.getElementById("pplaceholder").innerHTML="replacement text"
  }


document.getElementById("pplaceholder").innerText="this text has been replaced"


const p1={
  "name" : "Elon",
  //"stripe": ["r","g","b"]//indices start at 0
  "stripe": [{"col" : "r","len": 86},{"col" : "g","len": 46}]
 }

 const ps = [{
  "name" : "Elon",
  "stripe": [{"col" : "r","len": 86},{"col" : "g","len": 46},{"col" : "b","len": 55}]
 },
 {
  "name" : "Fawkes",
  "stripe": [{"col" : "r","len": 96},{"col" : "g","len": 36}]
 },
 {
  "name" : "Isambard",
  "stripe": [{"col" : "r","len": 96},{"col" : "w","len": 26},{"col" : "r","len": 46},{"col" : "g","len": 36}]
 }]

document.getElementById("pplaceholder").innerText=ps[1].stripe[0].col
