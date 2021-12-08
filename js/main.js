window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }
  }



// viewable at https://nigeldodd.github.io/dataScheme01/



  /* Data structure for multiple patients. The col tokens, r,g,b,w etc. are to be remapped according to a 
colour lookup table (future work) to cater for colour blindness. The inner Json is extendable to 
incorporate the popup messages etc.. The outer Json is extendable to incorporate MRN etc..
*/
 const ps = [{
  "name" : "Elon Musk",
  "stripe": [{"col" : "r","len": 86, "txt":"PET"},{"col" : "g","len": 46, "txt":"CT"},{"col" : "b","len": 55, "txt":"MDT"}]
 },
 {
  "name" : "Guy Fawkes",
  "stripe": [{"col" : "r","len": 96, "txt":"CT"},{"col" : "g","len": 36, "txt":"PET"}]
 },
 {
  "name" : "Isambard Brunel",
  "stripe": [{"col" : "r","len": 96, "txt":"MDT"},{"col" : "w","len": 26, "txt":"CT"},{"col" : "r","len": 46, "txt":"PET"},{"col" : "g","len": 36, "txt":"MDT"}]
 },
 {
  "name" : "Andrea Motis",
  "stripe": [{"col" : "w","len": 26, "txt":"CT"},{"col" : "g","len": 55, "txt":"PET"},{"col" : "b","len": 43, "txt":"MDT"},{"col" : "g","len": 46, "txt":"MDT"}]
 },
 {
  "name" : "James Clerk Maxwell",
  "stripe": [{"col" : "b","len": 66, "txt":"MDT"},{"col" : "r","len": 66, "txt":"PET"},{"col" : "r","len": 76, "txt":"CT"},{"col" : "w","len": 84, "txt":"MDT"}]
 }
];

/*
Only need td's inside tr's inside a table.
This table will consist of tr's with three td's
the middle td will be itself a table
with two tr's, one for the labels like PET, CT, MDT
and the other for the coloured stripes
The td boundaries of these two rows will align. 
*/

var ourTable = document.getElementById("outerTable");//only the outer table is specified in html
var ourTableBody = document.createElement("tbody"); 
for (var i = 0; i < ps.length; i++) { //iterate over patients
  var row = document.createElement("tr");
  //at this point we want three td elements, the middle one containing an inner table
  //first td
  var cell1 = document.createElement("td");
  var cellText1 = document.createTextNode(ps[i].name);
  cell1.appendChild(cellText1)
  //now the middle table
  var cell2 = document.createElement("td");
  var middleTable = document.createElement("table");
  var rowM1 = document.createElement("tr"); //top row for PET, CT etc
  var rowM2 = document.createElement("tr"); //bottom row for stripe
  rowM2.className="stripe"
  for (var j = 0; j <ps[i].stripe.length; j++) {//all the parts of the stripe
    var cellM1=document.createElement("td");
    var cellM2=document.createElement("td");
    var cellLen = ps[i].stripe[j].len;
    cellM1.style.width = cellLen + "px";
    cellM2.style.width = cellLen + "px";
    cellM1Text=document.createTextNode(ps[i].stripe[j].txt)
    cellM1.appendChild(cellM1Text)
    //cellM1.className='stripe'
    cellM2.className='grn';
    rowM1.appendChild(cellM1); //append cells one after another in the top row
    rowM2.appendChild(cellM2); //append cells one after another in the bottom row
  }//end of middle cell
  middleTable.appendChild(rowM1);
  middleTable.appendChild(rowM2);
  //last td
  var cell3 = document.createElement("td");
  var cellText3 = document.createTextNode("discharged");
  cell3.appendChild(cellText3)
  // append middle table to cell2
  cell2.appendChild(middleTable)
  // append the three columns (td's) to the row
  row.appendChild(cell1);
  row.appendChild(cell2);
  row.appendChild(cell3);
  ourTableBody.appendChild(row)
}
ourTable.appendChild(ourTableBody);//outer table

/* Old code
//Create a string from arbitrary 
dispStr = ps[2].name + " " + ps[2].stripe[0].col + " " + ps[2].stripe[0].len;
document.getElementById("pplaceholder").innerText=dispStr
// https://www.webcodegeeks.com/javascript/javascript-table-example/
var ourTable = document.getElementById("outerTable");//only the outer table is specified in html
var ourTableBody = document.createElement("tbody"); 
for (var i = 0; i < ps.length; i++) {
  var row = document.createElement("tr");
  //at this point we want three td elements, the middle one containing an inner table
  //first td

  for (var j = 0; j <ps[i].stripe.length; j++) {
    var cell = document.createElement("td");
    var cellText = document.createTextNode("cell in row "+i+", column "+j);
    //cell.style.color="red"; ok
    //cell.setAttribute("color","blue"); no
    var cellLen = ps[i].stripe[j].len;// not expressed, since has to align with other columns
    cell.className='grn';
    cell.style.width = cellLen + "px";
    cell.appendChild(cellText);
    row.appendChild(cell);
  }
  ourTableBody.appendChild(row);
}
ourTable.appendChild(ourTableBody);//outer table
body.appendChild(ourTable);// not necessary because of previous line
ourTable.setAttribute("border", "2");
*/
