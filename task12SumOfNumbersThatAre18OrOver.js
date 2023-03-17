const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];

const sumOfNumbers = arr.reduce((accumulator, currentValue) => {
  if (currentValue >= 18) {
    return accumulator + currentValue;
  }
  return accumulator;
}, 0);

console.log(sumOfNumbers)

