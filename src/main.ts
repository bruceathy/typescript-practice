type Todo = {
  id: number;
  name: string;
  completed: boolean;
};

type NewTodo = {
  name: string;
  completed: boolean;
};

function saveToDo(todo: NewTodo) {
  return { ...todo, id: crypto.randomUUID };
}

function renderToDo(todo: Todo) {
  const div = document.createElement("div");
  div.id = todo.id;
}
