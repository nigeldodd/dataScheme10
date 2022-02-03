// @ts-check


window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }
  }



// viewable at https://nigeldodd.github.io/dataScheme07/



 // Below is our target. This was made by hand from the Moqups graphic. The lengths are 10 x the days.
// Only the Rule x lines need be implemented. 
const psTarget = [{
  "name" : "James Blunt 2nd",
  "stripe": [{"col" : "r","len": 40, "txt":"Triage"},//"Triage CT thorax requested" Rule 1 red between referral and triage-completed
  {"col" : "g","len": 80, "txt":"Td"},//"CT thorax done" 
  {"col" : "r","len": 10, "txt":"Cr", "txt2":"Rule 2 red between CT thorax-completed and clinic-added"},//"Clinic Requested."" Rule 2 red between CT thorax-completed and clinic-added
  {"col" : "g","len": 10, "txt":"Cd"},//"Clinic done, PET-CT requested"
  {"col" : "g","len": 170, "txt":"PET done"},//"PET-CT done"
  {"col" : "r","len": 10, "txt":"Er"},//"EBUS requested" Rule 3 red between PET-CT-completed and Ebus-added
  {"col" : "g","len": 10, "txt":"Ed"},//"EBUS done, MDT requested"
  {"col" : "g","len": 60, "txt":"MDT done, Surgery requested"},//"MDT done, Surgery requested"
  {"col" : "g","len": 160, "txt":"Surgery"},//"surgery"
  {"col" : "w","len": 70, "txt":""}]
  },
  {
    "name": "Synth Etic",
    "stripe": [{ "col": "r", "len": 80, "txt": "1" },//"Triage CT thorax requested" Rule 1 red between referral and triage-completed
    { "col": "g", "len": 80, "txt": "2" },//"CT thorax done" 
    { "col": "r", "len": 80, "txt": "3" },//"Clinic Requested."" Rule 2 red between CT thorax-completed and clinic-added
    { "col": "g", "len": 80, "txt": "4" },//"Clinic done, PET-CT requested"
    { "col": "r", "len": 80, "txt": "5" },//"PET-CT done"
    { "col": "g", "len": 80, "txt": "6" },//"EBUS requested" Rule 3 red between PET-CT-completed and Ebus-added
    { "col": "r", "len": 80, "txt": "7" },//"EBUS done, MDT requested"
    { "col": "w", "len": 60, "txt": "8" }]
  }
];

  var PatientDatalist = [{
    "firstName": "James",
    "lastName": "Blunt",
    "dateOfBirth": "1952-05-11",
    "hospitalNumber": "1234567",
    "referralDate": "2021-05-11",
    "milestones": [
        {
            "milestoneType": {
                "referenceName": "Plain chest X-ray (procedure)",
                "name": "Chest X-Ray"
            },
            "addedAt": "2021-05-09",
            "updatedAt": "2021-05-10",
            "completedOn": "2021-05-10",
            "currentState": "COMPLETED"
        },
        {
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
                "name": "CT thorax"
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
},// end of James Blunt
{ 
	"firstName": "Benny",
	"lastName": "Hill",
	"dateOfBirth": "1923-07-01",
	"hospitalNumber": "0112345",
	"referralDate": "2021-03-13",
	"milestones":  [ 
		{ 
			"milestoneType": { 
				"referenceName": "Plain chest X-ray (procedure)",
				"name": "Chest X-Ray" 
			},
			"addedAt": "2021-03-01",
			"updatedAt": "2021-03-05",
			"completedOn" : "2021-03-05",
			"currentState": "COMPLETED" 
		},
		{ 
			"milestoneType": { 
				"referenceName": "CT of Thorax",
				"name": "CT thorax" 
			},
			"addedAt": "2021-03-09",
			"updatedAt": "2021-03-11",
			"completedOn" : "2021-03-11",
			"currentState": "COMPLETED" 
		},
		{ 
			"milestoneType": { 
        "referenceName" : "Triage",
        "name": "Triage"
      },
			"addedAt": "2021-03-15",
			"updatedAt": "2021-03-15",
			"completedOn" : "2021-03-15",
			"currentState": "COMPLETED" 
      },
      {
      "milestoneType":{
        "referenceName" : "Clinic",
        "name": "clinic"
      },
 			"addedAt": "2021-03-15",
			"updatedAt": "2021-03-23",
			"completedOn" : "2021-03-23",
			"currentState": "COMPLETED" 
		},
    {
			"milestoneType": { 
				"referenceName": "PET CT of whole body",
				"name": "PET-CT" 
			},
			"addedAt": "2021-03-23",
			"updatedAt": "2021-03-23",
			"completedOn" : "",
			"currentState": "INCOMPLETE" 
		}
	] 
}
]   ; 
/* Only rule 1 is triggered by Benny Hill
*/

var ps = []; //Rendering Data Packet List, outside of loop so it can contain all patients in CDP
var cdp; // Clinical Data Packet (for just one patient)
var rdp; // Rendering Data Packet (for just one patient)
for (var p = 0; p < PatientDatalist.length; p++) {
  cdp = PatientDatalist[p];
  rdp = parseRdp(cdp);
  ps.push(rdp);
}
ps.push(psTarget[0]);
ps.push(psTarget[1]);

/*Check for the existence of dateKey (eg CompletedOn)
If there is a valid date, return it as a Date object,
otherwise return 0.
*/
function getDateCheck(milestone,dateKey){
  if(milestone.hasOwnProperty(dateKey)){
    var thisDate = new Date(milestone[dateKey]);
    if (thisDate != "Invalid Date") {
      return(thisDate);
    }
  }
  return(0);
}

function parseRdp(PatientData) {
  //PatientData is the Clinical Data Packet
  var referralDateVar = PatientData["referralDate"];
  var referralDateDate = new Date(referralDateVar);
  var lenMilestones = PatientData["milestones"].length;
  //variables for rule delimiters
  var rule1Start = referralDateDate;
  var rule1End = 0;
  var rule2Start = 0;
  var rule2End = 0;
  var rule3Start = 0;
  var rule3End = 0;
  var rule4Start = 0;
  var rule4End = 0;
  var rule1StartD = 0;
  var rule1EndD = 0;
  var rule2StartD = 0;
  var rule2EndD = 0;
  var rule3StartD = 0;
  var rule3EndD = 0;
  var rule4StartD = 0;
  var rule4EndD = 0;
  //etc.
  const currentDate = new Date();
  for (var i = 0; i < lenMilestones; i++) {
    var thisMilestone = PatientData["milestones"][i];
    var milestoneName=thisMilestone["milestoneType"]["name"];
    if (milestoneName == "Triage") {
      rule1End = getDateCheck(thisMilestone,"completedOn");
    }
    else if (milestoneName == "CT thorax") {
      rule2Start = getDateCheck(thisMilestone,"completedOn");
    }
    else if (milestoneName == "clinic") {
      rule2End = getDateCheck(thisMilestone,"addedAt");
    }
    else if (milestoneName == "PET-CT") {
      rule3Start = getDateCheck(thisMilestone,"completedOn");
    }
    else if (milestoneName == "EBUS") {
      rule3End = getDateCheck(thisMilestone,"addedAt");
    }
    else if (milestoneName == "Surgery") {
      rule4Start = getDateCheck(thisMilestone,"addedAt");
      rule4End = getDateCheck(thisMilestone,"completedOn");
    }
  }
  // convert the dates to days from referral
  var msDay = 1000 * 60 * 60 * 24;
  rule1StartD = 0;
  if (rule1End){
    rule1EndD = (rule1End - rule1Start) / msDay;
  }
  if(rule2Start){
    rule2StartD = (rule2Start - rule1Start) / msDay;
  }
  if(rule2End){
    rule2EndD = (rule2End - rule1Start) / msDay;
  }
  if (rule3Start) {
    rule3StartD = (rule3Start - rule1Start) / msDay;
  }
  if (rule3End) {
    rule3EndD = (rule3End - rule1Start) / msDay;
  }
  if (rule4Start) {
    rule4StartD = (rule4Start - rule1Start) / msDay;
  }
  if (rule4End) {
    rule4EndD = (rule4End - rule1Start) / msDay;
  }

  /* Error checking is done first by getDateCheck which returns 0 if 
  either there is no date key or if the date is missing or "".
  Then in the conversion of days to referral, if a rule start or end date is 0
  the rule start or end D will be 0. 
  Then in the following population of the timeLine, a rule with End D of 0
  will not get written.
  */

  //populate timeLine of length 62 with g
  var timeLine = new Array(62).fill("g");

  // turn red or blue the days corresponding to the rules
  //Rule 1: If “mile” (actually a variable distance), between two milestones is between referral date and triage milestones [completedOn], then colour this red
  for (var i = rule1StartD; i < rule1EndD; i++) {
    timeLine[i] = "r";
  }
  //Rule 2: Else if “mile” is between CT thorax done [completedOn] and clinic requested [addedAt], then colour is red
  for (var i = rule2StartD; i < rule2EndD; i++) {
    timeLine[i] = "r";
  }
  //Rule 3: Else if “mile is between PET-CT [completedOn] and EBUS requested [addedAt], then colour is red
  for (var i = rule3StartD; i < rule3EndD; i++) {
    timeLine[i] = "r";
  }
  //Rule 4: Else if “mile” is between surgery requested and surgery has not yet been done, then colour is blue
  for (var i = rule4StartD; i < rule4EndD; i++) {
    timeLine[i] = "b";
  }
  //Remainder of 62 day period is coloured white
  if (rule4StartD) { // to guard against overwriting everything white
    for (var i = rule4EndD; i < 62; i++) {
      timeLine[i] = "w";
    }
  }

  //build the array "count" to contain the run lenghts of the colours
  var j = 0;
  var count = [];
  for (var i = 0; i < 62; i++) {
    count[j] = 0;
    var t1 = timeLine[i];
    while (timeLine[i] == t1) {
      count[j] = count[j] + 1;
      i++;
    }
    i--;
    j++;
  }

  //build the psMilestones data structure that will become part of the RDP
  var scaleFac = 10;//for display. Should eventually be scaled such that 62 days fills the screen.
  var psPatientData = { "name": PatientData["firstName"] + " " + PatientData["lastName"] }; //Rendering Data Packet element
  var psMilestone = {}; //single {"col" : "b","len":166, "txt":"MDT"} type elements. i.e. RDP single stripe segment
  var psMilestones = []; //list of {"col" : "b","len":166, "txt":"MDT"} type elements. i.e. RDP element without the header
  var colIndex = 0;
  for (var i = 0; i < count.length; i++) {
    psMilestone = {};
    psMilestone.col = timeLine[colIndex];
    psMilestone.len = count[i] * scaleFac;
    colIndex += count[i];//do this here to get the txt to equal the day number
    psMilestone.txt = colIndex;
    psMilestones.push(psMilestone)
  }

  psPatientData.stripe = psMilestones;
  return (psPatientData);
}// end of function parseRDP

//Now we have ps resembling psTarget in all but txt

//Now we have ps resembling psTarget in all but txt

//Now we have ps resembling psTarget in all but txt


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
//elements to be used for each row or each patient arranged as a list
var row = []; //tr one for each patient
var rowAnnot = [];  //tr one for each patient with annotation

for (var i = 0; i < ps.length; i++) { //iterate over patients
  row[i]=makeRow(ps[i],0);
  rowAnnot[i]=makeRow(ps[i],1);
  row[i].id=i; //needs to have persistence outside creation of object
  rowAnnot[i].id=i+ps.length; //needs to have persistence outside creation of object. The annotated rows have id's starting after the unannotated
  row[i].onclick = function() {showSingle(this.id)};
  rowAnnot[i].onclick = function() {showAll()};
}

showAll(); //The initial view is to show all the patients without annotation.
ourTable.appendChild(ourTableBody);//outer table placed in ourTableBody which is passed from html
document.getElementById("pplaceholder").innerText="rev 000"; //useful for debugging

function removeAllRows(){
  while (ourTableBody.firstChild) {//remove any children
    ourTableBody.removeChild(ourTableBody.lastChild);
  }
}

function showSingle(iShow) {
  console.log(iShow);
  removeAllRows();
  ourTableBody.appendChild(rowAnnot[iShow])    
}

function showAll(){
  removeAllRows();
  for (var i=0; i < ps.length; i++){
    ourTableBody.appendChild(row[i])    
  }
}

function makeRow(psRow, annot){//psRow is the RDP row, annot is 0 for no annotation, 1 for an upper row of annotation
  var row;
  var cell1; //td left hand td for the patient's name.
  row = document.createElement("tr");
  //at this point we want three td elements, the middle one containing an inner table
  //first td
  cell1 = document.createElement("td");
  var cellText1 = document.createTextNode(psRow.name);
  cell1.appendChild(cellText1)
  //now the middle table
  var cell2 = document.createElement("td");
  var middleTable = document.createElement("table");
  var rowM1 = document.createElement("tr"); //top row for PET, CT etc
  var rowM2 = document.createElement("tr"); //bottom row for stripe
  rowM2.className='stripe';
  for (var j = 0; j <psRow.stripe.length; j++) {//all the parts of the stripe
    var cellM1=document.createElement("td");
    var cellM2=document.createElement("td");
    var cellLen = ps[i].stripe[j].len - 3; //3 is a fundge factor to compensate for widths of td borders
    //var cellLen = ps[i].stripe[j].len;
    cellM1.style.width = cellLen + "px";
    cellM2.style.width = cellLen + "px";
    cellM1Text=document.createTextNode(psRow.stripe[j].txt);
    //cellM1Text=document.createTextNode("");
    cellM1.appendChild(cellM1Text);
    // Lookup the colour and set the css style
    var colKey = ps[i].stripe[j].col; //colKey is a string
    var colRef=colTable[0][colKey];//gets the value e.g. whi, a string. Must use [] not . to access this.
    cellM1.className="smallText";
    cellM2.className=colRef;
    if(annot){
      rowM1.appendChild(cellM1); //append cells one after another in the top row
    }
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
  return(row);
}