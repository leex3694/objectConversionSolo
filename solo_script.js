// ! ! !
// Three Bugs


var arrayAtticus = {
    name: "Atticus", 
    employeeNum: "2405", 
    salaryBase: "47000", 
    scoredReview: 3
  };

var arrayJem = {
    name: "Jem", 
    employeeNum: "62347", 
    salaryBase: "63500", 
    scoredReview: 4
};



var arrayBoo = {
    name: "Boo", 
    employeeNum: "11435", 
    salaryBase: "54000", 
    scoredReview: 3
  };


var arrayScout = {
  name: "Scout", 
  employeeNum: "6243", 
  salaryBase: "74750", 
  scoredReview: 5};

 /*
 function goThroughPeople(name, employeeNum, salaryBase, scoredReview){
    this.name = name;
    this.employeeNum = employeeNum;
    this.salaryBase = salaryBase;
    this.scoredReview = scoredReview;
}

var abc = goThroughPeople(Erick, 1456, 34000, 25, 5);

console.log(abc);


var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

*/

var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
	//switched array[i] = calculateSTI(array) ;
  array[i] = calculateSTI(array[i]) ;
 	newEl = document.createElement('li');
	newText = document.createTextNode(array[i]);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function calculateSTI(object){
  var newArray = [];

  newArray[0] = object.name;

  var employeeNumber = object.employeeNum;
  var baseSalary = object.salaryBase;
  var reviewScore = object.scoredReview;

//var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }
 

  newArray[1] = bonus;
  newArray[2] = Math.round(baseSalary * (1.0 + bonus));
  newArray[3] = Math.round(baseSalary * bonus);
  console.log(newArray.name + " " + newArray.employeeNum + " " + newArray.salaryBase + " " + newArray.scoredReview);
  return newArray;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent;

}


function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}