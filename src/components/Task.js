import { useState, useRef } from 'react';
import './Task.css'
import deleteIcon from '../icons/delete.svg'
import EditBtn from './EditBtn';
import Form from './Form';

let ToDo = JSON.parse(localStorage.getItem('toDo'));
const Task = (taskItems) => {
    const [showForm , setShowForm] = useState(false);

    const closeFormHandler = (e) => {
        setShowForm(false)
    }

    const taskName = useRef();
    const taskCorP = useRef();
    const Priority = useRef();
    const Level = useRef();
    const Date = useRef();

    const easy = <>
        <span className={`priority-level ${taskItems.taskItems.taskPriority} rounded-bl-3xl rounded-r ml-3 `}></span>
        <span className="priority-level empty rounded-bl-3xl rounded-r ml-3 "></span>
        <span className="priority-level empty rounded-bl-3xl rounded-r ml-3 "></span>
    </>;

    const moderated = <>
        <span className={`priority-level ${taskItems.taskItems.taskPriority} rounded-bl-3xl rounded-r ml-3 `}></span>
        <span className={`priority-level ${taskItems.taskItems.taskPriority} rounded-bl-3xl rounded-r ml-3 `}></span>
        <span className="priority-level empty rounded-bl-3xl rounded-r ml-3 "></span>
    </>;

    const hard = <>
        <span className={`priority-level ${taskItems.taskItems.taskPriority} rounded-bl-3xl rounded-r ml-3 `}></span>
        <span className={`priority-level ${taskItems.taskItems.taskPriority} rounded-bl-3xl rounded-r ml-3 `}></span>
        <span className={`priority-level ${taskItems.taskItems.taskPriority} rounded-bl-3xl rounded-r ml-3 `}></span>
    </>;

    let editBtn;

    const editHandler = function (e) {
        setShowForm(true);
        const findEditBtn = e.target.closest('.edit-task');
        editBtn = findEditBtn.id;
    }
    
    const submitEdit = (e) => {
        e.preventDefault();
        let data = ToDo.find(task => task.taskName === editBtn);
        console.log(data)
        ToDo.splice(data,1)
        const editedTask = {
            taskName: taskName.current.value,
            taskCorP: taskCorP.current.value,
            taskPriority: Priority.current.value,
            taskLevel: Level.current.value,
            taskDay: Date.current.value,
            taskType: 'to-do',
        }
        ToDo.push(editedTask);
        localStorage.setItem('toDo',JSON.stringify(ToDo)); 
    }

    return (
        <>
            {showForm && <Form onSubmit={submitEdit} closeForm={closeFormHandler}
            taskName={taskName} taskCorP={taskCorP} 
            Priority={Priority} Level={Level} 
            Date={Date}/>}

            <div onClick={taskItems.onClick} id={taskItems.taskItems.taskName} 
            className="task hover:cursor-pointer hover:shadow-2xl 
            hover:shadow-indigo-500 duration-200 rounded-md
            my-3 p-3">
                <div className="flex">
                    <h2 className="font-sans pl-3 font-bold text-2xl">{taskItems.taskItems.taskName}</h2>
                    <button className="close-task hidden ml-auto">
                        <img className="w-fit" src={deleteIcon} alt="delete" />
                    </button>
                    <EditBtn id={taskItems.taskItems.taskName} onClick={editHandler} taskItems={taskItems.taskItems}/>
                    
                </div>
                <div className="task-desc m-3 pt-4 sm:flex">

                    
                    <div className={`priority ${taskItems.taskItems.taskPriority}-priority`}>
                        <span className={`date ${taskItems.taskItems.taskPriority} 
                        ${taskItems.taskItems.taskDay === "None" ? 'hidden' : taskItems.taskItems.taskDay} 
                        p-3 rounded-xl font-sans sm:text-lg text-sm 
                        font-bold`}>{taskItems.taskItems.taskDay}</span>
                        
                        {taskItems.taskItems.taskLevel === 'Easy' 
                        ? easy 
                        : taskItems.taskItems.taskLevel === 'Moderate'
                        ? moderated
                        : hard}

                    </div>

                    <h4 className="desc font-sans sm:ml-auto md:text-2xl text-md">
                        {taskItems.taskItems.taskCorP}
                    </h4>
                </div>
            </div>
        </>
    );
}

export default Task;