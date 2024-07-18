// start2.mjs
import { newarray1 } from "./start.mjs";

let newArray = [];
for (let i = 0; i < newarray1.length; i++) {
  if (
    (newarray1[i] === "+" && newarray1[i + 1] === "+") ||
    (newarray1[i] === "-" && newarray1[i + 1] === "-")
  ) {
    newArray.push("+");
    i++;
  } else if (
    (newarray1[i] === "+" && newarray1[i + 1] === "-") ||
    (newarray1[i] === "-" && newarray1[i + 1] === "+")
  ) {
    newArray.push("-");
    i++;
  } else if (newarray1[i] === "+" || newarray1[i] === "-") {
    let j = i;
    while (
      j < newarray1.length &&
      (newarray1[j] === "+" || newarray1[j] === "-")
    ) {
      j++;
    }
    let segment = newarray1.slice(i, j);
    if (segment.includes("+") && segment.includes("-")) {
      newArray.push(segment[segment.length - 1] === "+" ? "-" : "+");
    } else {
      newArray.push(segment[0]);
    }
    i = j - 1;
  } else {
    newArray.push(newarray1[i]);
  }
}

export const array = newArray;
