type Todo = {
  title: string;
  priority: "High" | "Medium" | "Low";
  isComplete: boolean;
  description?: string;
  dueDate: Date | string;
};

function extendTodo(todo: Todo) {}
