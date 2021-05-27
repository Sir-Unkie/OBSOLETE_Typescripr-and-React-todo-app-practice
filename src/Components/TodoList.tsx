import React from 'react';
import { todoItem } from '../App';
import './TodoList.css';

interface TodoListProps {
  items: todoItem[];
  onDelete: (iii: todoItem) => void;
}

const TodoList: React.FC<TodoListProps> = props => {
  const deleteHandler = (todo: todoItem) => {
    props.onDelete(todo);
  };
  return (
    <ul>
      {props.items.map(todo => {
        return (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={deleteHandler.bind(null, todo)}>Finish</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
