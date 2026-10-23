type Todo = {
  id: string;
  name: string;
  status: string;
  completed: boolean;
};

type NewTodo = Omit<Todo, "id">;

function saveToDo(todo: NewTodo): Todo {
  return { ...todo, id: crypto.randomUUID() };
}

function renderToDo(todo: Todo) {
  const div = document.createElement("div");
  div.id = todo.id;
}
