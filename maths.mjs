// maths.mjs
export const maths = (array, start, end) => {
  let tempArray = array.slice(start, end + 1);

  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i] === "*") {
      tempArray.splice(i - 1, 3, tempArray[i - 1] * tempArray[i + 1]);
      i--;
    } else if (tempArray[i] === "/") {
      tempArray.splice(i - 1, 3, tempArray[i - 1] / tempArray[i + 1]);
      i--;
    }
  }

  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i] === "+") {
      tempArray.splice(i - 1, 3, tempArray[i - 1] + tempArray[i + 1]);
      i--;
    } else if (tempArray[i] === "-") {
      tempArray.splice(i - 1, 3, tempArray[i - 1] - tempArray[i + 1]);
      i--;
    }
  }

  return tempArray[0];
};

let array = [1, "+", 1, "+", 3, "-", 3, "*", 5, "/", 5, "-", 6];
let result = maths(array, 0, array.length - 1);
console.log(result);
export { result as results };
