/**
 * TYPE UTILITIES
 */

type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

const todo: Readonly<Todo> = {
  title: "Assistir Dark novamente",
  description: "Relembrar os detalhes",
  completed: false,
};

/**
 * PARTIAL
 *
 * Deixa os parametros opcionais
 * mas ainda garante que as propriedades que serão
 * passadas são as que estão no objeto inicial (todo)
 */

// criar uma função que retornará um novo objeto
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo2: Todo = updateTodo(todo, { completed: true });
console.log(todo2); // true

/**
 * PICK
 *
 * (pegar)
 * Caso seja necessário omitir mais coisas do que pegar, utilize o PICK
 */

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo3: TodoPreview = {
  title: "Fehar Ghost of Tsushima",
  completed: false,
};

/**
 * omit
 *
 * omitir alguma informação
 * Caso seja necessário pegar mais coisas do que omitir, utilize o OMIT
 */

type TodoPreview2 = Omit<Todo, "description">;

const todo4: TodoPreview = {
  title: "Fehar Ghost of Tsushima",
  completed: false,
};
