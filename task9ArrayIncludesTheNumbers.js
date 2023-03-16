const arr = [1, 2, 'a', true, {}, undefined, 55, false, 'hi', null, 166, NaN];

function getNumbers(arr) {
  return arr.filter(item => typeof item === 'number' && !isNaN(item));
}

const numbersOnlyArr = getNumbers(arr);

console.log(numbersOnlyArr);