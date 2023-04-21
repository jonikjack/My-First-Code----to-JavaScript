//data types
//string, number, boolean, null, undefined, object, array

const streetName = "President ST"; //string
const houseNumber = 28; //number
const tenant = "John Doe";

console.log(tenant + " lives in " + streetName + " number " + houseNumber );
console.log(`${tenant} lives in ${streetName} number ${houseNumber}`);
console.log(tenant.toUpperCase());
console.log(tenant.toLowerCase());
console.log(tenant.split(' '))

//END

//ARRAY

const array = ["string", "number", "boolean"];
const cars = ["Tesla", "BMW", "AUDI"];
console.log(cars);
console.log(array);
cars.push("Honda");
array.push("object");
console.log(cars);
console.log(array);

//unshift
cars.unshift("Mercedes");
console.log(cars);

//pop
cars.pop();
console.log(cars);

//object
const person = {
    name1: "Javohir",
    age: 15,
    isMarried: false,
    address: {
        street: "Main ST",
        zipCode: 123,
        houseNumber : 28
    }
}
console.log(person);
console.log(person.age);
console.log(person.name1);
console.log(person.address);
console.log(person.address.street);
console.log(person.address.zipCode); //OLD METHOD

//NEW METHOD AT ES6

const { age, name1, isMarried, address: {street} } = person;
console.log(age, name1, isMarried, street);

console.log( JSON.stringify(person) );

//ARRAY - hard

/*const students = [
    {
        fname: "John Doe",
        age: 23,
        gradient: false
    },
    {
        fname: "Jane Smith",
        age: 21,
        gradient: true
    },
    {
        fname: "Bob Smith",
        age: 34,
        gradient: true
    }
];

console.log(students.length);
console.log(students[0]);
for(let i=0; i<=10; i++) {
    console.log(i);
}

for(let i=0; i < students.length; i++ ) {
    //console.log(i);
    //console.log(students[i] );
    console.log(students[i].fname);
}*/

//IF ELSE - continue

//const x = 34;
//const y = 54;

//if (x > y) {
    //if true
  //  console.log("True");
//}else {
    //if false
  //  console.log("False");
//}

/*if (x == y ) {
    console.log("true");
}else {
    console.log("false");
} */
//const x = 0;
//const y = "false";

/*if (x == y) {
    console.log("true")
}else{
    console.log("false")
} */

//const x = 0;
//const y = 0;

/*if(x === y) {
    console.log("True")
}else{
    console.log("False")
} */

/*const score = 89;

if ( score > 90 ) {
    console.log("You got A")
}else if (score < 90 && score >= 80) {
    console.log("You got B")
}else if (score < 80 && score >=70) {
    console.log("You got C")
}else if (score < 70 && score >=60 ) {
    console.log("You got D")
}else {
    console.log("You are failed")
} */

/*const score = 60;
 if ( score > 50 && score < 90) {
    console.log("true")
 }else {
    console.log("false")
 } */

/*const score = 90;
 if ( score > 100 || score < 150) {
    console.log("true")
 }else {
    console.log("false")
 }*/

 //FUNCTION
 const score = 72;

 const result = score > 70 ? "A" : "B";
 console.log(result);

 //ARRAY - functions
 const students = [
    {
        fname : "John Doe",
        age : 21,
        graduated: false 
    },
    {
        fname : "John Smith",
        age : 20,
        graduated : true
    }, 
    {
        fname : "Bob Mark",
        age : 34,
        graduated : true
    }
 ];
// array function : forEach, splice, slice, filter, map
 /*const graduated = students.filter(function(student){
    return student.graduated === true;
 }).map(function(s) {
    return s.fname;
 });

 console.log(graduated);
 console.log(students);*/


 // .map - separately(alohida)
 /*const graduated = students.map(function(s){
    return s.fname;
 });

 console.log(graduated);
 console.log(students);*/

 //MAP and FILTER
 const graduated = students.filter(student => {
    return student.graduated === true;
 }).map(s => {
    return s.fname;
 });

 console.log(graduated);
 console.log(students);

 //FUNCTION
 function greet(time) {
    switch (time) {
        case "morning":
            console.log("Good morning")
            break;
        case "afternoon":
            console.log("Good afternoon")
            break;
        case "evening":
            console.log("Good evening")
            break;
    }
 }

greet ("morning")
greet ("afternoon")
greet ("evening")

//FUNCTION -- 2

//FUNCTION -- skeleti  
function addNum () {
    console.log("Function works");
}

addNum(); //FUNKSIYA -- ISHGA TUSHURGUVCHI 

// 1 -- usul const siz
function addNum (num1, num2) {
    console.log(num1 + num2)
}

addNum(12, 33);
addNum(34, 2431321);
addNum(23432, 42342);

// 2 -- usul const bilan

const multiplyNum = function(n1, n2) {
    console.log(n1, n2)
}

multiplyNum(77, 777)

// 3 -- usul ESL- 6 da

const multiplyNu = (n1, n2) => {
    console.log(n1, n2)
}

multiplyNu(44, 133);

// 4 -- ko'p qiymatlar va qavslar

const myName = name1 => {
    console.log(name1)
}

myName("jonik") //string - ko'rinishi
 
//FUNCTION -- BMI
function calculateBmi(name, weight, heigth) {
    let bmi = weight / (heigth * heigth)
    console.log(name + "'s " + bmi + " ga teng" )
}

calculateBmi("Javohir", 70, 1.9);
calculateBmi("Mirjalol", 65, 1.65);
 
document.write("Hello World!")