import React from 'react';
import { Itask } from '../Interfaces';

interface Props {
  todo: Itask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ todo, completeTask }: Props) => {
  return (
    <div className='task'>
      <div className='content'>
        <span>{todo.taskName}</span>
        <span>{todo.deadline}</span>
      </div>
      <button
        onClick={() => {
          completeTask(todo.taskName);
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoTask;
