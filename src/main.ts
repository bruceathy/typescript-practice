type Person = {
  name: string;
  skillLevel: "beginner" | "intermediate" | "expert";
  yearsOfExperience?: number;
};

const person: Person = {
  name: "John",
  skillLevel: "intermediate",
};
printSkillLevel(person.skillLevel);

function printSkillLevel(skillLevel: "beginner" | "intermediate" | "expert") {
  console.log(skillLevel);
}
