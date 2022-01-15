// @ts-check


window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }
  }



// viewable at https://nigeldodd.github.io/dataScheme05/



 // Below is our target. This was made by hand from the Moqups graphic. The lengths are 10 x the days.
// Only the Rule x lines need be implemented. 
const psTarget = [{
  "name" : "James Blunt",
  "stripe": [{"col" : "r","len": 40, "txt":"Triage"},//"Triage CT thorax requested" Rule 1 red between referral and triage-completed
  {"col" : "g","len": 80, "txt":"Td"},//"CT thorax done" 
  {"col" : "r","len": 10, "txt":"Cr"},//"Clinic Requested."" Rule 2 red between CT thorax-completed and clinic-added
  {"col" : "g","len": 10, "txt":"Cd"},//"Clinic done, PET-CT requested"
  {"col" : "g","len": 170, "txt":"PET done"},//"PET-CT done"
  {"col" : "r","len": 10, "txt":"Er"},//"EBUS requested" Rule 3 red between PET-CT-completed and Ebus-added
  {"col" : "g","len": 10, "txt":"Ed"},//"EBUS done, MDT requested"
  {"col" : "g","len": 60, "txt":"MDT done, Surgery requested"},//"MDT done, Surgery requested"
  {"col" : "g","len": 160, "txt":"Surgery"},//"surgery"
  {"col" : "w","len": 70, "txt":""}]
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
var ps = []; //Rendering Data Packet, outside of loop so it can contain all patients in CDP
for (var p = 0; p < PatientDatalist.length; p++){
  //PatientData is the Clinical Data Packet
  var PatientData=PatientDatalist[p];
  var referralDateVar = PatientData["referralDate"];
  var referralDateDate = new Date(referralDateVar);
  var lenMilestones = PatientData["milestones"].length;
  var triageCompletedOn;
  var thoraxCompletedOn;
  var petCtCompletedOn;
  var clinicAddedAt;
  var ebusAddedAt;
  var surgeryAddedAt;
  var surgeryCompletedOn;
  //variables for rule delimiters
  var rule1Start=referralDateDate;
  var rule1End=0;
  var rule2Start=0;
  var rule2End=0;
  var rule3Start=0;
  var rule3End=0;
  var rule4Start=0;
  var rule4End=0;
  var rule1StartD=0;
  var rule1EndD=0;
  var rule2StartD=0;
  var rule2EndD=0;
  var rule3StartD=0;
  var rule3EndD=0;
  var rule4StartD=0;
  var rule4EndD=0;
  //etc.
  const currentDate = new Date();
  for (var i = 0; i < lenMilestones; i++){
    var psMilestone = {};
    var thisMilestone=PatientData["milestones"][i];
    if(thisMilestone["milestoneType"]["name"]=="Triage"){
      triageCompletedOn = new Date(thisMilestone["completedOn"]);
      rule1End = triageCompletedOn;
    }
    else if(thisMilestone["milestoneType"]["name"]=="CT thorax"){
      thoraxCompletedOn = new Date(thisMilestone["completedOn"]);
      rule2Start=thoraxCompletedOn;
    }
    else if(thisMilestone["milestoneType"]["name"]=="clinic"){
      clinicAddedAt = new Date(thisMilestone["addedAt"]);
      rule2End=clinicAddedAt;
    }
    else if(thisMilestone["milestoneType"]["name"]=="PET-CT"){
      petCtCompletedOn = new Date(thisMilestone["completedOn"]);
      if(petCtCompletedOn != "Invalid Date"){
       rule3Start=petCtCompletedOn;
      }
    }
    else if(thisMilestone["milestoneType"]["name"]=="EBUS"){
      ebusAddedAt = new Date(thisMilestone["addedAt"]);
      rule3End=ebusAddedAt;
    }
    else if(thisMilestone["milestoneType"]["name"]=="Surgery"){
      surgeryAddedAt = new Date(thisMilestone["addedAt"]);
      rule4Start=surgeryAddedAt;
      surgeryCompletedOn = new Date(thisMilestone["completedOn"]);
      rule4End=surgeryCompletedOn;
    }
  }
  // convert the dates to days from referral
  var msDay=1000*60*60*24;
  rule1StartD=0;
  rule1EndD=(rule1End-rule1Start)/msDay;
  rule2StartD=(rule2Start-rule1Start)/msDay;
  rule2EndD=(rule2End-rule1Start)/msDay;
  if(rule3Start){
    rule3StartD=(rule3Start-rule1Start)/msDay;
  }
  if(rule3End){
    rule3EndD=(rule3End-rule1Start)/msDay;
  }
  if(rule4Start){
    rule4StartD=(rule4Start-rule1Start)/msDay;
  }
  if(rule4End){
    rule4EndD=(rule4End-rule1Start)/msDay;
  }

  //populate timeLine of length 62 with g
  var timeLine = new Array(62).fill("g");

// turn red or blue the days corresponding to the rules
  //Rule 1: If “mile” (actually a variable distance), between two milestones is between referral date and triage milestones [completedOn], then colour this red
  for (var i = rule1StartD; i < rule1EndD; i++){
    timeLine[i]="r";
  }
  //Rule 2: Else if “mile” is between CT thorax done [completedOn] and clinic requested [addedAt], then colour is red
  for (var i = rule2StartD; i < rule2EndD; i++){
    timeLine[i]="r";
  }
  //Rule 3: Else if “mile is between PET-CT [completedOn] and EBUS requested [addedAt], then colour is red
  for (var i = rule3StartD; i < rule3EndD; i++){
    timeLine[i]="r";
  }
  //Rule 4: Else if “mile” is between surgery requested and surgery has not yet been done, then colour is blue
  for (var i = rule4StartD; i < rule4EndD; i++){
    timeLine[i]="b";
  }
  //Remainder of 62 day period is coloured white
  if(rule4StartD){ // to guard against overwriting everything white
    for (var i = rule4EndD; i < 62; i++){
      timeLine[i]="w";
    }
  }

//build the array "count" to contain the run lenghts of the colours
  var j=0;
  var count = [];
  for(var i =0; i<62 ; i++){
    count[j]=0;
    var t1=timeLine[i];
    while (timeLine[i]==t1){
      count[j]=count[j]+1;
      i++;
    }
    i--;
    j++;
  }

//build the psMilestones data structure that will become part of the RDP
  var scaleFac = 10;//for display. Should eventually be scaled such that 62 days fills the screen.
  var psPatientData = {"name" : PatientData["firstName"] + " " + PatientData["lastName"]} //Rendering Data Packet element
  var psMilestones = []; //list of {"col" : "b","len":166, "txt":"MDT"} type elements. i.e. RDP element without the header
  var colIndex=0;
  for (var i=0; i<count.length; i++){
    var psMilestone = {};
    psMilestone.col=timeLine[colIndex];
    psMilestone.len=count[i]*scaleFac;
    colIndex += count[i];//do this here to get the txt to equal the day number
    psMilestone.txt=colIndex;
    //psMilestone.txt="";
    psMilestones.push(psMilestone)
  }

  psPatientData.stripe=psMilestones;
  ps.push(psPatientData);//so that this psPatientData element becomes an element of the RDP

//Now we have ps resembling psTarget in all but txt

}// end of for (var p = 0; p < PatientDatalist.length){
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
    cellM1.className="smallText";
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
document.getElementById("pplaceholder").innerText="rev 004"; //useful for debugging

