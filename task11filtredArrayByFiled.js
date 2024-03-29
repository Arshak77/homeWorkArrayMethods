const users = [
    {
      username: "Yuri Gagarin",
      lang: "ru",
      isAstronaut: true,
    },
    {
      username: "Nil Armstrong",
      lang: "ENG",
      isAstronaut: true,
    },
    {
      username: "Elon Musk",
      isAstronaut: false,
    },
  ];
  
  function filterByField(arr, field) {
    return arr.filter((obj) => obj[field]);
  }
  
  console.log(filterByField(users, "isAstronaut"));