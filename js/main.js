window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }
  }




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

dispStr = ps[2].name + " " + ps[2].stripe[0].col + " " + ps[2].stripe[0].len

document.getElementById("pplaceholder").innerText=dispStr