// main.mjs
import { array } from "./start2.mjs";
import { maths } from "./maths.mjs";

// Stack-based approach to find corresponding braces
let stack = [];
let pairs = [];

for (let j = 0; j < array.length; j++) {
  if (array[j] === "(") {
    stack.push(j);
  } else if (array[j] === ")") {
    if (stack.length === 0) {
      console.error("Mismatched closing brace at index " + j);
    } else {
      let openIndex = stack.pop();
      pairs.push([openIndex, j]);
    }
  }
}

if (stack.length > 0) {
  while (stack.length > 0) {
    console.error("Mismatched opening brace at index " + stack.pop());
  }
}

console.log("Corresponding braces indices: ", pairs);

for (let n = pairs.length - 1; n >= 0; n--) {
  let start = pairs[n][0];
  let end = pairs[n][1];

  let result = maths(array, start + 1, end - 1);
  array.splice(start, end - start + 1, result);
}

let result = maths(array, 0, array.length - 1);
console.log("Final Result: ", result);
