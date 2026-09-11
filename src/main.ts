type Person = {
  name: string;
  skillLevel: "beginner" | "intermediate" | "expert";
  yearsOfExperience?: number;
};

const person: Person = {
  name: "John Doe",
  skillLevel: "expert",
};
