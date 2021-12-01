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
/* Data structure for multiple patients. The col tokens, r,g,b,w etc. are to be remapped according to a 
colour lookup table (future work) to cater for colour blindness. The inner Json is extendable to 
incorporate the popup messages etc.. The outer Json is extendable to incorporate MRN etc..
*/
 const ps = [{
  "name" : "Elon Musk",
  "stripe": [{"col" : "r","len": 86},{"col" : "g","len": 46},{"col" : "b","len": 55}]
 },
 {
  "name" : "Guy Fawkes",
  "stripe": [{"col" : "r","len": 96},{"col" : "g","len": 36}]
 },
 {
  "name" : "Isambard Brunel",
  "stripe": [{"col" : "r","len": 96},{"col" : "w","len": 26},{"col" : "r","len": 46},{"col" : "g","len": 36}]
 },
 {
  "name" : "Andrea Motis",
  "stripe": [{"col" : "w","len": 26},{"col" : "g","len": 55},{"col" : "b","len": 43},{"col" : "g","len": 46}]
 },
 {
  "name" : "James Clerk Maxwell",
  "stripe": [{"col" : "b","len": 66},{"col" : "r","len": 66},{"col" : "r","len": 76},{"col" : "w","len": 84}]
 }]
]

//Create a string from arbitrary 
dispStr = ps[2].name + " " + ps[2].stripe[0].col + " " + ps[2].stripe[0].len

document.getElementById("pplaceholder").innerText=dispStr