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

console.log(
  `this is typescript practice for ${person.name} and ${person2.name} who is ${person.age} and ${person2.age} years old`,
);
