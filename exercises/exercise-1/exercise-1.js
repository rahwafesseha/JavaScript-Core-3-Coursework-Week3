const personOne = {
  fName: "Popeye",
  age: 34,
  favouriteFood: "Spinach"
};

function introduceYourself(personOne) {
 let { fName, age, favouriteFood } = personOne;
  console.log(
    `Hello, my name is ${fName}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}

introduceYourself(personOne);
