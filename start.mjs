import { results } from "./maths.mjs";
let input = [];

export function inputF(anyInput) {
  if (anyInput !== "=") {
    input.push(anyInput);
    displayInput();
  } else {
    displayResult();
  }
}

function displayInput() {
  document.getElementById("display").innerText = input.join("");
}

function displayResult() {
  // Display the precomputed result from maths.mjs
  document.getElementById("display").innerText = results;
  input = [results.toString()]; // To continue calculations with the result
}

//-----------------------------------------------------------------------------------------
export let request = JSON.stringify(input);
export let array = [];
export let newarray = [];

function stringToArray(str) {
  return str.split("");
}

function equal(request) {
  return stringToArray(request);
}

function calc() {
  let reqArray = equal(request);
  let i = 0;

  for (let j = 0; j < reqArray.length; j++) {
    if (!isNaN(reqArray[j]) && reqArray[j] !== " ") {
      if (!array[i]) array[i] = [];
      array[i].push(reqArray[j]);
    } else {
      i++;
      array[i] = [reqArray[j]];
      i++;
    }
  }
}

calc();

function assignNewArray() {
  let filteredArray = array.filter((subArray) => subArray !== undefined);
  for (let i = 0; i < filteredArray.length; i++) {
    newarray[i] = filteredArray[i].join("");
  }
}

assignNewArray();

export { newarray as newarray1 };
