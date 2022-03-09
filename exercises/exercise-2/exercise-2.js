let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];

//write a program that will take the `hogwarts` array as input and 
//display the names of the people who belong to the Gryffindor house.

function peopleInGryffindor(hogwarts) {
  for (let person in hogwarts)
  {
  
 let { firstName, lastName, house } = hogwarts[person];
    if (house === "Gryffindor") {
      console.log(
        `Hello, my name is ${firstName} ${lastName}.`
      );
    }
  }
  };

  peopleInGryffindor(hogwarts);

 //write a program that will take the `hogwarts` array as input and  
//display the names of teachers who have pets. 

function teacherWithPet(hogwarts) {
  for (let person in hogwarts)
  {
  
 let { firstName, lastName, pet ,occupation } = hogwarts[person];
    if (occupation==="Teacher" && pet != null) {
      console.log(`Hello, my name is ${firstName} ${lastName}.`);
    }
  }
  };

  teacherWithPet(hogwarts);

 
        


 
    
