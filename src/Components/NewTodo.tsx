import React, { useRef } from 'react';
import { todoItem } from '../App';
import './NewTodo.css';

interface NewTodoProps {
  onAdd: (item: todoItem) => void;
}

const NewTodo: React.FC<NewTodoProps> = props => {
  const inputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = inputRef.current!.value;
    const item = {
      id: Math.random(),
      text: enteredText,
    };
    props.onAdd(item);
    inputRef.current!.value = '';
  };

  return (
    <form action='' onSubmit={todoSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='newTodo'>Add a new Todo</label>
        <input type='text' id='newTodo' ref={inputRef} />
      </div>
      <button type='submit'>ADD</button>
    </form>
  );
};

export default NewTodo;
