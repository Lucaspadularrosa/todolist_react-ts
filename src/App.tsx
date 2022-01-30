import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import { Itask } from './Interfaces';
import TodoTask from './components/TodoTask';

const App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<Itask[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'task') {
      setTask(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    console.log(newTask);
    setTodoList([...todoList, newTask]);
    setTask('');
    setDeadline(0);
  };

  const completeTask = (todoNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== todoNameToDelete;
      })
    );
  };

  return (
    <div className='App'>
      <div className='header'>
        <div className='inpuContainer'>
          <input
            type='text'
            name='task'
            placeholder='Task...'
            value={task}
            onChange={handleChange}
          />
          <input
            type='number'
            name='deadline'
            placeholder='Deadline...'
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className='todoList'>
        {todoList.map((todo: Itask, key: number) => {
          return <TodoTask key={key} todo={todo} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
