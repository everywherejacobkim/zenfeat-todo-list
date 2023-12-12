import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoImage from "../assets/images/todo-bg.svg";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const addTodo = () => {
    if (newTodo.trim() === "") return;

    const newTodoItem: Todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo("");
    setIsCompleted(true);
  };

  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(updatedTodos);
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const updateTodoText = (id: number, newText: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );

    setTodos(updatedTodos);
  };

  return (
    <div className="w-[100%] lg:w-[50%] bg-primary flex flex-col justify-between px-8 lg:px-16 py-8 rounded-xl">
        <div>
            <h1 className="text-4xl font-bold">Todo List</h1>
        </div>
        <div className="h-full overflow-y-auto">
            <div className="flex flex-col pt-2">
                    {isCompleted ? (
                    <ul className="w-full">
                        {todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            toggleTodo={toggleTodo}
                            updateTodoText={updateTodoText}
                            deleteTodo={deleteTodo}
                        />
                        ))}
                    </ul>
                    ) : (
                    <div className="flex flex-col justify-center items-center mt-20">
                        <img src={TodoImage} alt="todo" className="w-80 h-80" />
                    </div>
                    )}
            </div>
      </div>
      <div className="relative flex w-full mt-4">
        <input
          type="text"
          className="rounded p-3 w-full border border-neutral-border bg-neutral-light  dark:bg-neutral-dark dark:border-neutral"
          placeholder="Add new task.."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="absolute right-1 z-30 bg-primary-action text-white rounded px-3.5 py-1 my-1.5"
          onClick={addTodo}
        >
          <div className="text-2xl">+</div>
        </button>
      </div>
    </div>
  );
};

export default TodoList;
