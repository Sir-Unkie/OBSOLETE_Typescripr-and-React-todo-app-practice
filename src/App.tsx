import React, { useState } from 'react';
import TodoList from './Components/TodoList';
import NewTodo from './Components/NewTodo';

export interface todoItem {
  id: number;
  text: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<todoItem[]>([]);

  const onDeleteHandler = (todo: todoItem) => {
    setTodos(prevState => {
      return prevState.filter(elem => {
        return elem.id !== todo.id;
      });
    });
  };

  const onAddHandler = (newTodo: todoItem) => {
    setTodos(prevState => {
      return [...prevState, newTodo];
    });
  };

  return (
    <div className='App'>
      <NewTodo onAdd={onAddHandler}></NewTodo>
      <TodoList items={todos} onDelete={onDeleteHandler}></TodoList>
    </div>
  );
};

export default App;
