import listIcon from '../icons/list.svg'
import Task from './Task';
import Form from './Form';
import './ToDo.module.css';
import { useState, useEffect, useRef } from 'react';
const Todo = () => {
    let ToDo = JSON.parse(localStorage.getItem('toDo'));
    let progressing = JSON.parse(localStorage.getItem('progressing'));
    let done = JSON.parse(localStorage.getItem('done'));
    const [renderTasks,setRenderTasks] = useState('');
    const [showForm , setShowForm] = useState(false);
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
        };

        if(ToDo.find(tasks => tasks.taskName === task.taskName)) {
            alert('The Task Is Already there');
            return;
        } else {
            const toDoTasks = JSON.parse(localStorage.getItem('toDo'));
            toDoTasks.push(task);
            localStorage.setItem('toDo',JSON.stringify(toDoTasks));
            setShowForm(false)
        } 
    }

    const closeFormHandler = (e) => {
        e.preventDefault();
        setShowForm(false)
    }


    const showFormHandler = (e) => {
        e.preventDefault();
        setShowForm(true);
    }

    useEffect(() => {
        setTimeout(() => {
            setRenderTasks(
                ToDo.map(task => <Task 
                    onClick={makeDoneHandler} 
                    key={task.taskName} 
                    taskItems={task}/>)
            )
        });
    },[ToDo,showForm]);

    const makeDoneHandler = (e) => {
        if(e.target.closest('.edit-task')) return;
        const data = e.target.closest('.task');
        if(!data) return;
        const data2 = ToDo.find(task => task.taskName === data.id);
        const data3 = ToDo.findIndex(task => task.taskName === data.id);
        data2.taskType = 'done';
        progressing.push(data2)
        localStorage.setItem('progressing',JSON.stringify(progressing));
        ToDo.splice(data3,1);
        localStorage.setItem('toDo',JSON.stringify(ToDo));
        setTimeout(() => {
            progressing.splice(data2,1);
            localStorage.setItem('progressing',JSON.stringify(progressing));
            done.push(data2);
            localStorage.setItem('done',JSON.stringify(done));
        },500);
    }

    return (
        <div id='todo' className="bg-[#D5CCFF] sm:flex-1 m-3 h-fit 
        md:p-6 p-3 rounded-2xl">
            {showForm && <Form formType={'Add Task'} onSubmit={taskHandler} closeForm={closeFormHandler}
            taskName={taskName} taskCorP={taskCorP} 
            Priority={Priority} Level={Level} 
            Date={Date}/>}
            <div className="flex">
                <div className="flex p-3">
                    <div>
                        <img className="w-fit" src={listIcon} alt="list-icon" />
                    </div>
                    <h1 className="text-[#2B1887] font-sans font-bold sm:text-3xl text-2xl pl-3 py-auto">To-Do</h1>
                </div>
                
                <div className="ml-auto">
                    <button onClick={showFormHandler} className="
                     add-task 
                     duration-200 
                     font-sans
                     font-bold 
                     sm:text-3xl 
                     text-2xl 
                     rounded 
                     hover:rounded 
                     bg-white
                     hover:bg-[#2B1887]
                     p-3
                     hover:text-white
                     text-[#2B1887]">Add Task</button>
                </div>
            </div>

            {renderTasks}
        </div>
    )
}

export default Todo;
