import { useState } from 'react';
import './Task.css'
import Form from '../Form/FormSubmit';
import TaskLayout from './TaskLayout';

const Task = (props) => {
    const [showForm , setShowForm] = useState(false);
    const [editBtn , setEditBtn] = useState(false);
    
    const editHandler = function (e) {
        e.preventDefault();
        setShowForm(true);
        const findEditBtn = e.target.closest('.edit-task');
        setEditBtn(findEditBtn.id)
    }

    const closeFormHandler = (e) => {
        setShowForm(false);
    }

    return (
        <>
            {showForm && <Form formType={'Edit-Task'} editBtn={editBtn} 
            closeForm={closeFormHandler}/>}
            <TaskLayout onClick={props.onClick} taskName={props.taskName} 
            editHandler={editHandler} taskPriority={props.taskPriority} 
            taskDay={props.taskDay} taskLevel={props.taskLevel} 
            taskCorP={props.taskCorP} taskType={props.taskType}/>
        </>
    );
}

export default Task;