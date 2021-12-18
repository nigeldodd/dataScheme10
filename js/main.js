// @ts-check


window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }
  }



// viewable at https://nigeldodd.github.io/dataScheme02/



var PatientData = {
  "firstName": "James",
  "lastName": "Blunt",
  "dateOfBirth": "1952-05-11",
  "hospitalNumber": "1234567",
  "referralDate": "2021-05-11",
  "milestones": [
      {
       /*   "milestoneType": {
              "referenceName": "Plain chest X-ray (procedure)",
              "name": "Chest X-Ray"
          },
          "addedAt": "2021-05-09",
          "updatedAt": "2021-05-10",
          "completedOn": "2021-05-10",
          "currentState": "COMPLETED"
      },
      {*/
          "milestoneType": {
              "referenceName": "Triage",
              "name": "Triage"
          },
          "addedAt": "2021-05-15",
          "updatedAt": "2021-05-15",
          "completedOn": "2021-05-15",
          "currentState": "COMPLETED"
      },
      {
          "milestoneType": {
              "referenceName": "CT of Thorax",
              "name": " CT thorax "
          },
          "addedAt": "2021-05-21",
          "updatedAt": "2021-05-23",
          "completedOn": "2021-05-23",
          "currentState": "COMPLETED"
      },
      {
          "milestoneType": {
              "referenceName": "Clinic",
              "name": "clinic"
          },
          "addedAt": "2021-05-24",
          "updatedAt": "2021-05-25",
          "completedOn": "2021-05-25",
          "currentState": "COMPLETED"
      },
      {
          "milestoneType": {
              "referenceName": "PET CT of whole body",
              "name": "PET-CT"
          },
          "addedAt": "2021-05-25",
          "updatedAt": "2021-06-06",
          "completedOn": "2021-06-06",
          "currentState": "COMPLETED"
      },
      {
          "milestoneType": {
              "referenceName": "Endobronchial ultrasonography guided transbronchial needle aspiration",
              "name": "EBUS"
          },
          "addedAt": "2021-06-07",
          "updatedAt": "2021-06-07",
          "completedOn": "2021-06-09",
          "currentState": "COMPLETED"
      },
      {
          "milestoneType": {
              "referenceName": "Specialist multidisciplinary team",
              "name": "MDT"
          },
          "addedAt": "2021-06-09",
          "updatedAt": "2021-06-11",
          "completedOn": "2021-06-11",
          "currentState": "COMPLETED"
      },
      {
          "milestoneType": {
              "referenceName": "Thoracic surgery",
              "name": "Surgery"
          },
          "addedAt": "2021-06-11",
          "updatedAt": "2021-06-31",
          "completedOn": "2021-06-30",
          "currentState": "COMPLETED"
      }
  ]
};


  /* Data structure for multiple patients. The col tokens, r,g,b,w etc. are to be remapped according to a 
colour lookup table to cater for colour blindness. The inner Json is extendable to 
incorporate the popup messages etc.. The outer Json is extendable to incorporate MRN etc..
*/


const ps0 = [{
    "name" : "Elon Musk",
    "stripe": [{"col" : "r","len": 186, "txt":"PET"},{"col" : "g","len": 146, "txt":"CT"},{"col" : "b","len": 155, "txt":"MDT"}]
  },
  {
    "name" : "Guy Fawkes",
    "stripe": [{"col" : "r","len": 196, "txt":"CT"},{"col" : "g","len": 236, "txt":"PET"}]
  },
  {
    "name" : "Isambard Brunel",
    "stripe": [{"col" : "r","len": 296, "txt":"MDT"},{"col" : "w","len": 126, "txt":"CT"},{"col" : "r","len": 146, "txt":"PET"},{"col" : "g","len": 136, "txt":"MDT"}]
  },
  {
    "name" : "Andrea Motis",
    "stripe": [{"col" : "w","len": 226, "txt":"CT"},{"col" : "g","len": 155, "txt":"PET"},{"col" : "b","len": 243, "txt":"MDT"},{"col" : "g","len": 146, "txt":"MDT"}]
  },
  {
    "name" : "James Clerk Maxwell",
    "stripe": [{"col" : "b","len":166, "txt":"MDT"},{"col" : "r","len": 166, "txt":"PET"},{"col" : "r","len": 176, "txt":"CT"},{"col" : "w","len": 184, "txt":"MDT"}]
  }
  ];


/* 
The following is a looup table to convert the colour keys given in the patient json
into a string. The string is a css style. There can be multiple tables. Here there is just one,
and so the index [0] is used to address it. More can be added to provide different colour
maps for different preferences or pathologies. 
Semantic key for normal colour vision:
Red that we are awaiting a decision, orange that we are awaiting tests, purple that we are awaiting surgery, blue waiting oncology
*/
const colTable = [{
  'r' : "red",  
  'g' : "grn",
  'b' : "blu",
  'w' : "whi"}
];

/* import the patientData parts into a form resembling ps0.
Since there is only one patient, there will only be
one item in the list.
*/

var scaleFac = 10;
var ps = [];
var psPatientData = {"name" : PatientData["firstName"] + " " + PatientData["lastName"]}
var psMilestones = [];
var referralDateVar = PatientData["referralDate"];
var referralDateDate = new Date(referralDateVar);
var lenMilestones = PatientData["milestones"].length;
var addedAtVar;
var updatedAtVar;
var completedOnVar;
var psCol="g";
var prevMilestoneDay=0
for (var i = 0; i < lenMilestones; i++){
  if(psCol=="r"){
    psCol="g";
    } else {
    psCol="r";
  }
  var psMilestone = {};
  addedAtVar=PatientData["milestones"][i]["addedAt"];
  completedOnVar=PatientData["milestones"][i]["completedOn"];
  var addedAtDate = new Date(addedAtVar);
  var completedOnDate = new Date(completedOnVar);
  var addedAtDays = (addedAtDate - referralDateDate)/(1000*60*60*24);
  var completedOnDays = (completedOnDate - referralDateDate)/(1000*60*60*24);
  psMilestone.col = psCol;
  psMilestone.len = (completedOnDays-prevMilestoneDay) * scaleFac;
  prevMilestoneDay = completedOnDays; 
  psMilestone.txt = PatientData["milestones"][i]["milestoneType"]["name"];
  psMilestones.push(psMilestone);

 }
psPatientData.stripe=psMilestones;
ps.push(psPatientData);


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
  rowM2.className='stripe';
  for (var j = 0; j <ps[i].stripe.length; j++) {//all the parts of the stripe
    var cellM1=document.createElement("td");
    var cellM2=document.createElement("td");
    var cellLen = ps[i].stripe[j].len;
    cellM1.style.width = cellLen + "px";
    cellM2.style.width = cellLen + "px";
    cellM1Text=document.createTextNode(ps[i].stripe[j].txt);
    cellM1.appendChild(cellM1Text);
    // Lookup the colour and set the css style
    var colKey = ps[i].stripe[j].col; //colKey is a string
    var colRef=colTable[0][colKey];//gets the value e.g. whi, a string. Must use [] not . to access this.
    cellM2.className=colRef;
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
ourTable.appendChild(ourTableBody);//outer table placed in ourTableBody which is passed from html
document.getElementById("pplaceholder").innerText="rev 001"; //useful for debugging

