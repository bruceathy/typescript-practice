const person = {
  name: "John",
  age: 30,
};

Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
