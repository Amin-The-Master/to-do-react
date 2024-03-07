import './App.module.css'
import { useState, useRef } from 'react';
import Form from './components/Form';
import Done from './components/Done';
import Todo from './components/Todo';

function App() {
  if(!localStorage.key('toDo')) {
    localStorage.setItem('toDo',JSON.stringify([]));
    localStorage.setItem('done',JSON.stringify([]));
  }

  const taskName = useRef();
  const taskCorP = useRef();
  const Priority = useRef();
  const Level = useRef();
  const Date = useRef();

  const taskHandler = (e) => {
    e.preventDefault();
      const task = {
          taskName: taskName.current.value,
          taskCorP: taskCorP.current.value,
          taskPriority: Priority.current.value,
          taskLevel: Level.current.value,
          taskDay: Date.current.value,
          taskType: 'to-do',
      }
      const toDoTasks = JSON.parse(localStorage.getItem('toDo'));
      toDoTasks.push(task)
      localStorage.setItem('toDo', JSON.stringify(toDoTasks));
      setShowForm(false)
  }

  const [showForm , setShowForm] = useState(false);
  const showFormHanler = (e) => {
      e.preventDefault();
      setShowForm(true);
  }

  const closeFormHandler = (e) => {
    e.preventDefault();
    setShowForm(false)
  }

  return(
    <div className="to-do relative list lg:flex my-4 mx-auto mx-1 w-full lg:p-12 md:p-6">
      {showForm && <Form onSubmit={taskHandler} closeForm={closeFormHandler}
      taskName={taskName} taskCorP={taskCorP} 
      Priority={Priority} Level={Level} 
      Date={Date}/>}
      
      <Todo showTheForm={showFormHanler} />
      <Done />
    </div>
  )
}

export default App;
