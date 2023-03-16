function parseInteger(arr) {
    return arr.map(str => {
      const parsed = parseInt(str, 10);
      return isNaN(parsed) ? null : parsed;
    });
  }
  
  console.log(parseInteger(["1", "2", "34"])); 
  console.log(parseInteger(["1", "px", "2323"]));