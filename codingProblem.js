const prompt = require('prompt-sync')();

let name = prompt("Enter your name:");
let address = prompt("Enter your address:");
let age = parseInt(prompt("Enter your age:"));
let classRole = prompt("Enter your class role (Officer, Student, Teacher):");
let course = prompt("Enter your course (BSCS, BSM, BAEL):");

if (course === "BSCS") {
  if (classRole === "Officer") {
    for (let i = 0; i < age / 4; i++) {
      console.log(name);
    }
  } else if (classRole === "Student") {
    for (let i = 0; i < age / 4; i++) {
      console.log(name);
    }
  } else if (classRole === "Teacher") {
    for (let i = 0; i < age / 4; i++) {
      console.log(name);
    }
  } else {
    console.log("Invalid class role.");
  }
} else if (course === "BSM") {
  if (classRole === "Officer") {
    for (let i = 0; i < age / 4; i++) {
      console.log(name);
    }
  } else if (classRole === "Student") {
    for (let i = 0; i < age / 4; i++) {
      console.log(name);
    }
  } else if (classRole === "Teacher") {
    for (let i = 0; i < age / 4; i++) {
      console.log(name);
    }
  } else {
    console.log("Invalid class role.");
  }
} else if (course === "BAEL") {
  if (classRole === "Officer"){
    for (let i = 0; i < age / 4; i++){
        console.log(name);
    }
  } else if (classRole === "Teacher") {
    for (let i = 0; i < age / 4; i++) {
        console.log(name);
    }
   } else {
        console.log("Invalid class roled.");
    }
  } else {
    console.log("Invalid course");
  }
  