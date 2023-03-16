function parseInteger(arr) {
    return arr.map(str => {
      const parsed = Number.parseInt(str);
      return Number.isNaN(parsed) ? null : parsed;
    });
  }
  
  console.log(parseInteger(["1", "2", "34"])); 
  console.log(parseInteger(["1", "px", "2323"]));