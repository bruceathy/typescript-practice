type Person = {
  name: string;
  age: number;
  isDeveloper?: boolean;
  address: {
    street: string;
    city: string;
    country: string;
    zipCode: number;
  };
};

function greet(name: string, age: number) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

const person: Person = {
  name: "John Doe",
  age: 30,
  isDeveloper: true,
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
    zipCode: 12345,
  },
};

const person2: Person = {
  name: "Jane Doe",
  age: 27,
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
    zipCode: 12345,
  },
};

greet(person.name, person.age);
// `console.log(
//   `this is typescript practice for ${person.name} and ${person2.name} who is ${person.age} and ${person2.age} years old`,
// );`

// optional parameters
function printNameAndAge(name: string, age?: number) {
  console.log(`Name: ${name}, Age: ${age || "N/A"} years old`);
}
