type Todo = {
  title: string;
  priority: "High" | "Medium" | "Low";
  isComplete: boolean;
  description?: string;
  dueDate: Date | string;
};

function extendTodo(todo: Todo) {
  switch (todo.priority) {
    case "High":
      todo.priority = "High";
      break;
    case "Medium":
      todo.priority = "Medium";
      break;
    case "Low":
      todo.priority = "Low";
      break;
  }
}
