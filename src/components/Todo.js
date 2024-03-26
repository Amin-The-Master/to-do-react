import listIcon from '../icons/list.svg'
import Task from './Task';
import './ToDo.module.css';
import { useState,useEffect } from 'react';
const Todo = (props) => {
    let ToDo = JSON.parse(localStorage.getItem('toDo'));
    let done = JSON.parse(localStorage.getItem('done'));
    const [renderTasks,setRenderTasks] = useState('');
    
    useEffect(() => {
        if(ToDo) {
            setTimeout(() => {
                setRenderTasks(
                    ToDo.map(task => <Task 
                        onClick={makeDoneHandler} 
                        key={task.taskName} 
                        taskItems={task}/>)
                )
            });
        }
        
    },[ToDo]);

    const makeDoneHandler = (e) => {
        if(e.target.closest('.edit-task')) return;
        const data = e.target.closest('.task');
        if(!data) return;
        const data2 = ToDo.find(task => task.taskName === data.id);
        const data3 = ToDo.findIndex(task => task.taskName === data.id);
        data2.taskType = 'done';
        done.push(data2)
        localStorage.setItem('done',JSON.stringify(done));
        ToDo.splice(data3,1);
        localStorage.setItem('toDo',JSON.stringify(ToDo));
      }
    return (
        <div id='todo' className="bg-[#D5CCFF] sm:flex-1 lg:w-fit mb-3 h-fit 
        md:p-6 p-3 rounded-2xl">
            <div className="sm:flex">
                <div className="flex p-3">
                    <div>
                        <img className="w-fit" src={listIcon} alt="list-icon" />
                    </div>
                    <h1 className="text-[#2B1887] font-sans font-bold sm:text-3xl text-2xl pl-3 py-auto">To-Do</h1>
                </div>
                
                <div className="ml-auto">
                    <button onClick={props.showTheForm} className="
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
