var cell2 = document.createElement("td");
var middleTable = document.createElement("table");
var rowM1 = document.createElement("tr"); //top row for PET, CT etc
var rowM2 = document.createElement("tr"); //bottom row for stripe
for (var j = 0; j <ps[i].stripe.length; j++) {//all the parts of the stripe
  var cellM1=document.createElement("td");
  var cellM2=document.createElement("td");
  var cellLen = ps[i].stripe[j].len;
  cellM1.style.width = cellLen + "px";
  cellM2.style.width = cellLen + "px";
  rowM1.appendChild(cellM1); //append cells one after another in the top row
  rowM2.appendChild(cellM2); //append cells one after another in the bottom row
}//end of middle cell
middleTable.appendChild(rowM1);
middleTable.appendChild(rowM2);
