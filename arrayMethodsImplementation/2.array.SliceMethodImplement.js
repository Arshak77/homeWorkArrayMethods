function slice(arr, startIndex, endIndex) {
   
    startIndex = startIndex || 0;
  
    endIndex = endIndex || arr.length;
  
   let result = [];
  
    for (let i = startIndex; i < endIndex; i++) {
      result.push(arr[i]);
    }

    return result;
  }
const arr = ['Aro', 'Maro', "Bago", "Vagho", "Vaso"];
let  slicedArr = slice(arr, 1, 4);

console.log(slicedArr);