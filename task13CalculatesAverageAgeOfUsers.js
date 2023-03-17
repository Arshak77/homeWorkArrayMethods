function getAverageAge(users) {
    const totalAge = users.reduce((acc, user) => acc + user.age, 0);
    const avgAge = totalAge / users.length;
    return avgAge;
  }

const users = [
    {
      username: "Yuri Gagarin",
      lang: "ru",
      age: 56,
    },
    {
      username: "Nil Armstrong",
      lang: "ENG",
      age: 54,
    },
  ];
  
  const avgAge = getAverageAge(users);
  
  console.log(avgAge);