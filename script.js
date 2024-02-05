// Convert the types of null , Boolean , string , undefined into numeric
let nullValue = null;
let nullToNumber = Number(nullValue);
console.log(nullToNumber);

let booleanValue = true;
let booleanToNumber = Number(booleanValue);
console.log(booleanToNumber);

let stringValue = "100";
let stringToNumber = parseInt(stringValue);
console.log(stringToNumber);

let undefineValue;
let undefineToNumber = undefineValue || 0;
console.log(undefineToNumber);

//Declare an integer in a variable as radius of circle r , find the circumference and
// area of the circle using mathematical operators 
let radiusOfCircle =  50;
let circumfranceOfCircle = 2 * (22/7) * radiusOfCircle;
console.log(circumfranceOfCircle);
let areaOfCircle = (22/7) * radiusOfCircle * radiusOfCircle;
console.log(areaOfCircle);

//Similarly find the TotalSurfaceArea and volume of a cone , sphere 
//  the variables should be of your choice
let coneRadius = 5;
let coneHeight = 10;
let coneSurfaceArea = Math.PI * coneRadius * (coneRadius + Math.sqrt(coneRadius * coneRadius + coneHeight * coneHeight));
let coneVolume = (1 / 3) * Math.PI * coneRadius * coneRadius * coneHeight;
let sphereRadius = 5;
let sphereSurfaceArea = 4 * Math.PI * sphereRadius * sphereRadius;
let sphereVolume = (4 / 3) * Math.PI * Math.pow(sphereRadius, 3);
console.log("Total surface area of cone:", coneSurfaceArea.toFixed(2));
console.log("Volume of cone:", coneVolume.toFixed(2));
console.log("Total surface area of sphere:", sphereSurfaceArea.toFixed(2));
console.log("Volume of sphere:", sphereVolume.toFixed(2));

// So basically you have to create 6 type of variables and compare all of them , out of which each 
// 2 variables should be of same data type
// Variables of different types
var number1 = 10;
var number2 = 20;
var string1 = "hello";
var string2 = "world";
var boolean1 = true;
var boolean2 = false;
console.log("Number comparison:");
console.log(number1 === number2);
console.log("String comparison:");
console.log(string1 === string2); 
console.log("Boolean comparison:");
console.log(boolean1 === boolean2); 
console.log("Mixed type comparison:");
console.log(number1 === string1);
console.log(number1 === string2);
console.log(number2 === string1);
console.log(number2 === string1);
console.log(number1 === boolean1);
console.log(number1 === boolean2);
console.log(number2 === boolean1);
console.log(number2 === boolean2);
console.log(string1 === boolean1);
console.log(string1 === boolean2);
console.log(string2 === boolean1);
console.log(string2 === boolean2);
